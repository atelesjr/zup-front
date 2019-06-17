import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';

import './styles/scss/main.scss';

import App from './components/App';

ReactDOM.render(
    <Root> 
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>
    ,document.querySelector('#root') 
);