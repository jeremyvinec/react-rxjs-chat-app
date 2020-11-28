import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Reducer } from './reducers/index';

//-------------------------------------------------------------//
//-------------------- Redux store config  --------------------//
//-------------------------------------------------------------//
const configureStore = (initialState = {}) => {
  const middlewares: any = [thunk].filter(
    Boolean
  );

  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(Reducer, initialState, enhancer);

  return store;
};

const store = configureStore();

export default store;
