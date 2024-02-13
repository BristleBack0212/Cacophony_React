import React from "react"
import {Link} from 'react-router-dom'
import UserEditFormContainer from "./user_edit_form_container"
import UserDeleteForm from "./user_delete_form"

class UserProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
      userEdit: false,
      deleteForm: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount(){
    this.mounted = true;
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  openForm(type){
    this.setState({[type]: true})
  }

  closeForm(type){
    if(this.mounted){ 
      this.setState({[type]: false})
    }
  }

  handleSubmit(){
    // setTimeout Mimics a promise across divs/components
    let that = this;
    setTimeout(() => {if(this.props.errors.length === 0) {that.closeForm("userEdit")}}, 200)
  }

  renderUserEdits(){
    if(this.state.userEdit){
      return (
      <div>
          <div className="user-edit-modal" onClick={() => this.closeForm("userEdit")}/>
          <div onSubmit={() => this.handleSubmit()}> 
            <UserEditFormContainer id = {this.state.user.id}/>
          </div>
          <button id="channel-exit-x" onClick={() => this.closeForm("userEdit")}><i className="fa-solid fa-xmark"/></button>
      </div>
      )
    }
    return null;
  }

  renderDeleteForm(){
    if (this.state.deleteForm){
      return(
        <div>
          <div className="user-edit-modal" onClick={() => this.closeForm("deleteForm")}/>
          <div onSubmit={() => this.closeForm("deleteForm")}> 
            <UserDeleteForm 
              user = {this.props.user}
              deleteUser = {this.props.delete}
            />
          </div>
          <button id="channel-exit-x" onClick={() => this.closeForm("deleteForm")}><i className="fa-solid fa-xmark"/></button>
      </div>
      )
    } else{
      return null;
    }
  }

  render(){
   // Modify delete button to do nothing if demo-user is logged in"
    const deleteButton = this.props.user.email === "KoalaDemo2@caveman.com" ? <button id ="delete-user"> 
      Delete Account (Disabled for Demo)</button> : 
    <button id ="delete-user" onClick={() => this.openForm("deleteForm")}>Delete Account</button>
  
    // Modify update button to do nothing if demo-user is logged in"
    const updateButton = 
      <button id="update-user-button" onClick= {() => this.openForm("userEdit")}>
        Edit User Profile </button> 

    return(
      <div id = "user-profile">
        {this.renderUserEdits()}
        {this.renderDeleteForm()}
        <div id="user-side-nav"> 
          <ul id="user-side-nav-list">
            <Link to={`/users/${this.props.user.id}`}> 
              <li className = "user-side-nav-item selected-dm">My Account</li>
            </Link>
            <Link to={`/servers/@me`}> 
              <li className = "user-side-nav-item">My Direct Messages</li>
            </Link>
            <li className = "user-side-nav-item" onClick={() => this.props.logout()}> 
              <span>Log Out</span>
                <i className="fa-solid fa-arrow-right"></i>
            </li>
          </ul>
        </div>
        <div id="user-profile-header"> 
          <h3 id="my-account">My Account</h3>
          <div id="to-home"> 
            <Link id="home-link" to="/servers/@me">
                <i className="fa-solid fa-xmark"/>
            </Link> 
            <p id="esc">ESC</p>
          </div>
        </div>
        <div id="user-profile-content">
          <div id="user-profile-dark-top"/> 
          <div id ="user-top-info"> 
            <div className={"invading-div"}>
              <div className={`user-icon-profile color-${this.props.user.colorId}`}>
                <i className="fa-brands fa-discord"/>
              </div>
            </div>
            <div id="user-fullname"> 
              <h4>{this.props.user.username}</h4> 
              <span>#{this.props.user.numberTag}</span>
            </div>
            {updateButton}
          </div>
          <div id="user-info"> 
            <div id="user-username"> 
              <p> Username </p> 
              <div id="actual-info"> 
                <p>{this.props.user.username}</p> 
                <span>#{this.props.user.numberTag}</span>
              </div>
            </div>
            <div id="user-email"> 
              <p>Email</p>
              <div id="actual-info">
                <p>{this.props.user.email}</p>
              </div>
            </div>
          </div>
          <div id="user-buttons">  
            {deleteButton}
          </div>
        </div>
      </div>

    )
  }
}




export default UserProfile;