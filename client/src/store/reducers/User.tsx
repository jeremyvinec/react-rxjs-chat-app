import { 
  GET_USER,
} from '../constants/actionTypes';

const INIT_STATE = {
  user: null,
}

type UserAction = { type: string, payload: {} | string }

const User = (state = INIT_STATE, action: UserAction) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

export default User;

