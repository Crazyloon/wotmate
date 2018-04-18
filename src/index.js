/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from './data/store/configureStore';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, syncHistoryWithStore } from 'react-router-redux';
// import { Switch, Router, Route, browserHistory } from 'react-router';
import { Switch, Route, browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';

import App from './components/App';
import Header from './components/shared/Header';
import About from './components/about/About';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../styles/styles.scss';

import { loadWorkouts } from './data/actions/workoutActions';


const store = configureStore();
store.dispatch(loadWorkouts());

//const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render (
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
);