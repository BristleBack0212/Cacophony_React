import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { updateChannel, deleteChannel, fetchChannel, removeErrors} from "../../actions/channel_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state) => {
  return{
    formType: "Update Channel",
    errors: state.errors.channel
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => dispatch(updateChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    removeErrors: () => dispatch(removeErrors())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm))