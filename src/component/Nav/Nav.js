import React from 'react'
import Logo from './logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFolderMinus} from '@fortawesome/free-solid-svg-icons'


class Nav extends React.Component {
  constructor(props) {
      super(props);
      this.state = { windowHeight: window.innerHeight };
  }
  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
  }
  
  handleScroll = () => {
      let windowsize = this.state.windowHeight;
      if (window.scrollY > windowsize) {
        document.querySelector(".navbar").className = "navbar navscroll navbar-expand-lg fixed-top";
      } else {
        document.querySelector(".navbar").className = "navbar navbar-expand-lg fixed-top";
      }
  };

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#Home"> <img className="logo" src={Logo} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon className="icon" icon={faFolderMinus}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutMe">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contacts</a>
              </li>
              <li className="nav-item">
              <a href='#Music' className="button"><ion-icon name="musical-notes-outline"></ion-icon></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav
