import { connect } from "react-redux";
import { updateServer, deleteServer, fetchServer, removeServerErrors} from "../../actions/server_actions";
import EditServerForm from "./edit_server_form";
import { withRouter } from "react-router";
import {deleteMembership} from "../../actions/server_membership_actions";

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[ownProps.match.params.serverId],
    servers: state.entities.server,
    errors: state.errors.server
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    action: (server) => {dispatch(updateServer(server))},
    deleteServer: () => {dispatch(deleteServer([ownProps.match.params.serverId]))},
    deleteMembership: (membership) => {dispatch(deleteMembership(767, membership))},
    removeErrors: () => dispatch(removeServerErrors())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)
(EditServerForm));