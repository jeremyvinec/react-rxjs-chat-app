import { 
  SAVE_CHAT,
  GET_CHAT_BY_ROOM
} from '../constants/actionTypes';

const INIT_STATE = {
  chat: null,
  room: [],
}

type ChatAction = { type: string, payload: {} | string }

const Chat = (state = INIT_STATE, action: ChatAction) => {
  switch (action.type) {
    case SAVE_CHAT:
      return {
        ...state,
        chat: action.payload
      };
    case GET_CHAT_BY_ROOM:
      return {
        ...state,
        room: action.payload
      };
    case 'GET_CHAT_BY_ROOM_SUCCESS':
      // todo
      return {
        ...state,
        room: action.payload
      };
    default:
      return state;
  }
}

export default Chat;

