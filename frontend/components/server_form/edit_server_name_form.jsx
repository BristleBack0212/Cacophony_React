import React from "react";

class EditServerNameForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.server
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = false;
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }
  
  // Handle Submission of the from for name edit
  handleSubmit(e){
    e.preventDefault();
    // If cancel button is clicked execute a submit, but return nothing
    if(this.cancel){return}
    this.props.update(this.state);
  }

  // Handle changes in the name state
  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }
  
  render(){
    // Only render when user clicks the drop down menu next to server name
  
    let serverName  = this.props.errors.includes("Name can't be blank") ?
      <p id="channel-error-name"> Name cannot be blank</p> :
    <p id="channel-form-name"> Name </p>  ;

    if (this.props.errors.includes("Name has already been taken")){
      serverName = <p id="channel-error-name"> Name already being used </p> 
    }

  let cancelButton = <button id="cancel-form" 
      type = "submit"
      onClick={() => this.cancel = true}
      >Cancel</button>

    // Create different edit forms for the owner and a member
    return (
      <div id="server-name-form">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div id="channel-form-top"> 
            <div id ="channel-form-header"> 
              <h5>Edit Server</h5>
            </div>
            <div id="server-name-form-buffer"/>
            {serverName}
            <div id ="channel-form-name-input-container">
              <input 
                autoFocus
                type="text"
                value={this.state.name}
                onChange={this.handleName("name")}
                id ="channel-form-name-input"
              />
            </div>
          </div>
          <div id="channel-form-bottom"> 
            {/* Put normal submit first for proper activity on enter */}
            <button type="submit" id="channel-edit-submit"> Update Name </button>
            {cancelButton}
          </div>
          <button id="server-name-exit-x" onClick={() => this.cancel = true}><i className="fa-solid fa-xmark"/></button>
        </form>
      </div>
    )
  }
}

export default EditServerNameForm;