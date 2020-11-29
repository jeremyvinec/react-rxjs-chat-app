
import { ofType } from 'redux-observable';
import { map, flatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import * as Api from '../../controllers/ChatControllers';

import {
  SAVE_CHAT,
} from '../constants/actionTypes';

import { 
  saveChatSuccess,
} from '../actions/Chat';

const saveChatEpic = (action$: any) =>
  action$.pipe(
    ofType(SAVE_CHAT),
    flatMap(action => Api.saveChat(action.payload)),
    map(message => saveChatSuccess(message))
  );

export {
  saveChatEpic,
}
