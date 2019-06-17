import { combineReducers } from 'redux';
import countriesReducer from './countries';
import authReducer from './auth';



export default combineReducers ({
    countries: countriesReducer,
    auth: authReducer,
});

