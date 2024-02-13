import React from  "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  // Handle events

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(type){
    return (e) => {this.setState({[type] : e.target.value})}
  }

  // Clear session errors upon redirection

  componentWillUnmount() {
    this.props.removeErrors();
  }  

  // Demo user login
  demoLogin(){
    let demoUser = {
      email: "KoalaDemo2@caveman.com",
      username: "DemoUser",
      password: "DropBear"
    }
    this.setState({email: demoUser.email})
    this.setState({password: demoUser.password})
  }

  render(){

    // Creates a demo login button 
    const demo =  <button type ="submit" 
      onClick= {() => this.demoLogin()} > Demo Login
    </button> 

    // Create link to the opposite form
    const link =  <Link to ="/signup">Register</Link>

    // Creates welecome Message based on formType
    const welcomeHeader =  "Welcome Back!" 

    const messageHeader = "We're so excited to see you again!" 

    // Footer message with redirect to other session from.
    const footerMessage = <span> Need an account? </span>

    // Button message for each form
    const buttonMessage = "Login" 

    // Create Proper Headings for the Form;
    const email = this.props.errors.includes("Invalid Email/Password combination")
      ? <h5 className ="login-error">  EMAIL - INVALID EMAIL/PASSWORD  </h5> : 
      <h5 className="login-normal"> EMAIL </h5> 

    const password = this.props.errors.includes("Invalid Email/Password combination") 
      ? <h5 className ="login-error"> PASSWORD - INVALID EMAIL/PASSWORD</h5> : 
      <h5 className="login-normal"> PASSWORD </h5>

    return(
      <div id= "login-background">
        <div id ="login-form"> 
          <h3>{welcomeHeader} </h3>
          <p>{messageHeader}</p>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
          {email} 
            <input 
              type="email"
              value = {this.state.email}
              onChange ={this.handleChange('email')}
            />
            {password}
            <input 
              type = "password"
              value = {this.state.password}
              onChange={this.handleChange('password')}
            />
            <button type="submit"> {buttonMessage} </button>
            {demo}
            {footerMessage} {link}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;