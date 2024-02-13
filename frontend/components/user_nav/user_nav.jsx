import React from "react";
import { Link } from "react-router-dom";
import CreateServerForm from "../server_form/create_server_form_container";

class UserNav extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return ( 
      <div id = "user-nav">
        <div id ="username">
          <div className={`user-icon color-${this.props.currentUser.colorId}`}>
            <i className="fa-brands fa-discord"/>
          </div>
          <div id="user-text">
            <h3>{this.props.currentUser.username}</h3>
            <p>#{this.props.currentUser.numberTag}</p>
          </div>
        </div>
        <div id="setting-icons">
          <i className="fa-solid fa-microphone"> </i>
          <i className="fa-solid fa-headphones"> </i>
          <Link to={`/users/${this.props.currentUser.id}`}> 
            <i className="fa-solid fa-gear"/>
            <div className="user-tool-tip">User Settings</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default UserNav;