import React, { Component } from "react";

import "./Header.scss";
import LoginForm from "./LoginForm.jsx";
import SearchForm from "./SearchForm.jsx";


class Header extends Component {


  constructor(props) {
    super(props);
    
    /*this.state = {
      showLoginFormValue: false
    }

    console.log(this.props);*/
  }

  linkClick = (index) => {
    this.props.changePage(index);
  }

  showLoginForm = () => {
    console.log(this.props);
    this.props.showLoginForm();
  }

  hideLoginForm = () => {
    this.props.hideLoginForm();   
  }

  setUserName = (userName) => {     
    this.props.setUserName(userName);    
  }

  render() {
   // console.log("render", this.props.showLoginForm);

    const showLoginFormValue = this.props.showLoginFormValue;
   
    let links = this.props.links;
    return (
      <header className="some-class">
        <ul>
          {links.map((link, linkIndex) => {
            return <li key={`nav-link-${linkIndex}`} onClick={() => this.linkClick(linkIndex)}><a >{link}</a></li>;
          })}
        </ul>

        <button id="login-button" onClick={this.showLoginForm}>
          Login
        </button>

        <SearchForm />
        <LoginForm showLoginFormValue={showLoginFormValue} setUserName={this.setUserName} />
      </header>
    );
  }
}

export default Header;
