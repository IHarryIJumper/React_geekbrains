import React, { Component, PureComponent } from "react";
import "./App.css";

import Page from "./PageLayout/Page.jsx";
import Footer from "./PageLayout/Footer.jsx";
import Header from "./PageLayout/Header.jsx";
import Content1 from "./PageLayout/Content.jsx";
import ContextMenu from "./PageLayout/ContextMenu.jsx";
import Login from "./PageLayout/Login.jsx";

class App extends Component {
  render() {
    return (
      <Page>
        <Login />
        <Header />
        <ContextMenu />
        <Footer />
      </Page>
    );
  }
}

export default App;
