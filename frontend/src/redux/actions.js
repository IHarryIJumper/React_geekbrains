//actions - некоторый набор информации, который исходит от приложения к хранилищу 
//и который указывает,  что именно нужно сделать. 
//Для передачи этой информации у хранилища вызывается метод dispatch().

import commentAPI from "../api/commentAPI";


// SELECTORS
// Набор селекторов, позволяющих упросить выборку определенных данных из хранилища

/*export const getLocalState = state => {
    return state.comments;
  };
  
  export const getCommentsList = state => {
    return getLocalState(state).list;
  };
  
  export const getCommentsLoading = state => {
    return getLocalState(state).loading;
  };*/

const getComments = () => {
    /*return {
        type: "GET_COMMENTS",
        comments
    }*/
    // dispatch это функция, которая непосредственно отвечает за передачу экшена в обработчик
    return dispatch => {
        // Начальных вызов экшена
        dispatch({
          type: GET_COMMENTS
        });
    
        // Вызываем апи для получения комментариев
        // как раз здесь нам очень помогает redux-thunk который позволяет писать нам асинхронные экшены
        return commentAPI
          .getComments()
          .then(comments => {
             console.log(comments) 
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


export default getComments;
//module.exports = { getComments/*, addComment, deleteComment */};