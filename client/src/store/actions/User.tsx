import {
  GET_USER,
  GET_USER_SUCCESS,
} from '../constants/actionTypes';

const getUser = (message: string) => {
  return (dispatch: (arg0: { type: string; message: string }) => void) => {
    dispatch({
      type: GET_USER,
      message
    });
  };
}

const getUserSuccess = (message: string) => {
  return (dispatch: (arg0: { type: string; message: string }) => void) => {
    dispatch({
      type: GET_USER_SUCCESS,
      message
    });
  };
}

export {
  getUser,
  getUserSuccess
}