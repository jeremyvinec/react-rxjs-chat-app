import { combineReducers } from 'redux';

import User from './User';
import Message from './Message';
import Chat from './Chat';

const reducers = {
  User,
  Message,
  Chat
};

export const Reducer = combineReducers({ ...reducers, });
