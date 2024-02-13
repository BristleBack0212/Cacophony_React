import { connect } from "react-redux";
import UserProfile from "./user_profile";
import {elminateCurrentUser, logout, updateUser} from '../../actions/session_actions'
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return{
    user: state.entities.users[ownProps.match.params.userId],
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    update : (user) => {dispatch(updateUser(user))},
    delete : (userId) => {dispatch(elminateCurrentUser(userId))},
    logout : () => {dispatch(logout())}

  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))