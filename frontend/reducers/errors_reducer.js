import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import serverErrorReducer from "./server_error_reducer"
import channelErrorsReducer from "./channel_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  server: serverErrorReducer,
  channel: channelErrorsReducer
});

export default errorsReducer;