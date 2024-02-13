import { connect } from "react-redux";
import DeleteServerForm from "./delete_server_form";
import {withRouter } from "react-router";

const mapStateToProps = (state) => {
  return{
    errors: state.errors.server
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeErrors: () => dispatch(removeServerErrors())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteServerForm));