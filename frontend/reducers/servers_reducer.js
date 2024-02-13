import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";
import { LOGOUT_CURRENT_USER} from "../actions/session_actions";
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from "../actions/server_membership_actions";

const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      newState[action.server.server.id] = action.server.server
      return newState;
    case RECEIVE_MEMBERSHIP:
      newState[action.membership.server.id] = action.membership.server;
      return newState;
    case REMOVE_MEMBERSHIP: 
      delete newState[action.payload.server.id]
      return newState;
    case REMOVE_SERVER:
      delete newState[action.serverId]
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default serversReducer;
