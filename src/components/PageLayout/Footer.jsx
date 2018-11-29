import React, { Component } from "react";

import './Footer.scss';

class Footer extends Component {
  render() {
    return <footer>{`React home work, lesson №6, ${new Date().getFullYear()} year ©`}</footer>;
  }
}

export default Footer;
