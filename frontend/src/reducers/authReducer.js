import { FETCH_USER, FETCH_QUESTIONS } from '../actions/types'



export default function(state= null, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;

        default:
            return state;
    }
}
