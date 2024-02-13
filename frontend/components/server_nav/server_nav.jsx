import React from "react"
import {Link} from "react-router-dom"
import CreateServerFormContainer from "../server_form/create_server_form_container";
import ServerSearchContainer from "../server_search/server_search_container";

class ServerNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // Toggle state of server create form and search form
      create : false,
      search : false,
    }

    this.toggleForm = this.toggleForm.bind(this) 
    this.closeForm = this.closeForm.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchUsersServers(this.props.currentUser.id);
  }
  
  // Toggle forms on and off as well as turns off the other form
  toggleForm(active, deactive){
    let that = this;
    return function(e){ 
      that.setState({[active]: !that.state[active]})
      that.setState({[deactive]: false})
    }
  }

  closeForm(){
    this.setState({create: false})
    this.setState({search: false})
  }

  handleCreateSubmit(){
    // setTimeout Mimics a promise across divs/components
    let that = this;
    setTimeout(() => {if(this.props.errors.length === 0) {that.closeForm()}}, 200)
  }
  

  renderCreate(){
    if (this.state.create){
      return (
      <div> 
        <div id="double-modal-container" onSubmit = {() => this.handleCreateSubmit()}> 
            <div id = "modal-container" onClick={() => this.closeForm()}> </div>
            <CreateServerFormContainer show={true}/>
            <button id="server-exit-x" onClick={() => this.closeForm()}>
              <i className="fa-solid fa-xmark"/>
            </button>
        </div>
      </div>
      )
    }
  }

  renderSearch(){
    if (this.state.search){
      return (
      <div> 
        <div id="double-modal-container" onSubmit = {() => this.closeForm()}> 
          <div id = "modal-container" onClick={() => this.closeForm()}> </div>
          <ServerSearchContainer show={true}/>
          <button id="server-exit-x" onClick={() => this.closeForm()}>
            <i className="fa-solid fa-xmark"/>
          </button>
        </div>
      </div>
      )
    }
  }

  render(){

    let homeClass = this.props.serverId === "@me" 
      ? "selected-server" : "non-selected-server";
    return(
      <div id="server-nav"> 
        <ul id = "server-nav-list">
          <li key="home-bubble"
            className="server-bubble"> 
            <div className="server-nav-a">
              <Link className={homeClass} to={`/servers/@me`}> 
                <i className="fa-brands fa-discord home-bubble"/>
              </Link> 
            </div> 
            <div className="server-tool-name">Home</div>
          </li>
          <div id="seperator-container"> 
            <div id="server-nav-seperator"/>
          </div>
        {this.props.servers.map((server, index) => {
          // Light up selected Server
          let navClass = this.props.serverId === server.id.toString()
            ? "selected-server" : "non-selected-server";
          return (
            <li 
              className= "server-bubble"
              key={index}>
              <div className="server-nav-a">
                <Link 
                  to={`/servers/${server.id}/${server.firstChannelId}`} 
                  onClick={() => this.props.fetchServer(server.id)}
                  className={navClass}
                > 
                  <p className="server-inital"> {server.name.charAt(0)} </p> 
                </Link>
              </div>
              <div className="server-tool-name">{server.name}</div>
            </li>
          )
        })}
        <li className= "server-bubble" key="createServer"> 
          <div className="server-nav-a">
            <button id="create-servers" onClick={this.toggleForm("create", "search")}>
              <i className="fa-solid fa-plus"/> 
            </button>
          </div>
          <div className="server-tool-name">Add a Server</div>
        </li>
        <li className= "server-bubble" key="searchServer"> 
          <div className="server-nav-a">
            <button id="search-servers" onClick={this.toggleForm("search","create")}> 
              <i className="fa-solid fa-compass"/> 
            </button> 
          </div>
          <div className="server-tool-name">Explore Public Servers</div>
        </li>
      </ul>
      {this.renderCreate()}
      {this.renderSearch()}
      </div>
    )
  }
}

export default ServerNav