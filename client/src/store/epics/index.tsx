import { combineEpics } from 'redux-observable';
import { 
  getMessagesEpic,
  addMessageEpic,
  completeMessageEpic
} from './Message'
import { 
  userEpic,
} from './User'
import { 
  saveChatEpic  
} from './Chat';

const rootEpic = combineEpics(
  saveChatEpic,
  userEpic,
  getMessagesEpic,
  addMessageEpic,
  completeMessageEpic
);

export {
  rootEpic
}