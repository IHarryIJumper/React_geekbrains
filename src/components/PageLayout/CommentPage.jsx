import React, { Component } from "react";
import "./CommentPage.scss";

class CommentPage extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      commentsData: sessionStorage.getItem("user-comments") ? JSON.parse(sessionStorage.getItem("user-comments")) : []
    };
  }


  addComment = () => {
    const commentText = document.querySelector("#comment_input").value;

    let { commentsData } = this.state;
   
    commentsData.push({
      userName: this.props.userName,
      commentId: commentsData.length,
      commentText
    })
    sessionStorage.setItem("user-comments", JSON.stringify(commentsData));
    this.setState({
      commentsData
    })    
  }

  renderComments = () => {
    const { commentsData } = this.state;
    //sessionStorage.setItem("user-comments",[]);
    return (
      commentsData.map(comment => (
        <div className="comment" key={comment.commentId}>
          {comment.userName}:  {comment.commentText}
        </div>
      ))
      )
  }//#renderComments



  render() {
    return (
      <main id="commentPage">
        <div id="comment-list">
          {this.renderComments()}
        </div>

        <div id="comment-add">
          <input id="comment_input" /><button id="add-comment_button" onClick={this.addComment}>Add comment</button>
        </div>

      </main>);
  }
}

export default CommentPage;
