import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.links = ["Home", "About"];
  }
  render() {
    return (
      <header className="some-class">
        {this.links.map((link, linkIndex) => {
          return <a key={`nav-link-${linkIndex}`}>{link}</a>;
        })}
      </header>
    );
  }
}

export default Header;
