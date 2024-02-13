import React from "react";
import DeleteServerFormContainer from "./delete_server_form_container";
import EditServerNameFormContainer from "./edit_server_name_form_container";

class EditServerForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.server.id,
      name: this.props.server.name,
      owner_id: this.props.server.owner_id,
      public: this.props.server.public,
      serverName: false,
      deleteForm: false,
    }

    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props){
      this.setState({["name"]: this.props.server.name})
      this.setState({["id"]: this.props.server.id})
      this.setState({["owner_id"]: this.props.server.owner_id})
      this.setState({["public"]: this.props.server.public})
    }
  }

  // // handle proper redirect after deletion of a server - Push to user homepage
  // handleDelete(){
  //   if (confirm("Are you sure you with to delete this server? This action is irreversible."))
  //     {this.props.deleteServer(); 
  //     this.props.history.push(`/servers/@me`)
  //     }
  // }

  // Handles Leaving a server
  handleLeave(membership){
    this.props.deleteMembership(membership);
    this.props.history.push('/servers/@me');
  }

  openForm(type){
    this.setState({[type]: true})
  }

  closeForm(type){
    this.setState({[type]: false})
  }

  renderServerNameEdit(){
    if(this.state.serverName){
      return (
        <div id="double-server-modal-container">
          <div id="server-edit-modal" onClick={() => this.closeForm("serverName")}> </div> 
          <EditServerNameFormContainer
          server = {this.props.server}
          />
      </div>
      )
    } else{
      return null;
    }
  }

  renderServerDeleteForm(){
    if(this.state.deleteForm){
      return(
        <div id="double-server-modal-container">
          <div id ="server-edit-modal" onClick={() => this.closeForm("deleteForm")}> </div>
          <DeleteServerFormContainer
            server = {this.props.server}
            deleteServer = {this.props.deleteServer}
          />
        </div>
      )
    } else{
      return null;
    }
  }

  
  render(){
    // Only render when user clicks the drop down menu next to server name
    if (this.props.noShow) {
      return null
    }

    // Create different edit forms for the owner and a member
    // Owner
    if (this.props.type === "owner"){ 
    return (
    <div id="edit-server-form"> 
      <button id="update-server-name" onClick={() => this.openForm("serverName")}>Edit Server</button>
      <button id="delete-server" onClick={() => this.openForm("deleteForm")}>Delete Server</button>
      {this.renderServerNameEdit()}
      {this.renderServerDeleteForm()}
    </div>
    )
    } // Member
    else {
      let membership = {
        member_id: this.props.currentUser.id,
        server_id: this.props.server.id
      }
      return(
      <div id="edit-server-form"> 
        <button  id="leave-server" onClick={ () => this.handleLeave(membership)}>
          Leave Server
        </button>
    </div>
      )
    }
  }
}

export default EditServerForm;