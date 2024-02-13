import React from "react";
import HomeNav from "../home_nav/home_nav";
import HomeBody from "../home_body/home_body"
import Footer from "../footer/footer"

class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <HomeNav/> 
        <HomeBody/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage;