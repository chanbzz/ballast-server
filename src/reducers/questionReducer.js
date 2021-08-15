import { FETCH_QUESTIONS } from '../actions/types'




export default function(state= null, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_QUESTIONS:
            return action.payload || false;

        default:
            return state;
    }
}