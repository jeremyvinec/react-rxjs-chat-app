
import {
  GET_USER
} from '../constants/actionTypes';

const getUser = (payload) => {
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: GET_USER,
      payload
    });
  };
};

export {
  getUser
};