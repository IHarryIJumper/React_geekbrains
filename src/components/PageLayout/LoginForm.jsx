import React, { Component } from "react";
import './LoginForm.scss';

class LoginForm extends Component {

  constructor(props) {
    super(props);   
    /*this.state = {
      showLoginFormValue: JSON.parse(this.props.showLoginFormValue)
    }  */
  }


  setUserName = (e) =>{
    e.preventDefault();    
    const userName = document.querySelector("#user-name_input").value;   
    console.log(this.props);
    this.props.setUserName(userName);
  }


  render() { 
    const style = {
      display: JSON.parse(this.props.showLoginFormValue) ? "block" : "none"
    };    
    return (
      <form id="login-form" style={style}>
        <input id="user-name_input" className="userName" />  
        <button onClick={this.setUserName}>Set user name</button>
      </form>
    );
  }
}

export default LoginForm;
