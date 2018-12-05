//store хранит состояние приложения


// Импортируем функции приминения мидлверов, создания хранилища, соединителя мидлверов
import { applyMiddleware, createStore, compose } from "redux";
// redux-thunk позволяет нам работать с redux в асинхронном режиме 
import thunk from "redux-thunk";

// подключаем редьюсеры с логиков хранилища
import reducers from "./reducers.js";

// подключаем композитор из Redux DevTool расширения или из библиотеки
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// небольшой мидлвер для логирования экшенов и изменения хранилища
const logger = ({ getState }) => {
  return next => action => {
    console.log("will dispatch", action);
    const returnValue = next(action);
    console.log("state after dispatch", getState());
    return returnValue;
  };
};

// собираем милдверы
const middleware = composeEnhancers(applyMiddleware(logger, thunk));

// создаем хранилище и сразу же его экспортируем
export default createStore(reducers, middleware);
