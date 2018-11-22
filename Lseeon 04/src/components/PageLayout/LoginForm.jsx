import React, { Component } from "react";
import './LoginForm.scss';

class LoginForm extends Component {

  constructor(props) {
    super();
    this.state = { show: false };
    console.log(this.state, props);
  }

  toggleDisplay() {
    this.state.show = !this.state.show;
    console.log("toggle");
  }


  render() {
    const style = {
      display: this.state.show ? "block" : "none"
    };
    return (
      <form style={style}>
        <input type="email" name="email" /*value="email"*/ className="email" />
        <input type="password" name="email" /*value="password"*/ className="email" />
      </form>
    );
  }
}

export default LoginForm;
