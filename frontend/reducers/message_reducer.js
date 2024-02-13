import {REMOVE_SERVER, RECEIVE_SERVER} from "../actions/server_actions";
import {RECEIVE_CHANNEL, REMOVE_CHANNEL} from "../actions/channel_actions";
import {REMOVE_MEMBERSHIP, RECEIVE_MEMBERSHIP} from "../actions/server_membership_actions";
import {RECEIVE_MESSAGE, REMOVE_MESSAGE} from "../actions/message_actions"

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    // Legacy code as the websockets are taking care of this now.
    // case RECEIVE_MESSAGE: 
      // newState[action.payload.id] = action.payload
      //return newState;
    case REMOVE_MESSAGE:
      delete newState[action.payload.id];
      return newState
    case RECEIVE_CHANNEL:
    // Clear Messages so that if you receive a new Channel, messages do not persit
    newState = {}
    // Fail Safe in case channel has no messages
    if(action.payload.messages){newState = action.payload.messages}
      return newState;
    case REMOVE_CHANNEL:
      return {};
    case REMOVE_SERVER:
      return {}
    case RECEIVE_MEMBERSHIP:
      newState = action.membership.messages
      return newState;
    case REMOVE_MEMBERSHIP:
      return {}
    case RECEIVE_SERVER:
      // Clear Messages so that if you receive a new Server, messages do not persit
      newState = {}
      // Fail Safe in case server's first channel has no messages
      if(action.server.messages){newState = action.server.messages}
      return newState;
    default:
      return state;
  } 
}


export default messageReducer;