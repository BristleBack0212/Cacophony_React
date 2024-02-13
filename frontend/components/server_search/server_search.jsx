import React from "react"

class ServerSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      publicServers: "",
    }
    this.handleJoin = this.handleJoin.bind(this)
  }

  componentDidMount(){
    let that = this;
    // Grab all the servers from the database and attach them to the state
    // of the react component, not to muddy the waters of the servers in the 
    // overall state.
    this.props.fetchAllServers().then( 
      function(response){
        return that.setState({publicServers: response})
      }
    )
  }

  handleJoin(serverId, firstChannelId){
    this.props.createServerMembership({
              server_id: serverId,
              member_id: this.props.currentUser.id
            });
    this.props.history.push(`/servers/${serverId}/${firstChannelId}`)
  }

  render(){
    // Filter out servers a user is already a part of as noted in this.props.servers.
    let publicServers = Object.values(this.state.publicServers)
    let serverArray = publicServers.filter((server) => !(this.props.servers.hasOwnProperty(server.id)))

    if (this.props.show){
      return(
      <div id="server-search">
        <h5 id="server-search-header">Public Servers Available to Join!</h5>
        <ul id ="searched-servers"> 
          {serverArray.map((server) => {
            return (<li
            key = {server.id}
            >
              <div className="server-credentials">
                <div className="server-search-inital">
                  <span>{server.name.charAt(0)} </span>
                </div>
                <span>{server.name}</span>
              </div>
              <form onSubmit={() => this.handleJoin(server.id, server.firstChannelId)}>
                <button className="server-join-button" type="submit">Join</button>
              </form>
            </li>)
          })}
        </ul>
      </div>
      )
    } else
    return null;
  }
}

export default ServerSearch