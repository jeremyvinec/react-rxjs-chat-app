import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  ADD_MESSAGE,
  ADD_MESSAGE_SUCCESS,
  COMPLETE_MESSAGE,
  COMPLETE_MESSAGE_SUCCESS
} from '../constants/actionTypes';

const INIT_STATE = {

}

type AuthAction = { type: string, payload: {} | string }
type State = { user?: {} | null, loading?: boolean, value?: boolean }

const Message = (state = [], action: any) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return action.payload;
    case ADD_MESSAGE_SUCCESS:
      return [...state, action.payload];
    case COMPLETE_MESSAGE_SUCCESS:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: true };
        }
        return todo;
      });
    default:
      return state;
  }
}

export default Message;