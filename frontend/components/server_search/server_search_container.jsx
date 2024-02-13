import {connect} from "react-redux";
import {fetchServers } from "../../util/server_utils";
import ServerSearch from "./server_search"
import {createServerMembership} from "../../actions/server_membership_actions"
import { withRouter } from "react-router";

const mapStateToProps = (state) => {
  return{
    currentUser: state.entities.users[state.session.id],
    // Keep servers in a hash form to increase lookup time of filter in render
    servers: state.entities.servers
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchAllServers : function(){return fetchServers()},
    createServerMembership: (membership) => dispatch(createServerMembership(membership)),
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerSearch));
