//reducer - функция которая получает действие и в соответствии с этим действием изменяет состояние хранилища

// ACTION TYPES
// Определяем уникальные имена для вызываемых экшенов
// неободимо следить чтобы имена экшенов (экшен типы) не повторялись

const GET_COMMENTS = "app/comments/GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "app/comments/GET_COMMENTS_SUCCESS";
const GET_COMMENTS_FAIL = "app/comments/GET_COMMENTS_FAIL";

const ADD_COMMENT = "app/comments/ADD_COMMENT";
const ADD_COMMENT_SUCCESS = "app/comments/ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAIL = "app/comments/ADD_COMMENT_FAIL";

const DELETE_COMMENT = "app/comments/DELETE_COMMENT";
const DELETE_COMMENT_SUCCESS = "app/comments/DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_FAIL = "app/comments/DELETE_COMMENT_FAIL";

const initialState = {
    list: [],
    loading: false
};


// Непосредственно сам редьюсера, который является функцией
// при инициализации определяем что по умолчанию состояние редьюсера 
// равно начальному состоянию initialState,
// также задаем пустой экшен (необходимо следить, чтобы он всегда был объектом)
const commentReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                loading: true
            };

        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                // данные экшена всегда должны приходить в параметре payload
                list: action.payload
            };
        
        case GET_COMMENTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }    
}
module.exports = commentReducer;


// REDUCER
/*
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
};*/

// SELECTORS
// Набор селекторов, позволяющих упросить выборку определенных данных из хранилища
/*
export const getLocalState = state => {
  return state.comments;
};

export const getCommentsList = state => {
  return getLocalState(state).list;
};

export const getCommentsLoading = state => {
  return getLocalState(state).loading;
};


// экспортируем наш редьюсер комментариев
export default reducer;*/