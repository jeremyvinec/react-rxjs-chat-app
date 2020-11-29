import { combineReducers } from 'redux';

import User from './User';
import Message from './Message';

const reducers = {
  User,
  Message
};

export const Reducer = combineReducers({ ...reducers, });
