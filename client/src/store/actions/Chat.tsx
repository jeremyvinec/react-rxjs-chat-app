import { 
  SAVE_CHAT,
  SAVE_CHAT_SUCCESS,
  GET_CHAT_BY_ROOM,
} from '../constants/actionTypes';

type saveChat = { room: string, nickname: string, message: string } ; 

const saveChat = (payload: any) => {
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SAVE_CHAT,
      payload
    });
  };
}

const saveChatSuccess = (payload: any) => {
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: SAVE_CHAT_SUCCESS,
      payload
    });
  };
}

const getChatByRoom = (payload: any) => {
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: GET_CHAT_BY_ROOM,
      payload
    });
  };
}

export {
  saveChat,
  saveChatSuccess,
  getChatByRoom
}