import React from "react"
import {Link} from "react-router-dom"

const Footer = () => {
  return(
    <div id= "footer">
      <div id="footer-body"> 
        <p id="footer-message">
          IMAGINE A PLACE
        </p>
        <div id="footer-socials"> 
          <ul className="footer-list"> About
            <li>
              <a className="link" href="https://github.com/CodyDegraffeNiles"  
                target="_blank"> Github </a>
            </li>
            <li>
              <a className="link" href="https://www.linkedin.com/in/cody-degraffe-niles-366310235/" 
                target="_blank"> LinkedIn  </a>
            </li>
            <li>
              <a className="link" href="https://angel.co/u/cody-degraffe-niles" target="_blank"> 
                AngelList </a>
            </li>
            <li> 
              <a className="link" href="https://codydegraffeniles.github.io" target="_blank"> 
                  Portfolio </a>
            </li>
          </ul>
        </div>
      </div>
      <br/>
      <div id="footer-nav"> 
        <div id="site-intro">
          <i className="fa-brands fa-discord fa-xl"/>
          <span id="site-name"> Cacophony </span>
        </div>
        <div id= "disclaimer">
          <div> 
            <span>Cacophony built by </span>
              <a className="link" href="https://codydegraffeniles.github.io" target="_blank"> 
              Cody Degraffe-Niles.</a>
          </div>
          <p> All images used are property of Discord.</p>
        </div>
        <div id = "singup-footer">
        <Link to ="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}



export default Footer