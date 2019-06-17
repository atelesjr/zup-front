import { FETCH_COUNTRY } from '../actions/types';

const INITIAL_STATE = []

export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case FETCH_COUNTRY:
            return action.payload.data
        default:
            return state;
    }
}