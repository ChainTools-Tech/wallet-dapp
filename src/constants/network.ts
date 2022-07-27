import { Dictionary } from 'lodash';
import { NetworkConfig } from 'src/models';

// Default network
export const network: NetworkConfig = {
  id: 'bitsong-2b',
  name: 'BitSong',
  description: 'BitSong',
  logo: 'logo.svg',
  website: 'https://bitsong.io',
  apiURL: 'https://lcd.explorebitsong.com',
  rpcURL: 'https://rpc.explorebitsong.com',
  explorerURL: 'https://www.mintscan.io/bitsong/',
  supplyURL: 'https://supply.bitsong.io/',
  minBlockHeight: 2966151,
  stakingDenom: 'BTSG',
  coinLookup: [
    {
      viewDenom: 'BTSG',
      chainDenom: 'ubtsg',
      chainToViewConversionFactor: 1e-6,
      icon: 'currencies/bitsong.png',
    },
  ],
  addressPrefix: 'bitsong',
  validatorAddressPrefix: 'bitsongvaloper',
  validatorConsensusaddressPrefix: 'bitsongvalcons', // needed to map validators from staking queries to the validator set
  HDPath: 'm/44\'/639\'/0\'/0/0',
  coinType: 639,
  coinGeckoId: 'bitsong',
  lockUpPeriod: '3 days',
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'BTSG',
          amount: 0.001,
        },
      ],
    },
    ibcTransfer: {
      gasEstimate: 180000,
      feeOptions: [
        {
          denom: 'ubtsg',
          amount: 0,
        },
      ],
    },
  },
  icon: 'coins/btsg.svg',
  localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
};

