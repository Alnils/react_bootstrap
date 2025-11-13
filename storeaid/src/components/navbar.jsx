import React from 'react'
import StandardButton from './Standardbutton'

export default function navbar() {
  return (
    <div className ="navbarcontainer">
        <div className="topcontainer">
            <div className="phoneinformation">
                <img src="../imgs/0-header/phone_icon.svg" alt="Phone icon" width="30" height="30"></img>
                <p>+46 8 123 122 44</p>    
            </div>
            
            <div className="emailinformation">
                <img src="../imgs/0-header/mail_icon.svg" alt="Mail icon" width="30" height="30"></img>
                <p>contact@domain.com</p>
            </div>

            <div className="socialmediaicons">
                <img src="../imgs/0-header/facebook_icon.svg" alt="Facebook" width="30" height="30"></img>
                <img src="../imgs/0-header/twitter_icon.svg" alt="Twitter" width="30" height="30"></img>
                <img src="../imgs/0-header/instagram_icon.svg" alt="Instagram" width="30" height="30"></img>
                <img src="../imgs/0-header/youtube_icon.svg" alt="YouTube" width="30" height="30"></img>
            </div>
        </div>

        <div className="maincontainer">            
            <div className="logo">
                <img src="../imgs/0-header/storeaid_logo.svg" alt="Storeaid Logo" width="150" height="50"></img>
            </div>

            <div className="navigationmenu">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#aboutus">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>

            <StandardButton text="Book NAOW!" />
        </div>
    </div>
  )
}
