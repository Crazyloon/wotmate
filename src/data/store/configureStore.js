import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

// import { createHistory } from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';


//export const history = createHistory();
export const history = createBrowserHistory();

const middleware = [
  thunk,
  reduxImmutableStateInvariant(),
  routerMiddleware(history)
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
}