export const networks: NetworkConfig[] = [
  network,
  {
    id: 'juno-1',
    name: 'Juno',
    description: 'Juno Mainnet',
    logo: 'logo.svg',
    website: 'https://junonetwork.io',
    apiURL: 'https://lcd-juno.itastakers.com',
    rpcURL: 'https://rpc-juno.itastakers.com',
    explorerURL: 'https://www.mintscan.io/juno/',
    supplyURL: 'https://supply.junonetwork.io/',
    minBlockHeight: 3062001,
    stakingDenom: 'JUNO',
    coinLookup: [
      {
        viewDenom: 'JUNO',
        chainDenom: 'ujuno',
        chainToViewConversionFactor: 1e-6,
        icon: 'currencies/bitsong.png',
      },
    ],
    addressPrefix: 'juno',
    validatorAddressPrefix: 'junovaloper',
    validatorConsensusaddressPrefix: 'junovalcons', // needed to map validators from staking queries to the validator set
    HDPath: 'm/44\'/118\'/0\'/0/0',
    coinType: 118,
    coinGeckoId: 'juno-network',
    lockUpPeriod: '3 days',
    fees: {
      default: {
        gasEstimate: 350000,
        feeOptions: [
          {
            denom: 'JUNO',
            amount: 0.001,
          },
        ],
      },
      ibcTransfer: {
        gasEstimate: 180000,
        feeOptions: [
          {
            denom: 'ujuno',
            amount: 0,
          },
        ],
      },
    },
    icon: 'coins/juno.svg',
    localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
  },
  {
    id: 'desmos-mainnet',
    name: 'Desmos',
    description: 'Desmos Mainnet',
    logo: 'logo.svg',
    website: 'https://desmos.network',
    apiURL: 'https://desmosapi.panthea.eu',
    rpcURL: 'https://desmosrpc.panthea.eu',
    explorerURL: 'https://www.mintscan.io/desmos/',
    minBlockHeight: 4000000,
    supplyURL: null,
    stakingDenom: 'DSM',
    coinLookup: [
      {
        viewDenom: 'DSM',
        chainDenom: 'udsm',
        chainToViewConversionFactor: 1e-6,
        icon: 'currencies/bitsong.png',
      },
    ],
    addressPrefix: 'desmos',
    validatorAddressPrefix: 'desmosvaloper',
    validatorConsensusaddressPrefix: 'desmosvalcons', // needed to map validators from staking queries to the validator set
    HDPath: 'm/44\'/852\'/0\'/0/0',
    coinType: 852,
    coinGeckoId: 'desmos',
    lockUpPeriod: '3 days',
    fees: {
      default: {
        gasEstimate: 350000,
        feeOptions: [
          {
            denom: 'DSM',
            amount: 0.001,
          },
        ],
      },
    },
    icon: 'coins/dsm.png',
    localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
  },
  {
    id: 'chihuahua-1',
    name: 'Chihuahua',
    description: 'Chihuahua Mainnet',
    logo: 'logo.svg',
    website: 'https://chihuahua.wtf',
    apiURL: 'https://api.chihuahua.wtf',
    rpcURL: 'https://rpc.chihuahua.wtf',
    explorerURL: 'https://www.mintscan.io/chihuahua/',
    minBlockHeight: 1,
    supplyURL: null,
    stakingDenom: 'HUAHUA',
    coinLookup: [
      {
        viewDenom: 'HUAHUA',
        chainDenom: 'uhuahua',
        chainToViewConversionFactor: 1e-6,
        icon: 'currencies/bitsong.png',
      },
    ],
    addressPrefix: 'chihuahua',
    validatorAddressPrefix: 'chihuahuavaloper',
    validatorConsensusaddressPrefix: 'chihuahuavalcons', // needed to map validators from staking queries to the validator set
    HDPath: 'm/44\'/118\'/0\'/0/0',
    coinType: 118,
    coinGeckoId: 'chihuahua-token',
    lockUpPeriod: '3 days',
    fees: {
      default: {
        gasEstimate: 350000,
        feeOptions: [
          {
            denom: 'HUAHUA',
            amount: 0.001,
          },
        ],
      },
    },
    icon: 'coins/huahua.png',
    localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
  },
  {
    id: 'panacea-3',
    name: 'Madibloc',
    description: 'Madibloc Mainnet',
    logo: 'logo.svg',
    website: 'https://medibloc.co.kr/',
    apiURL: 'https://api.gopanacea.org:443',
    rpcURL: 'https://rpc.gopanacea.org:443',
    explorerURL: 'https://www.mintscan.io/medibloc/',
    supplyURL: null,
    minBlockHeight: 1,
    stakingDenom: 'MED',
    coinLookup: [
      {
        viewDenom: 'MED',
        chainDenom: 'umed',
        chainToViewConversionFactor: 1e-6,
        icon: 'currencies/bitsong.png',
      },
    ],
    addressPrefix: 'panacea',
    validatorAddressPrefix: 'panaceavaloper',
    validatorConsensusaddressPrefix: 'panaceavalcons', // needed to map validators from staking queries to the validator set
    HDPath: 'm/44\'/118\'/0\'/0/0',
    coinType: 118,
    coinGeckoId: 'medibloc',
    lockUpPeriod: '3 days',
    fees: {
      default: {
        gasEstimate: 350000,
        feeOptions: [
          {
            denom: 'MED',
            amount: 0.001,
          },
        ],
      },
    },
    icon: 'coins/med.png',
    localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
  },{
    id: 'darchub',
    name: 'Konstellation',
    description: 'Konstellation Mainnet',
    logo: 'logo.svg',
    website: 'https://konstellation.tech/',
    apiURL: 'https://node1.konstellation.tech:1318',
    rpcURL: 'https://node1.konstellation.tech:26657',
    explorerURL: 'https://www.mintscan.io/konstellation/',
    supplyURL: null,
    minBlockHeight: 1,
    stakingDenom: 'DARC',
    coinLookup: [
      {
        viewDenom: 'DARC',
        chainDenom: 'udarc',
        chainToViewConversionFactor: 1e-6,
        icon: 'currencies/bitsong.png',
      },
    ],
    addressPrefix: 'darc',
    validatorAddressPrefix: 'darcvaloper',
    validatorConsensusaddressPrefix: 'darcvalcons', // needed to map validators from staking queries to the validator set
    HDPath: 'm/44\'/118\'/0\'/0/0',
    coinType: 118,
    coinGeckoId: 'darcmatter-coin',
    lockUpPeriod: '3 days',
    fees: {
      default: {
        gasEstimate: 350000,
        feeOptions: [
          {
            denom: 'DARC',
            amount: 0.001,
          },
        ],
      },
    },
    icon: 'coins/darc.png',
    localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
  },{
    id: 'fetchhub-4',
    name: 'Fetch.ai',
    description: 'Fetch.ai Mainnet',
    logo: 'logo.svg',
    website: 'https://fetch-ai.network/',
    apiURL: 'https://rest-fetchhub.fetch.ai:443',
    rpcURL: 'https://rpc-fetchhub.fetch.ai:443',
    explorerURL: 'https://explore-fetchhub.fetch.ai',
    supplyURL: null,
    minBlockHeight: 6000000,
    stakingDenom: 'FET',
    coinLookup: [
      {
        viewDenom: 'FET',
        chainDenom: 'afet',
        chainToViewConversionFactor: 1e-12,
        icon: 'coins/fetchhub.png',
      },
    ],
    addressPrefix: 'fetch',
    validatorAddressPrefix: 'fetchvaloper',
    validatorConsensusaddressPrefix: 'fetchvalcons', // needed to map validators from staking queries to the validator set
    HDPath: 'm/44\'/118\'/0\'/0/0',
    coinType: 118,
    coinGeckoId: 'fetch-ai',
    lockUpPeriod: '3 days',
    fees: {
      default: {
        gasEstimate: 350000,
        feeOptions: [
          {
            denom: 'FET',
            amount: 0.001,
          },
        ],
      },
    },
    icon: 'coins/fetchhub.png',
    localSigning: false, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
  }
];

export const DefaultGasPriceStep: Dictionary<number> = {
  low: 0.01,
  average: 0.025,
  high: 0.04,
};

export enum FeeType {
  LOW = 'low',
  AVERAGE = 'average',
  HIGH = 'high'
}
