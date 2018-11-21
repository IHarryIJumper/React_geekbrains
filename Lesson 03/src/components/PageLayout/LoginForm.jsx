import React, { Component } from "react";
import './LoginForm.scss';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = { show: false };
  }

  toggleDisplay(){
    this.state.show = !this.state.show;
  }


  render() {
    const style = {
      display: this.state.show ? "block" : "none",
      color: "green"
    };
    return (
      <form style={style}>
          <input type="email" name="email" /*value="email"*/  className="email" />
          <input type="password" name="email" /*value="password"*/ className="email" />
      </form>
    );
  }
}

export default LoginForm;
