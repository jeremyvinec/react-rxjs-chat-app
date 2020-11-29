
import { ofType } from 'redux-observable';
import { map, flatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import * as Api from '../../api/api';

import {
  GET_MESSAGES,
  ADD_MESSAGE,
  COMPLETE_MESSAGE
} from '../constants/actionTypes';

import { 
  getMessagesSuccess,
  addMessageSuccess,
  completeMessageSuccess
} from '../actions/Message';

const getMessagesEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_MESSAGES),
    flatMap(() => Api.getMessages()),
    map(({ message }: any) => getMessagesSuccess(message))
  );

const addMessageEpic = (action$: any) =>
  action$.pipe(
    ofType(ADD_MESSAGE),
    flatMap(action => Api.addMessage(action.payload)),
    map(message => addMessageSuccess(message))
  );

const completeMessageEpic = (action$: any) =>
  action$.pipe(
    ofType(COMPLETE_MESSAGE),
    flatMap(action => Api.completeMessage(action.payload)),
    map(message => completeMessageSuccess(message))
  );

export {
  getMessagesEpic,
  addMessageEpic,
  completeMessageEpic
}
