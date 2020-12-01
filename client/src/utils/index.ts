import config from './config';
import * as io from 'socket.io-client';
const socket = io.io('http://localhost:4000');

// mode dev || prod
const active = config.get('dev')

const DEV_API = active.DEV_API

export {
  DEV_API,
  socket
}