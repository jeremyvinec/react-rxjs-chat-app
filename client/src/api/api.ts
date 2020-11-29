  
import { pipe, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const BASE_URL =
  "https://us-central1-redux-observable-Messages.cloudfunctions.net/api";

export const getUser = () => ajax.getJSON(`${BASE_URL}/user`);
export const getMessages = () => ajax.getJSON(`${BASE_URL}/message`);
export const addMessage = (text) =>
  ajax({
    url: `${BASE_URL}/Message`,
    method: "POST",
    body: { text }
  }).pipe(map(data => data.response));

export const completeMessage = (id) =>
  ajax({
    url: `${BASE_URL}/Message/${id}/complete`,
    method: "POST"
  }).pipe(map(data => data.response));