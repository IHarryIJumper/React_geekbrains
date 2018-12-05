//reducers - функция (или несколько функций), которая получает action (действие)
// и в соответствии с этим действием изменяет состояние store(хранилища)


// функция combineReducers позволяет нам соединять несколько редьюсеров в один
import { combineReducers } from "redux";

// испортируем редьюсер комментариев
import commentReducer from "./commentReducer.js";

// подключаем редьюсер комментариев в объект редьюсеров
export default combineReducers({
  commentReducer
});
