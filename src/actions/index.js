import axios from 'axios';
import {  
    FETCH_COUNTRY, 
    CHANGE_AUTH, 
    } from './types';

const URL = `http://restcountries.eu/rest/v2`;
const apiFilter = '?fields=flag;name;nativeName;region;subregion;currencies;callingCodes;topLevelDomain'

export function fetchData(){
    
    const response = axios.get(`${URL}/all${apiFilter}`)
        .catch(error => console.log('Erro: ', error))
        
    return {
        type: FETCH_COUNTRY, 
        payload: response
    }
};

export function changeAuth(isLoggedIn) {
    
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

