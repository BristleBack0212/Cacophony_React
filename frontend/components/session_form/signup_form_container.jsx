import { connect } from "react-redux";
import SignUpForm from "./signup_form"
import { signup, removeErrors} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return{
    errors: state.errors.session,
    formType: 'signup'
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    processForm: (user) => {dispatch(signup(user))},
    removeErrors: () => {dispatch(removeErrors())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)