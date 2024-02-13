import React from "react";

class UserDeleteForm extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancel = false;
  }

   // Handle Submission of the form for name edit
  handleSubmit(e){
    e.preventDefault();
    // If cancel button is clicked execute a submit, but return nothing
    if(this.cancel){return}
    this.props.deleteUser(this.props.user.id)
  }

  render(){
    let cancelButton = <button id="cancel-form" 
      type = "submit"
      onClick={() => this.cancel = true}
      >Cancel</button>

    let deleteButton =  <button id="server-delete-button" type="submit">
          Delete User </button>

    return (
      <div id="channel-form"> 
        <form autoComplete="off" onSubmit={this.handleSubmit}> 
          <div id="channel-form-top">
            <h3 id="delete-server-header"> Delete '{this.props.user.username}' </h3>
            <div id="delete-warning">
              <div> Are you sure you want to delete 
                <strong id="delete-account"> {this.props.user.username}</strong>'s account?
                This action cannot be undone.
              </div>
            </div>
            <input type="hidden"/>
          </div>
          <div id="channel-form-bottom">
            {deleteButton}
            {cancelButton}
          </div>
          <button id="server-name-exit-x" onClick={() => this.cancel = true}><i className="fa-solid fa-xmark"/></button>
        </form>
      </div>
    )
  }
}

export default UserDeleteForm;