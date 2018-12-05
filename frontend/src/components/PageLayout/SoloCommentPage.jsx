import React, { Component } from "react";
import "./SoloCommentPage.scss";



const SoloCommentPage = props => {
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

export default SoloCommentPage;

/*
import React, { PureComponent } from "react";
// импортируем функцию коннекта компоненты с хранилищем
// необходимо помнить, что не нужно подключать абсолютно все компоненты к редаксу
// в глупых компонентах отвечающих только для простой рендер лучше избежать его подключения
import { connect } from "react-redux";
import Chance from "chance";

import Button from "../PageLayout/Button/Button.jsx";

import Comment from "./Comment.jsx";

// Импортируются необходимые экшены и селекторы из редьюсера
import {
  getCommentsList,
  getCommentsLoading,
  fetchComments,
  addComment
} from "../../redux/modules/comments.js";

import "./Comments.css";

const chanceGenerator = new Chance();

class Comments extends PureComponent {
  state = {
    inputValue: ""
  };

  componentDidMount() {
    const { handleCommentsFetch } = this.props;
    // вызываем получение комментариев через прикрепленный к компоненте экшен в props
    handleCommentsFetch();
  }

  updateInputValue = event => {
    let updatedInput = "";
    if (event) {
      updatedInput = event.target.value;
    }

    this.setState({
      inputValue: updatedInput
    });
  };

  submitComment = () => {
    const { inputValue, comments } = this.state;

    if (inputValue.length === 0) {
      return;
    }

    const commentData = {
      id: chanceGenerator.string({
        pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      }),
      person: chanceGenerator.name({ nationality: "en" }),
      text: inputValue
    };

    // вызываем экшен добавления нового комментария из пропов
    // так же в then дописываем обработчик очистки инпута
    // в случае успешного его добавления
    // Здесь нам и пригодась асинхронной и передача промиса в return
    this.props.addComment(commentData).then(() => {
      this.setState({
        inputValue: ""
      });
    });
  };

  onEnter = event => {
    if (event.key === "Enter") {
      this.submitComment();
    }
  };

  commentInfo(id, event) {
    alert(id);
  }

  render() {
    const { inputValue } = this.state;
    // получаем комментарии из props
    const { comments, loading } = this.props;
    return (
      <div className="comments">
        <div className="submit-container">
          <input
            disabled={loading}
            value={inputValue}
            onChange={this.updateInputValue}
            onKeyPress={this.onEnter}
          />
          <Button onClick={this.submitComment}>Отправить</Button>
        </div>
        <div className="comments-container">
          {comments.length > 0
            ? comments.map(comment => (
                <Comment
                  key={comment.id}
                  person={comment.person}
                  text={comment.text}
                  commentInfoFunction={this.commentInfo.bind(this, comment.id)}
                />
              ))
            : "Empty"}
        </div>
      </div>
    );
  }
}

// Отвечает за подключение состояний в компоненту
// принимает два аргумента state и ownProps
// в state приходит все данные из хранилища redux
// в ownProps можно получить собственные пропы компоненты
// в некоторых случаях их необходимо сравнить или 
// обработать чтобы получить небходимый параметр
// Возвращает объект и вызывается каждый раз при обновлении хранилища
const mapStateToProps = (state, ownProps) => {
  return {
    // с помощью селектора получаем данные из хранилища
    comments: getCommentsList(state),
    loading: getCommentsLoading(state)
  };
};

// Позволяет получить доступ к функции dispatch
// может быть объектом или функцией
// В случае если это функция, то первым аргументом мы получаем функцию dispatch
// в этом случае мы можем прикрепить ее через bindActionCreator из пакета redux
// к нашим экшенам. На выходы должен возвращать объект.
// В данном случае это просто объект и redux сам передает в каждый из экшенов dispatch 
const mapDispatchToProps = {
  handleCommentsFetch: fetchComments,
  addComment
};

// С помощью connect подключаем компоненту к хранилищу
// Первым аргументов передается mapStateToProps
// вторым mapDispatchToProps
// Возвращает функцию в которую мы передаем нашу компоненту во вторых скобках
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

*/
