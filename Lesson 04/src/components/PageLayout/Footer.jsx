import React, { Component } from "react";

import './Footer.scss';

class Footer extends Component {
  render() {
    return <footer>{`React, lesson №3, ${new Date().getFullYear()} year ©`}</footer>;
  }
}

export default Footer;
