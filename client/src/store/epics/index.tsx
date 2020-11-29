import { combineEpics } from 'redux-observable';
import { 
  getMessagesEpic,
  addMessageEpic,
  completeMessageEpic
} from './Message'
import { 
  userEpic,
} from './User'

const rootEpic = combineEpics(
  userEpic,
  getMessagesEpic,
  addMessageEpic,
  completeMessageEpic
);

export {
  rootEpic
}