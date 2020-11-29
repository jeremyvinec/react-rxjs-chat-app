import { 
  SAVE_CHAT
} from '../constants/actionTypes';

const INIT_STATE = {

}

type ChatAction = { type: string, payload: {} | string }

const Chat = (state = {}, action: ChatAction) => {
  switch (action.type) {
    case SAVE_CHAT:
      return action.payload;
    default:
      return state;
  }
}

export default Chat;

