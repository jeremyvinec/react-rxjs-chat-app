import { combineEpics } from 'redux-observable';
import { 
  saveChatEpic,
  getChatByRoomEpic  
} from './Chat';

const rootEpic = combineEpics(
  saveChatEpic,
  getChatByRoomEpic
);

export {
  rootEpic
}