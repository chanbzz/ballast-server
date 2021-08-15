import axios from 'axios';
import { FETCH_QUESTIONS, FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');

        dispatch({ type: FETCH_USER, payload: res.data });

            

    };


export const fetchQuestion = () => async dispatch => {
        const res = await axios.get('/questions')

        dispatch({type: FETCH_QUESTIONS})



}



