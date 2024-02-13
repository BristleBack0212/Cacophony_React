import React from 'react'

class ServerMembers extends React.Component{

  componentDidMount(){
    // Fetchs Specific Server on Mount to correctly populate server members;
    this.props.fetchServer();
  }
  
  render(){
    return (
    <div id="server-member-show"> 
      <div id= "mimic-nav-bar"> </div>
      <ul id = "server-members-list">
        <br/> 
        <p className="member-title"> OWNER </p>
          <li
              key={this.props.owner?.id}
              className="server-member-item"
              >
            <div className={`user-icon color-${this.props.owner?.colorId}`}>
            <i className="fa-brands fa-discord"/>
            </div>
            <h5 className='member-username'> {this.props.owner?.username} </h5>
          </li>
        <br/>
        <p className="member-title"> MEMBERS - {this.props.members.length - 1}</p>
        {this.props.members.map((member) => {
          if(member.id !== this.props.owner?.id) 
            {
              let colorId = member.colorId ? member.colorId : 1
              return ( 
                <li
                key={member.id}
                className="server-member-item"
                >
                  <div className={`user-icon color-${colorId}`}>
                    <i className="fa-brands fa-discord"/>
                  </div>
                  <h5 className='member-username'> {member.username} </h5>
                </li>
              )
            }
          })
        }
      </ul>
    </div>)
  }
}



export default ServerMembers;