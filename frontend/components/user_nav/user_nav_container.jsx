import { connect } from "react-redux";
import UserNav from "./user_nav";


const mapStateToProps = (state) => {
  return{
    currentUser: state.entities.users[state.session.id]
  }
}



export default connect(mapStateToProps, null)(UserNav)