import { Session, NetworkConfig } from 'src/models';
import { MutationTree } from 'vuex'
import { AuthenticationStateInterface } from './state'

const mutation: MutationTree<AuthenticationStateInterface> = {
  setSession(state, session: Session) {
    state.session = session;
  },
  setNetwork(state, network: NetworkConfig) {
    state.network = network;
  },
}

export default mutation;
