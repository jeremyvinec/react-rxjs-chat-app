import { 
  SAVE_CHAT,
  SAVE_CHAT_SUCCESS,
  GET_CHAT_BY_ROOM,
  GET_CHAT_BY_ROOM_SUCCESS
} from '../constants/actionTypes';

const INIT_STATE = {
  chat: null,
  chatSuccess: null,
  chatByRoom: [],
}

type ChatAction = { type: string, payload: {} | string }

const Chat = (state = INIT_STATE, action: ChatAction) => {
  switch (action.type) {
    case GET_CHAT_BY_ROOM:
      return {
        ...state,
        chatByRoom: action.payload
      };
    case GET_CHAT_BY_ROOM_SUCCESS:
      return {
        ...state,
        chatByRoom: action.payload
      };
    case SAVE_CHAT:
      return {
        ...state,
        chat: action.payload
      };
    case SAVE_CHAT_SUCCESS:
      return {
        ...state,
        chatSuccess: action.payload
      };
    default:
      return state;
  }
}

export default Chat;

