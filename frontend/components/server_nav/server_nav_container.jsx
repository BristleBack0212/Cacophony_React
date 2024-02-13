import {connect} from "react-redux";
import { fetchServers, fetchServer, removeServerErrors } from "../../actions/server_actions";
import ServerNav from "./server_nav";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.entities.users[state.session.id],
    servers: Object.values(state.entities.servers),
    errors: state.errors.server,
    serverId: ownProps.match.params.serverId
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUsersServers : (userId) => {dispatch(fetchServers(userId))},
    fetchAllServers : () => {dispatch(fetchServers())},
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerNav));