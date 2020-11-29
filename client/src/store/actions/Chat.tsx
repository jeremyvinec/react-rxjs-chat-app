import { 
  SAVE_CHAT,
  SAVE_CHAT_SUCCESS
} from '../constants/actionTypes';

//saveChat

type saveChat = { room: string, nickname: string, message: string } ; 

const saveChat = (payload: saveChat) => {
  return (dispatch: (arg0: { type: string; payload: saveChat }) => void) => {
    dispatch({
      type: SAVE_CHAT,
      payload
    });
  };
}

const saveChatSuccess = (payload: string) => {
  return (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
      type: SAVE_CHAT_SUCCESS,
      payload
    });
  };
}

export {
  saveChat,
  saveChatSuccess
}