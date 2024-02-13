import {connect} from "react-redux";
import ServerMembers from "./server_members";
import {fetchServer } from "../../actions/server_actions";

const mapStateToProps = (state, ownProps) => {
  let ownerId = state.entities.servers[ownProps.match.params.serverId]?.ownerId
  return{
    members: Object.values(state.entities.users),
    owner: state.entities.users[ownerId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchServer: () => {dispatch(fetchServer(ownProps.match.params.serverId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerMembers);
