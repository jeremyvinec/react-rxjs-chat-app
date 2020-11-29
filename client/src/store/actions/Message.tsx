import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  ADD_MESSAGE,
  ADD_MESSAGE_SUCCESS,
  COMPLETE_MESSAGE,
  COMPLETE_MESSAGE_SUCCESS
} from '../../constants/actionTypes';

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

const getMessages = (message: string) => {
  return (dispatch: (arg0: { type: string; message: string }) => void) => {
    dispatch({
      type: GET_MESSAGES,
      message
    });
  };
}

const getMessagesSuccess = (message: string) => {
  return (dispatch: (arg0: { type: string; message: string }) => void) => {
    dispatch({
      type: GET_MESSAGES_SUCCESS,
      message
    });
  };
}

const addMessage = (message: string) => {
  return (dispatch: (arg0: { type: string; message: string }) => void) => {
    dispatch({
      type: ADD_MESSAGE,
      message
    });
  };
}

const addMessageSuccess = (message: string) => {
  return (dispatch: (arg0: { type: string; message: string }) => void) => {
    dispatch({
      type: ADD_MESSAGE_SUCCESS,
      message
    });
  };
}

const completeMessage = (message: string) => {
  return (dispatch: (arg0: { type: string; message: string }) => void) => {
    dispatch({
      type: COMPLETE_MESSAGE,
      message
    });
  };
}

const completeMessageSuccess = (message: string) => {
  return (dispatch: (arg0: { type: string; message: string }) => void) => {
    dispatch({
      type: COMPLETE_MESSAGE_SUCCESS,
      message
    });
  };
}

export {
  getUser,
  getUserSuccess,
  getMessages,
  getMessagesSuccess,
  addMessage,
  addMessageSuccess,
  completeMessage,
  completeMessageSuccess
}