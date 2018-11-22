import React, { Component, PureComponent } from "react";
import "./App.scss";

import Page from "./PageLayout/Page.jsx";
import Footer from "./PageLayout/Footer.jsx";
import Header from "./PageLayout/Header.jsx";
import ContextMenu from "./PageLayout/ContextMenu.jsx";
import Content from "./PageLayout/Content.jsx";

class App extends Component {
  render() {
    return (
      <Page>       
        <Header />       
        <ContextMenu />
        <Content />     
        <Footer />
      </Page>
    );
  }
}

export default App;
