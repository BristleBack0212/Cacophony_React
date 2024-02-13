import React from "react";

class DeleteServerForm extends React.Component{
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
    this.props.history.push('/servers/@me')
    this.props.deleteServer()
  }

  render(){
    let cancelButton = <button id="cancel-form" 
      type = "submit"
      onClick={() => this.cancel = true}
      >Cancel</button>

    let deleteButton =  <button id="server-delete-button" type="submit">
          Delete Server </button>

    return (
      <div id="server-name-form"> 
        <form autoComplete="off" onSubmit={this.handleSubmit}> 
          <div id="channel-form-top">
            <h3 id="delete-server-header"> Delete '{this.props.server.name}' </h3>
            <div id="delete-warning">
              <div> Are you sure you want to delete 
                <strong id="delete-account"> {this.props.server.name}</strong>?
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

export default DeleteServerForm