import {connect} from "react-redux";
import ChannelMessages from "./channel_messages";
import { fetchChannel } from "../../actions/channel_actions";
import {createMessage} from "../../actions/message_actions";



const mapStateToProps = (state, ownProps) => {
  let channelName = null;
  // Fail Safe Check
  if (state.entities.channels[ownProps.match.params.channelId]){
    channelName = state.entities.channels[ownProps.match.params.channelId].name
  }

  return{
    message: {
      body: "",
      author_id: state.session.id,
      channel_id: ownProps.match.params.channelId,
    },
    channelName: channelName,
    messages: Object.values(state.entities.messages),
    members: state.entities.users,
    currentUserId: state.session.id,
    messageIds: Object.keys(state.entities.messages),
    channelId : ownProps.match.params.channelId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchChannel: (channelId) => {dispatch(fetchChannel(channelId))},
    action: (message) => {dispatch(createMessage(message))}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChannelMessages)



