import React, { Component } from "react";

import "./Header.scss";
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import LoginForm from "./LoginForm.jsx";


class Header extends Component {

  
  constructor(props) {
    super(props);
    this.links = ["Home", "About"];
    //this.loginForm = LoginForm;    
  }

  loginOnClick(){
    console.log(this);
    //this.loginForm.toggleDisplay();    
  };


  render() {
    return (
      <header className="some-class">
        <ul>
         {this.links.map((link, linkIndex) => {
           console.log(linkIndex);
            return  <li key={`nav-link-${linkIndex}`}><a >{link}</a></li>;
          })}
        </ul>
        <div>
          <button id="login-button" onClick={this.loginOnClick.bind(this)}>
            Login
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
