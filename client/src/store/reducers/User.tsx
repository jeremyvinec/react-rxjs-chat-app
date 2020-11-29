import {
  GET_USER_SUCCESS
} from '../constants/actionTypes';

const INIT_STATE = {

}

type AuthAction = { type: string, payload: {} | string }
type State = { user?: {} | null, loading?: boolean, value?: boolean }

const User = (state: State = INIT_STATE, action: AuthAction) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default User;