import React from "react"
import { Link} from "react-router-dom"

const HomeNav = () => {
  return(
    <div id="home-nav">
      <div id="site-intro">
        <i className="fa-brands fa-discord fa-xl"/>
        <span id="site-name"> Cacophony </span>
      </div>
      <div id="home-nav-links"> 
        <a className="link" href="https://github.com/CodyDegraffeNiles"  
          target="_blank"> Github </a>
        <a  className="link" href="https://www.linkedin.com/in/cody-degraffe-niles-366310235/" 
          target="_blank"> LinkedIn  </a>
        <a className="link" href="https://angel.co/u/cody-degraffe-niles" target="_blank"> 
          AngelList </a>
        <a className="link" href="https://codydegraffeniles.github.io" target="_blank"> 
          Portfolio </a>
      </div>
      <div id = "login">
        <Link to ="/login">Login</Link>
      </div>
    </div>

  )
}


export default HomeNav