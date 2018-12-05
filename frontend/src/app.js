//Подключение модулей библиотеки react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from './components/App.jsx';
import store from "./redux/store.js";

ReactDOM.render(    
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('app')
);


    //  <Route path="/" component={App}/>