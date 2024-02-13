import { connect } from "react-redux";
import LoginForm from "./login_form"
import { login, removeErrors} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return{
    errors: state.errors.session,
    formType: 'login'
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    processForm : (user) => {dispatch(login(user))},
    removeErrors: () => {dispatch(removeErrors())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)