import { combineEpics } from 'redux-observable';
import { 
  saveChatEpic  
} from './Chat';

const rootEpic = combineEpics(
  saveChatEpic,
);

export {
  rootEpic
}