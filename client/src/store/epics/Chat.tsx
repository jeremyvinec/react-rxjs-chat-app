
import { ofType } from 'redux-observable';
import { map, flatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import * as Api from '../../controllers/ChatControllers';

import {
  SAVE_CHAT,
  GET_CHAT_BY_ROOM
} from '../constants/actionTypes';

import { 
  saveChatSuccess,
} from '../actions/Chat';

const saveChatEpic = (action$: any) =>
  action$.pipe(
    ofType(SAVE_CHAT),
    flatMap((action: any) => Api.saveChat(action.payload)),
    map(message => saveChatSuccess(message))
  );

const getChatByRoomEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_CHAT_BY_ROOM),
    flatMap((action: any) => Api.getChatByRoom(action.payload)),
    map(({ message }: any) => console.log(message)) // getMessagesSuccess(message)
  );

export {
  saveChatEpic,
  getChatByRoomEpic
}
