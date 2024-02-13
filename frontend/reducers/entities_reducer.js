import {combineReducers} from "redux";
import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelReducer from "./channel_reducer";
import messageReducer from "./message_reducer";
import dmMessageReducer from "./dm_messages_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelReducer,
  messages: messageReducer, 
  dmMessages : dmMessageReducer
})


export default entitiesReducer;