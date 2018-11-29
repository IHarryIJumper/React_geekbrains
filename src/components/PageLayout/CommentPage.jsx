import React, { Component } from "react";
import "./CommentPage.scss";

import Comment from "./Comment.jsx";
//import { Switch, Route, Router, Link } from 'react-router';
import { Link } from 'react-router-dom';

class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsData: sessionStorage.getItem("user-comments") ? JSON.parse(sessionStorage.getItem("user-comments")) : []
    };
  }


  addComment = () => {
    let { commentsData } = this.state;
    const commentText = document.querySelector("#comment_input").value;

    commentsData.push({
      userName: this.props.userName,
      id: commentsData.length,
      text: commentText
    })
    sessionStorage.setItem("user-comments", JSON.stringify(commentsData));
    this.setState({
      commentsData
    })
  }

  renderComments = () => {
    const { commentsData } = this.state;
    //sessionStorage.setItem("user-comments",[]);    
    return commentsData.map(comment => (
      <li key={`comment-route-${comment.id}`}>
        <Link to={`/comments/${comment.id}`} >
          <Comment id={comment.id} userName={comment.userName} text={comment.text} />
        </Link>
      </li>
    ))
  }//#renderComments  

  render() {
    return (
      <main id="commentPage">
        <ul id="comment-list">
          {this.renderComments()}
        </ul>

        <div id="comment-add">
          <input id="comment_input" /><button id="add-comment_button" onClick={this.addComment}>Add comment</button>
        </div>

      </main>);
  }
}

export default CommentPage;
