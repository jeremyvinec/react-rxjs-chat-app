import { Chat } from '../types/ChatType';
import Axios from  'axios-observable';
import { map, flatMap } from 'rxjs/operators';
import { DEV_API } from '../utils';
import * as io from 'socket.io-client';
const socket = io.io('http://localhost:4000');

import { 
  GET_CHAT_BY_ROOM 
} from '../store/constants/actionTypes';

const saveChat = (data: Chat) => {
  //socket.emit('save-message', data);
  return Axios.post(`${DEV_API}`, {
    room: data.room,
    nickname: data.nickname
  })
}

const getChatByRoom = (room: string) => {
  return Axios.get(`${DEV_API}${room}`)
  .pipe(
    map(res => ({ type: 'GET_CHAT_BY_ROOM_SUCCESS', payload: res.data }))
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