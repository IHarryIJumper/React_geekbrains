import React, { Component } from "react";

import "./Header.scss";
import LoginForm from "./LoginForm.jsx";
import SearchForm from "./SearchForm.jsx";

import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  showLoginForm = () => {    
    this.props.showLoginForm();
  }

  hideLoginForm = () => {
    this.props.hideLoginForm();
  }

  setUserName = (userName) => {
    this.props.setUserName(userName);
  }

  render() {
    const showLoginFormValue = this.props.showLoginFormValue;
    const pageRouter = this.props.pageRouter;

    return (
      <header className="some-class">
        {pageRouter.map((route, index) => {
          return <li key={`nav-link-${index}`}><Link to={route.path}>{route.title}</Link></li>;
        })}

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