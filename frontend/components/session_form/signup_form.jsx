import React from  "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle change and submit events.

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  // Clear Out Session Errors Upon redirection
  
  componentWillUnmount() {
    this.props.removeErrors();
  }  

  render(){

    // Create link to the opposite form
    const link = <Link to = "/login">Already have an account?</Link>

    // Creates welecome Message based on formType
    const welcomeHeader = "Create an account"

    // Button message for each form
    const buttonMessage = "Continue"

    // Create Proper Headings for the Form;
    let email = this.props.errors.includes("Email can't be blank") ? <h5 className ="login-error"> 
      EMAIL - REQUIRED FIELD </h5> : <h5 className="login-normal"> EMAIL</h5> 

    const password = this.props.errors.includes("Password is too short (minimum is 6 characters)")
    ? <h5 className ="login-error"> PASSWORD - MUST BE AT LEAST 6 CHARACTERS </h5> : 
    <h5 className="login-normal"> PASSWORD</h5>

    const username = this.props.errors.includes("Username can't be blank") ? 
    <h5 className ="login-error"> USERNAME - REQUIRED FIELD</h5> : 
    <h5 className="login-normal"> USERNAME </h5>

    // Edit email header if email has already been taken
    if(this.props.errors.includes("Email has already been taken")){
      email = <h5 className ="login-error"> 
      EMAIL HAS ALREADY BEEN TAKEN </h5>
    }

    return(
      <div id= "login-background">
        <div id ="login-form"> 
        <h3>{welcomeHeader} </h3>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            {email} 
            <input 
              type="email"
              value = {this.state.email}
              onChange ={this.handleChange('email')}/>
            {username} 
            <input  
              type = "text"
              value = {this.state.username}
              onChange ={this.handleChange('username')}/>
            {password}
            <input 
              type = "password"
              value = {this.state.password}
              onChange={this.handleChange('password')}
            />
            <button type="submit"> {buttonMessage} </button>
            {link}
          </form>
        </div>
      </div>
    )
  }
}

export default SignUpForm;