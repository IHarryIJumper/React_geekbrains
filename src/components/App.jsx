import React, { Component, PureComponent } from "react";
import "./App.scss";

//import Page from "./PageLayout/Page.jsx";
import Footer from "./PageLayout/Footer.jsx";
import Header from "./PageLayout/Header.jsx";
import ContextMenu from "./PageLayout/ContextMenu.jsx";

import HomePage from "./PageLayout/HomePage.jsx";
import BlogPage from "./PageLayout/BlogPage.jsx";
import CommentPage from "./PageLayout/CommentPage.jsx";
import UserPage from "./PageLayout/UserPage.jsx";

const PAGES = {
  HOME: 0,
  BLOG: 1,
  COMMENT: 2,
  USER: 3
};

class App extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      links: ["Главная", "Блог", "Комментарии", "Пользователи"],
      currentLinkIndex: 2,
      userName: 'Anonimus',
      showLoginFormValue: false
    };
  }

  changePage = linkIndex => {
    console.log("changePage", linkIndex);
    this.setState({
      currentLinkIndex: linkIndex
    })
  }

  setUserName = (userName) => { 
    console.log("app setUserName", userName);   
    this.setState({
      userName: userName
    })
    this.hideLoginForm();
  }

  showLoginForm = () => {
    this.setState({
      showLoginFormValue: true
    })
  }

  hideLoginForm = () => {
    this.setState({
      showLoginFormValue: false
    })
  }

  renderPage = () => {   
    const { currentLinkIndex } = this.state;  
  
    switch (currentLinkIndex) {
      case PAGES.HOME:
        return <HomePage />;
      case PAGES.BLOG:
        return <BlogPage />;
      case PAGES.COMMENT:
        return <CommentPage userName={this.state.userName} />;
      case PAGES.USER:
        return <UserPage />;
      default:
        return "Not found page";
    }   
  }

  render() {
    console.log(this.state.showLoginFormValue.toString());
    return (
      <div>
        <Header 
          links={this.state.links} 
          currentLinkIndex={this.state.currentLinkIndex} 
          changePage={this.changePage} setUserName={this.setUserName} 
          showLoginFormValue={this.state.showLoginFormValue.toString()}
          showLoginForm={this.showLoginForm}          
          hideLoginForm={this.hideLoginForm} 
        />      
        {this.renderPage(this.state.currentLinkIndex)}
        <Footer />
      </div>
    );
  }
}

export default App;