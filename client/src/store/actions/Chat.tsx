import { 
  SAVE_CHAT,
  GET_CHAT_BY_ROOM
} from '../constants/actionTypes';
import { log } from 'util';

type saveChat = { room: string, nickname: string, message: string } ; 

const saveChat = (payload: saveChat) => {
  return (dispatch: (arg0: { type: string; payload: saveChat }) => void) => {
    dispatch({
      type: SAVE_CHAT,
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
  getChatByRoom
}