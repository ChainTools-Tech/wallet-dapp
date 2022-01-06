import { MessageTypes, SignBroadcastRequest } from 'src/models';
import { getNetworkFee } from 'src/common/fees';
import { BigNumber } from 'bignumber.js';
import { coins } from '@cosmjs/amino';
import {
  SigningStargateClient,
  assertIsBroadcastTxSuccess,
} from '@cosmjs/stargate';
import { getSigner } from './signer';
import { SendTx, RestakeTx, StakeTx, UnstakeTx } from './messages';
import { getCoinLookup } from 'src/common/network';
import { network } from 'src/constants';

export const getFees = (transactionType: string, feeDenom: string) => {
  const { gasEstimate, feeOptions } = getNetworkFee(transactionType)
  const fee = feeOptions.find(({ denom }) => denom === feeDenom);

  if (fee) {
    const coinLookup = getCoinLookup(fee.denom, 'viewDenom');

    if (coinLookup) {
      // converting view fee to on chain fee
      const convertedFee = [
        {
          amount: new BigNumber(fee.amount)
            .div(coinLookup.chainToViewConversionFactor)
            .toString(),
          denom: coinLookup.chainDenom,
        },
      ];

      return {
        gasEstimate: String(gasEstimate),
        fee: convertedFee,
      };
    }
  }
}

export const createSignBroadcast = async ({
  messageType,
  message,
  senderAddress,
  accountInfo,
  network,
  signingType,
  password,
  feeDenom,
  chainId,
  memo,
  ledgerTransport,
}: SignBroadcastRequest) => {
  const feeData = getFees(messageType, feeDenom);

  const transactionData = {
    ...feeData,
    memo,
    chainId,
    accountNumber: accountInfo.accountNumber,
    accountSequence: accountInfo.sequence,
  };

  const signer = await getSigner(
    signingType,
    {
      address: senderAddress,
      password,
    },
    chainId,
    ledgerTransport
  );

  const messages = [];

  switch(messageType) {
    case MessageTypes.SEND:
      messages.push(SendTx(senderAddress, message, network));
      break;
    case MessageTypes.STAKE:
      messages.push(StakeTx(senderAddress, message, network));
      break;
    case MessageTypes.UNSTAKE:
      messages.push(UnstakeTx(senderAddress, message, network));
      break;
    case MessageTypes.RESTAKE:
      messages.push(RestakeTx(senderAddress, message, network));
      break;
  }

  const stdFee = {
    amount: coins(
      Number(transactionData.fee ? transactionData.fee[0].amount : 0),
      transactionData.fee ? transactionData.fee[0].denom : 'BTSG'
    ),
    gas: transactionData.gasEstimate || '350000',
  };

  const client = await SigningStargateClient.connectWithSigner(
    network.rpcURL,
    signer
  );

  const txResult = await client.signAndBroadcast(
    senderAddress,
    messages,
    stdFee,
    memo || ''
  );

  assertIsBroadcastTxSuccess(txResult);

  return {
    hash: txResult.transactionHash,
  };
}

export const pollTxInclusion = async (txHash: string, iteration = 0): Promise<unknown> => {
  const MAX_POLL_ITERATIONS = 30;
  let txFound = false;

  try {
    await fetch(`${network.apiURL}/txs/${txHash}`).then((res) => {
      if (res.status === 200) {
        txFound = true
      }
    });
  } catch (err) {
    // ignore error
  }

  if (txFound) {
    return true;
  } else if (iteration < MAX_POLL_ITERATIONS) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return pollTxInclusion(txHash, iteration + 1);
  } else {
    throw new Error(
      `The transaction wasn't included in time. Check explorers for the transaction hash ${txHash}.`
    );
  }
}

