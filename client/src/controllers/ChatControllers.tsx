import ChatService from '../services/Chat';
import { map } from "rxjs/operators";
import { from } from 'rxjs';
import { Chat } from '../types/ChatType';

const saveChat = async (data: Chat) => {
  const response = await from(ChatService.post({
    url: ``,
    data: data
  }))
  .pipe(
    map(data => data.response)
  )
}

const getChatByRoom = async (room) => {
  console.log('room', room)
  const response = await from(ChatService.get({
    url: `chat/${room}`,
    data: {}
  }))
  .pipe(
    map(data => data.response) // todo
  )
}

const showChat = async (id) => { // todo
  const response = await from(ChatService.get({
    url: `chat/${id}`,
    data: {}
  }))
  .pipe(
    map(data => data.response)
  )
}

const updateChat = async (id, data) => {
  const response = await from(ChatService.put({
    url: `chat/${id}`,
    data: data
  }))
  .pipe(
    map(data => data.response)
  )
}

const deleteChat = async (id) => {
  const response = await from(ChatService.delete({
    url: `chat/${id}`,
    data: {}
  }))
  .pipe(
    map(data => data.response)
  )
}

export {
  saveChat,
  getChatByRoom,
  showChat,
  updateChat,
  deleteChat
}