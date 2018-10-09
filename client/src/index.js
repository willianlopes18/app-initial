import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Login from './components/Login';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/' component={App} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

