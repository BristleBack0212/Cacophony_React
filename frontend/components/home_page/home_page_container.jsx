import { connect } from "react-redux";
import HomePage from "./home_page"

const mapStateToProps = (state) => {
  return{
    state: state
  }
}

export default connect(mapStateToProps, null)(HomePage)