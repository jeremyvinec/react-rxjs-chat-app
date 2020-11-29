import { 
  SAVE_CHAT,
  GET_CHAT_BY_ROOM
} from '../constants/actionTypes';

const INIT_STATE = {

}

type ChatAction = { type: string, payload: {} | string }

const Chat = (state = [], action: ChatAction) => {
  switch (action.type) {
    case SAVE_CHAT:
      return action.payload;
    case GET_CHAT_BY_ROOM:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default Chat;

