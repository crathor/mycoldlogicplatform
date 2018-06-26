import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from './types';
import axios from 'axios';

export const logUserIn = () => {
    return (dispatch) => {
        axios.get('/Employees/2')
            .then(res => dispatch({ 
                type: LOGIN_USER_SUCCESS, 
                payload: res.data
            }));
    }
}

export const logUserOut = () => {
    return {
        type: LOGOUT_USER_SUCCESS,
        payload: { authenticated: false }
    }
}