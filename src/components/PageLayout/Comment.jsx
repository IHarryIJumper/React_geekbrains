import React, { Component } from "react";
import "./Comment.scss";



const Comment = props => {
  let userName, text;

  try {
    if (props.id !== undefined) {
      userName = props.userName;
      text = props.text;
    } else if (props.match !== undefined) {
      const id = props.match.params.id - 0;    
      const commentsData = JSON.parse(sessionStorage.getItem("user-comments"));
      const commentData = commentsData[id]; 

      userName = commentData.userName;
      text = commentData.text;
    }
  } catch (e) {
    userName = 'ERROR';
    text = "Comment not found";
  }

  return (<div className="comment">
    <p className="comment-user">{userName}:</p>
    <p className="comment-text">{text}</p>
  </div>)

}

export default Comment;
