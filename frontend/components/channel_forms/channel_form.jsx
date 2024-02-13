import React from "react";

class ChannelForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.channelName,
      server_id: this.props.serverId,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.cancel = false;
  }

  // Set Proper State for Edit Form
  componentDidMount(){
    if(this.props.formType === "Update Channel"){this.setState({['id']: this.props.channelId})}
  }

  // removeErrors upon unmounting

  componentWillUnmount() {
    this.props.removeErrors();
  }  
  

  handleSubmit(e){
    e.preventDefault();
    // Do not complete if cancel button is clicked
    if(this.cancel){return}
    let that = this;
    // Push to New Channel
    if(this.props.formType === "Create Channel"){
      this.props.action(this.state).then(function(action){
        let channel = action.payload.channel
        return that.props.history.push(`/servers/${that.state.server_id}/${channel.id}`)
      })
    } else {
      // Stay at current location for simply updating a channel.
      this.props.action(this.state);
    }
    ;
  }

  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  handleDelete(channelId){
    if (confirm("Are you sure you with to delete this channel? This action is irreversible."))
      { 
        // Hijack cancel button logic to esacpe modal while also deleting the channel
        this.cancelButton.click()
        let that = this;
        this.props.deleteChannel(channelId).then(
        function(response){
          // Reroute to general channel and fetch if you are currently in the deleted channel
          if(response.payload.toString() === that.props.currentChannelId){
            that.props.history.push(`/servers/${that.props.serverId}/${that.props.firstChannelId}`)
            that.props.fetchChannel(that.props.firstChannelId)
          }
          // Else fetch current channel
          else {
            that.props.fetchChannel(that.props.currentChannelId)
          }
        }
      )
    }
  }

  render(){
    // Placeholder based on form
    const placeholder = this.props.formType === "Update Channel" ? 
    this.props.name : "new-channel"
    // Form Message based on creating or editing Channel and if it is the general channel.
    let formMessage = this.props.formType === "Update Channel" && this.props?.channelName === "general" 
      ? <div id ="channel-form-header"> 
          <h5>Edit (Disabled for general)</h5>
          <p> In {this.props.serverName}</p>
        </div> 
      : this.props.formType === "Update Channel"  
      ? <div id ="channel-form-header"> 
          <h5>Edit Channel</h5>
          <p> In {this.props.serverName}</p>
        </div> 
      : <div id ="channel-form-header"> 
        <h5>Create A Channel</h5>
        <p> In {this.props.serverName}</p>
      </div>

    // Delete Button if Update Channel"
    let deleteButton = this.props.formType === "Update Channel" && this.props?.channelName === "general" 
      ?  <button id="channel-delete-button" type="button"> Delete Channel </button>
      : this.props.formType === "Update Channel" 
      ? <button id="channel-delete-button" type="button"
          onClick={() => this.handleDelete(this.props.channelId)}> 
          Delete Channel </button>
      : null;

    // Channel Name is format based on if there are errors
    let channelName = this.props.errors.includes("Name can't be blank") ? 
          <p id="channel-error-name"> CHANNEL NAME: CANNOT BE BLANK</p> :
          <p id="channel-form-name"> CHANNEL NAME</p>

    // Change channelName  if channel name is already taken
    if(this.props.errors.includes("Name has already been taken")){
      channelName = <p id="channel-error-name"> CHANNEL NAME: NAME ALREADY IN USE</p>}

    // Submit Button (Disabled for general) 
    let submitButton = this.props?.channelName === "general" 
      ? <button id="channel-edit-submit" type="button">Update Channel </button>
      : <button id="channel-edit-submit" type="submit">{this.props.formType}</button>

    // Cancel Button
    let cancelButton = <button id="cancel-form" 
      type = "submit"
      ref={el=>this.cancelButton=el} 
      onClick={() => this.cancel = true}
      >Cancel</button>

    return (
    <div id="channel-form"> 
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div id="channel-form-top"> 
          {formMessage}
            {channelName}
            <div id ="channel-form-name-input-container">
              <span className="server-message-input-padding">"</span>
              <i className="fa-solid fa-hashtag fa-sm"></i>
              <input 
              autoFocus
                type="text"
                value={this.state.name}
                onChange={this.handleName("name")}
                id ="channel-form-name-input"
                placeholder={placeholder}
              />
            </div>
        </div>
          <div id="channel-form-bottom"> 
          {/* normal submit button to handle enter properly */}
            {submitButton}
            {deleteButton}
            {cancelButton}
          </div>
      </form>
    </div>)
  }
}


export default ChannelForm;