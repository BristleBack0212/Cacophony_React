import { connect } from "react-redux";
import MessageEdit from "./message_edit";
import {updateDmMessage, deleteDmMessage} from "../../actions/dm_messages_actions"

const mapDispatchToProps =(dispatch) => {
  return{
    action: (dm) => dispatch(updateDmMessage(dm)),
    delete: (messageId) => dispatch(deleteDmMessage(messageId))
  }
}


export default connect(null, mapDispatchToProps)(MessageEdit)