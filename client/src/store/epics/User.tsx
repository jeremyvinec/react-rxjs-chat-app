import { ofType } from 'redux-observable';
import { map, flatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import * as Api from '../../api';

import {
  GET_USER,
} from '../constants/actionTypes';

import { 
  getUserSuccess
} from '../actions/User';

const userEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_USER),
    flatMap(() => Api.getUser()),
    map(user => getUserSuccess(user))
  );

export {
  userEpic
}