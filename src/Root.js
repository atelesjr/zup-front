import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxMulti from 'redux-multi';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

export default ({ children, initialState = {} }) => {


    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

    const store = applyMiddleware(reduxPromise, reduxMulti, reduxThunk )(createStore)(reducers, devTools);

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    )
}