import { 
  SAVE_CHAT,
  GET_CHAT_BY_ROOM,
  GET_CHAT_BY_ROOM_SUCCESS
} from '../constants/actionTypes';

const INIT_STATE = {
  chat: null,
  chatByRoom: [],
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
        chatByRoom: action.payload
      };
    case GET_CHAT_BY_ROOM_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        chatByRoom: action.payload
      };
    default:
      return state;
  }
}

export default Chat;

