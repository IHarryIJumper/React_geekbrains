import React, { Component } from "react";

import "./Header.scss";
import LoginForm from "./LoginForm.jsx";
import SearchForm from "./SearchForm.jsx";


class Header extends Component {


  constructor(props) {
    super(props);
    this.links = ["Home", "About"];   
  }

  loginOnClick() {
    console.log(this);
    this.loginForm.toggleDisplay();
  };


  render() {
    return (
      <header className="some-class">
        <ul>
          {this.links.map((link, linkIndex) => {
            console.log(linkIndex);
            return <li key={`nav-link-${linkIndex}`}><a >{link}</a></li>;
          })}
        </ul>
              
          <button id="login-button" onClick={this.loginOnClick.bind(this)}>
            Login
          </button>

          <SearchForm/> 
          <LoginForm show="false" />       
      </header>
    );
  }
}

export default Header;
