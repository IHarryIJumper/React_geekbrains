//Подключение модулей библиотеки react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import App from './components/App.jsx';


//console.log(document.getElementById('app'));

ReactDOM.render(
    <BrowserRouter>
        <App />  
    </BrowserRouter>, document.getElementById('app')
    );

    //  <Route path="/" component={App}/>