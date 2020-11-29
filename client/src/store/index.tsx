import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from './reducers/index';
import { rootEpic } from './epics';

//-------------------------------------------------------------//
//-------------------- Redux store config  --------------------//
//-------------------------------------------------------------//
const configureStore = (initialState = {}) => {
  const middlewares: any = [thunk].filter(
    Boolean
  );
  const epicMiddleware = createEpicMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares, epicMiddleware));
  const store = createStore(Reducer, initialState, enhancer);
  epicMiddleware.run(rootEpic);

  return store;
};

const store = configureStore();

export default store;
