import { combineEpics } from 'redux-observable';
import { 
  userEpic,
  getTodosEpic,
  addTodoEpic,
  completeTodoEpic
} from './Message'

const rootEpic = combineEpics(
  userEpic,
  getTodosEpic,
  addTodoEpic,
  completeTodoEpic
);

export {
  rootEpic
}