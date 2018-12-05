// фейковое API для эмуляции реквестов
import commentsAPI from "../../api/commentAPI.js";

// ACTION TYPES
// Определяем уникальные имена для вызываемых экшенов
// неободимо следить чтобы имена экшенов (экшен типы) не повторялись

const FETCH_COMMENTS = "app/comments/FETCH_COMMENTS";
const FETCH_COMMENTS_SUCCESS = "app/comments/FETCH_COMMENTS_SUCCESS";
const FETCH_COMMENTS_FAIL = "app/comments/FETCH_COMMENTS_FAIL";

const ADD_COMMENT = "app/comments/ADD_COMMENT";
const ADD_COMMENT_SUCCESS = "app/comments/ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAIL = "app/comments/ADD_COMMENT_FAIL";

// REDUCER

// начальное состояние редьюсера
const initialState = {
  list: [],
  loading: false
};

// Непосредственно сам редьюсера, который является функцией
// при инициализации определяем что по умолчанию состояние редьюсера 
// равно начальному состоянию initialState,
// также задаем пустой экшен (необходимо следить, чтобы он всегда был объектом)
const reducer = (state = initialState, action = {}) => {
  // Выбор экшена определяется через простой switch
  // тип экшена должн приходить в параметре type
  switch (action.type) {
    // экшены при вызове должны выполняют одно действие, поэтому присутствует дублирование
    case ADD_COMMENT:
    case FETCH_COMMENTS:
      return {
        ...state,
        loading: true
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        // данные экшена всегда должны приходить в параметре payload
        list: action.payload
      };

    case ADD_COMMENT_FAIL:
    case FETCH_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        // Самовызывающаяся функция, не пугайтесь :)
        // имеет вид (() => {})()
        // она сначала определяется, а потом сразу следом вызывается
        list: (() => {
          const newList = state.list.slice();
          newList.unshift(action.payload);
          // в данном случае, чтобы иметь возможность сохранить новый комментарий в хранилище
          // для осуществления фейковых реквестов
          sessionStorage.setItem("user-comments", JSON.stringify(newList));
          // возвращаем новый массив комментариев
          return newList;
        })()
      };

    default:
      return state;
  }
};

// SELECTORS
// Набор селекторов, позволяющих упросить выборку определенных данных из хранилища

export const getLocalState = state => {
  return state.comments;
};

export const getCommentsList = state => {
  return getLocalState(state).list;
};

export const getCommentsLoading = state => {
  return getLocalState(state).loading;
};

// ACTION CREATORS
// Набор создателей экшенов, которые мы будем вызывать в коде наших компонентов

export const fetchComments = () => {
  // dispatch это функция, которая непосредственно отвечает за передачу экшена в обработчик
  return dispatch => {
    // Начальных вызов экшена
    dispatch({
      type: FETCH_COMMENTS
    });

    // Вызываем фейковое апи для получения комментариев
    // как раз здесь нам очень помогает redux-thunk который позволяет писать нам асинхронные экшены
    return API.comments
      .fetchComments()
      .then(comments => {
        // в случае успеха вызывает экшен с успехом и передаем данные комментариев в payload
        dispatch({
          type: FETCH_COMMENTS_SUCCESS,
          payload: comments
        });

        return comments;
      })
      .catch(error => {
        // в случае неудачи или ошибки с реквестов вызываем экшен отвечающий за ошибочное выполнение
        dispatch({
          type: FETCH_COMMENTS_FAIL,
          payload: { error }
        });
      });
  };
};

// тоже самое и с реквестом добавления комментария
export const addComment = commentData => {
  return dispatch => {
    dispatch({
      type: ADD_COMMENT
    });

    return API.comments
      .addComment(commentData)
      .then(commentDataResponse => {
        dispatch({
          type: ADD_COMMENT_SUCCESS,
          payload: commentDataResponse
        });
      })
      .catch(error => {
        dispatch({
          type: ADD_COMMENT_FAIL,
          payload: { error }
        });
      });
  };
};

// экспортируем наш редьюсер комментариев
export default reducer;