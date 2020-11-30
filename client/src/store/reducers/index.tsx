import { combineReducers } from 'redux';

import Chat from './Chat';
import User from './User';

const reducers = {
  Chat,
  User
};

export const Reducer = combineReducers({ ...reducers, });
