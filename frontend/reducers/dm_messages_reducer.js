import { RECEIVE_DM_SERVER, REMOVE_DM_SERVER } from "../actions/dm_server_actions";
import {REMOVE_DM_MEMBERSHIP} from "../actions/dm_memberships.actions"
import { RECEIVE_DM_MESSAGE, REMOVE_DM_MESSAGE} from "../actions/dm_messages_actions";

const dmMessageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    // Legacy code as the websockets are taking care of this now.
    // case RECEIVE_DM_MESSAGE: 
      // newState[action.payload.id] = action.payload
      // return newState;
    case REMOVE_DM_MESSAGE:
      delete newState[action.payload.id]
      return newState
    case RECEIVE_DM_SERVER:
    // Clear messages so that if you receive a new dm_server, messages do not persit
    newState = {}
    // Fail Safe in case dm_server has no messages
    if(action.dmServer.dms){newState = action.dmServer.dms}
      return newState;
    case REMOVE_DM_SERVER:
      return {};
    case REMOVE_DM_MEMBERSHIP:
      return {}
    default:
      return state;
  } 
}


export default dmMessageReducer;