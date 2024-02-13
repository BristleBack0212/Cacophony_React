import React from "react";

class ServerForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      owner_id: this.props.currentUser.id,
      name: `${this.props.currentUser.username}'s Server`,
      public: this.props.server.public,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePublic = this.handlePublic.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }  
  
  handleSubmit(e){
    e.preventDefault();
    let that = this; 
    // Create new Server and then push to the new server's first/general channel
    this.props.action(this.state).then(function(action){
      let server  = action.server.server
      return that.props.history.push(`/servers/${server.id}/${server.firstChannelId}`);
    });
  }

  handleName(type){
    return (e) => {this.setState({[type]: e.currentTarget.value})}
  }

  handlePublic(value, type){

    let that = this;
    return function(e){
      e.preventDefault();
      that.setState({[type]: value}
      )
    }
  }

  render(){
    // Change button message based on state's public property
    let submitButton = this.state.public ? <button id='create-server' type="submit">
      Create A <span id="public-status"> Public </span> Server</button> : 
      <button id='create-server' type="submit">
      Create A <span id="public-status"> Private</span> Server</button>

    // Change background color of divs based on state's public property
    let privateDivClass = this.state.public ? "not-selected" : "selected"
    let publicDivClass = this.state.public ? "selected" : "not-selected" 

    // Header for the server name changes based on if an error was thrown 
    // in creation
    let serverName = this.props.errors.includes("Name has already been taken") ? 
    <h5 id="error-server-name"> Server Name: You already have a server of this name</h5> :
      <h5 id="create-server-name"> Server Name</h5>

    // Empty server name error 
    if (this.props.errors.includes("Name can't be blank")){
      serverName= <h5 id="error-server-name"> Server Name: Name cannot be blank </h5>
    }

    if (this.props.show){
    return (
    <div id="server-form"> 
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <h4> Tell Us More About Your Server </h4>
        <p id="server-form-message"> 
          In order to help you set up, is it for a few friends (Private) or larger
          community (Public)? </p>
        <div id="public-info"> 
          <div 
            onClick={this.handlePublic(false, "public")}
            className = {privateDivClass}
            > 
            <img id="private-server-svg"/>
            <p className='public-info-p'>For Me and My Friends</p>
          </div>
          <div 
            onClick={this.handlePublic(true, "public")}
            className = {publicDivClass}
          >  
            <img id="public-server-svg"/>
            <p className='public-info-p'> For A Club or Community </p>
          </div>
        </div>
        {serverName}
        <input 
            autoFocus
            type="text"
            value={this.state.name}
            onChange={this.handleName("name")}
            id="server-form-name"
        />
        {submitButton}
      </form>
    </div>
    )
    // Render nothing if modal does not need to be displayed
    } else{
      return null;
    }
  }
}

export default ServerForm;