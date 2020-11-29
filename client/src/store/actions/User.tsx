import {
  GET_USER,
  GET_USER_SUCCESS,
} from '../constants/actionTypes';

const getUser = (user: string) => {
  return (dispatch: (arg0: { type: string; user: string }) => void) => {
    dispatch({
      type: GET_USER,
      user
    });
  };
}

const getUserSuccess = (user: string) => {
  return (dispatch: (arg0: { type: string; user: string }) => void) => {
    dispatch({
      type: GET_USER_SUCCESS,
      user
    });
  };
}

export {
  getUser,
  getUserSuccess
}