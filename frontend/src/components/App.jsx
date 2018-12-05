import React, { Component, PureComponent } from "react";
import "./App.scss";

import Footer from "./PageLayout/Footer.jsx";
import Header from "./PageLayout/Header.jsx";

import HomePage from "./PageLayout/HomePage.jsx";
import BlogPage from "./PageLayout/BlogPage.jsx";
import {CommentsPage} from "./PageLayout/CommentsPage.jsx";
import SoloCommentPage from "./PageLayout/SoloCommentPage.jsx";
import UserPage from "./PageLayout/UserPage.jsx";

import { Switch, Route, Router, Link } from 'react-router';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Anonimus',
      showLoginFormValue: false
    };
  }

  setUserName = (userName) => {    
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

  getExact = (pageRoute) => pageRoute.exact;


  render() {
    const PAGE_ROUTER = [
      { title: "Главная", path: '/', exact: true, render: () => <HomePage /> },
      { title: "Блог", path: '/blog', exact: false, render: () => <BlogPage/>},
      { title: "Комментарии", path: '/comments', exact: true, render: () => <CommentsPage userName={this.state.userName} setUserName={this.setUserName}/> },    
      { title: "Пользователи", path: '/users', exact: false, render: () => <UserPage/>},
    ]
    
    return (
      <div>
        <Header                 
          setUserName={this.setUserName}
          showLoginFormValue={this.state.showLoginFormValue.toString()}
          showLoginForm={this.showLoginForm}
          hideLoginForm={this.hideLoginForm}
          pageRouter={PAGE_ROUTER}
        />
          <Switch>
            {PAGE_ROUTER.map((pageroute, index) => {
                return (<Route key={index} exact={pageroute.exact} path={pageroute.path} render={pageroute.render} />);
              })}
            <Route path='/comments/:id' component={SoloCommentPage} />
          </Switch>
        <Footer lessonNumber={8}/>
      </div>
    );
  }
}

export default App;