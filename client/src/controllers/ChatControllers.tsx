import { Chat } from '../types/ChatType';
import Axios from  'axios-observable';
import { map } from 'rxjs/operators';
import { DEV_API } from '../utils';

import { 
  SAVE_CHAT_SUCCESS,
  GET_CHAT_BY_ROOM_SUCCESS
} from '../store/constants/actionTypes';

const saveChat = (data: Chat) => {
  return Axios.post(`${DEV_API}`, data)
  .pipe(
    map(res => ({ type: SAVE_CHAT_SUCCESS, payload: res.data }))
  )
}

const getChatByRoom = (room: string) => {
  return Axios.get(`${DEV_API}${room}`)
  .pipe(
    map(res => ({ type: GET_CHAT_BY_ROOM_SUCCESS, payload: res.data }))
  )
}

const showChat = async (id: string) => {
  await Axios.get(`${DEV_API}chat/${id}`)
  .subscribe(
    response => console.log(response),
    error => console.log(error)
  );
}

const updateChat = async (id, data) => {
  await Axios.put(`${DEV_API}chat/${id}`, {
    //too data
  }).subscribe(
    response => console.log(response),
    error => console.log(error)
  );
}

const deleteChat = async (id) => {
  await Axios.delete(`${DEV_API}chat/${id}`)
  .subscribe(
    response => console.log(response),
    error => console.log(error)
  );
}

export {
  saveChat,
  getChatByRoom,
  showChat,
  updateChat,
  deleteChat
}