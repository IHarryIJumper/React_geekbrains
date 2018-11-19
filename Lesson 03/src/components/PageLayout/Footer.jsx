import React, { Component } from "react";

import './Footer.css';

class Footer extends Component {
  render() {
    return <footer>{`ReactJS lesson 03: ${new Date().getFullYear()}`}</footer>;
  }
}

export default Footer;
