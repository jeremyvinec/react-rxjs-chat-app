  
import { pipe, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { DEV_API } from '../utils';

export const getUser = () => ajax.getJSON(`${DEV_API}/user`);
export const getMessages = () => ajax.getJSON(`${DEV_API}/message`);
export const addMessage = (text) => {
  ajax({
    url: `${DEV_API}/message`,
    method: "POST",
    body: { text }
  }).pipe(map(data => data.response));
}

export const completeMessage = (id) => {
  ajax({
    url: `${DEV_API}/message/${id}/complete`,
    method: "POST"
  }).pipe(map(data => data.response));
}