import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import 'font-awesome/css/font-awesome.css';
import './css/index.css';
import './css/login.css'
import * as serviceWorker from './serviceWorker';
import Login from './components/admin/login';
import MainPage from './components/mainPage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={MainPage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
