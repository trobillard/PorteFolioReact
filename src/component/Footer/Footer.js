import React from 'react'


function Footer() {
    return (
            <div className="bContainer" id="Contact">
                <div>
                <a href="https://www.linkedin.com/in/thibaud-robillard/" className="animated-button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <ion-icon className="logoPro" name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://github.com/trobillard" className="animated-button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <ion-icon className="logoPro" name="logo-github"></ion-icon>
                </a>
                <a href="https://twitter.com/RobillardThiba1" className="animated-button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <ion-icon className="logoPro" name="logo-twitter"></ion-icon>
                </a>
                </div>
                <br></br>
                <div id="footerP">
                <p>Copyright ©2021 made by Taishibo© </p>
                <p>Made with ReactJS</p>
                </div>
            </div>
    )
}

export default Footer
