
import { ofType } from 'redux-observable';
import { map, flatMap } from 'rxjs/operators';
import * as Api from '../../controllers/ChatControllers';

import {
  SAVE_CHAT,
  GET_CHAT_BY_ROOM
} from '../constants/actionTypes';

//const getChatByRoom = payload => ({ type: GET_CHAT_BY_ROOM, payload });

const saveChatEpic = (action$: any) =>
  action$.pipe(
    ofType(SAVE_CHAT),
    flatMap((action: any) => Api.saveChat(action.payload)
    .pipe(
      map(res => ({ type: SAVE_CHAT, payload: res.data }))
    )),
  );

const getChatByRoomEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_CHAT_BY_ROOM),
    flatMap((action: any) => Api.getChatByRoom(action.payload))
    //map(res =>  ({ type: 'GET_CHAT_BY_ROOM_SUCCESS', res }) )
  )

export {
  saveChatEpic,
  getChatByRoomEpic
}
