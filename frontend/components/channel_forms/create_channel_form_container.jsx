import { connect } from "react-redux";
import ChannelForm from "./channel_form";
import { createChannel, removeErrors } from "../../actions/channel_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state) => {
  return{
    formType: "Create Channel",
    errors: state.errors.channel
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    action: (channel) => dispatch(createChannel(channel)),
    removeErrors: () => dispatch(removeErrors())
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm))