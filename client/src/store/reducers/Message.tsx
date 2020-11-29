import {
  GET_MESSAGES_SUCCESS,
  ADD_MESSAGE_SUCCESS,
  COMPLETE_MESSAGE_SUCCESS
} from '../constants/actionTypes';

const INIT_STATE = {

}

type MessageAction = { type: string, message: {} | string }

const Message = (state = [], action: MessageAction) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return action.message;
    case ADD_MESSAGE_SUCCESS:
      return [...state, action.message];
    case COMPLETE_MESSAGE_SUCCESS:
      return state.map((message: any) => {
        if (message.id === action.message.id) {
          return { ...message, completed: true };
        }
        return message;
      });
    default:
      return state;
  }
}

export default Message;