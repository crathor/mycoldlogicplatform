import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case LOGIN_USER_SUCCESS:
    return { 
      ...state, 
      user: action.payload, 
      isAuthenticated: true 
    };

  case LOGOUT_USER_SUCCESS:
    return { ...state };

  default:
    return state
  }
};
