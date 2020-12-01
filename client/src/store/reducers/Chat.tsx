import { 
  SAVE_CHAT,
  SAVE_CHAT_SUCCESS,
  GET_CHAT_BY_ROOM,
  GET_CHAT_BY_ROOM_SUCCESS
} from '../constants/actionTypes';

const INIT_STATE = {
  chat: null,
  chatByRoom: [],
}

type ChatAction = { type: string, payload: {} | string }

const Chat = (state = INIT_STATE, action: any) => {
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
      // clone the current state
      const clone = JSON.parse(JSON.stringify(state.chatByRoom));
      // check if chet already exist
      const chatExist = clone.findIndex((i: any) => i._id !== action.payload._id);
      console.log(chatExist)
      if (chatExist !== -1) {
        return {
          ...state,
          chatByRoom: [...state.chatByRoom, action.payload]
        };
      } else {
        return {
          ...state,
          chatByRoom: clone
        };
      };
    default:
      return state;
  }
}

export default Chat;

