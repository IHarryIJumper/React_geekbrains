import React, { Component } from "react";

class Page extends Component {
  render() {
    const { children } = this.props;
    return <div id="page">{children}</div>;
  }
}

export default Page;
