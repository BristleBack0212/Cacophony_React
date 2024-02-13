import React from 'react'
import autosize from 'autosize';

class MessageEdit extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.message;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.escape = false;
  }

  componentDidMount(){
    autosize(this.textarea);
    this.escape = false;

  }

  handleBody(){
    return (e) => {this.setState({["body"]: e.currentTarget.value})}
  }

  leave(){
    this.escape = true;
  }

  deleteAndLeave(){
    this.leave()
    this.props.delete(this.props.message.id)
  }

  handleSubmit(e){
    if(this.escape){return}
    if(this.state.body === ""){return}
    e.preventDefault();
    this.props.action(this.state);
  }

  submitOnEnter(e){
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.submitButton.click();
    }
  }

  render(){
    return(
    <div id = "message-edit">
      <form 
        autoComplete="off" 
        id="server-message-edit-form" 
        onSubmit={this.handleSubmit}
        ref={el=>this.form=el}
        > 
        <span className="server-message-input-padding">"</span>
        <textarea
        value = {this.state.body}
        onChange={this.handleBody()}
        ref={el=>this.textarea=el}
        className="edit-message-input"
        placeholder={`${this.state.body}`}
        onKeyDown={this.submitOnEnter}
        />
        {/* Edit controls to hijack form submision */}
        <div className="edit-controls"> 
          <div className="enter-cancel-edits">
          <p> escape to 
              <button onClick={() => this.leave()} type="submit" className="escape-button">cancel</button> 
          </p>
          <div className = "circle-container"> 
            <i className="fa-solid fa-circle"/> 
          </div>
          <p> enter to 
            <button 
              type="submit" 
              className ="edit-button"
              ref={el=>this.submitButton=el}
              > save </button> 
          </p>
        </div>
        <button className="delete-message" 
          onClick={() => this.deleteAndLeave()}> Delete Message 
        </button>
        </div>
      </form>
    </div>
    )
  }
}


export default MessageEdit;