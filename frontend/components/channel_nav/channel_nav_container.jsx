import {connect} from "react-redux";
import ChannelNav from './channel_nav'
import { fetchChannel } from "../../actions/channel_actions";
import { withRouter } from "react-router";


const mapStateToProps = (state, ownProps) => {
  return{
    currentUserId : state.session.id,
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: Object.values(state.entities.channels),
    currentChannelId : ownProps.match.params.channelId,
    errors: state.errors.channel,
    serverErrors: state.errors.server
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchChannel: (channelId) => {dispatch(fetchChannel(channelId))},
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelNav));
