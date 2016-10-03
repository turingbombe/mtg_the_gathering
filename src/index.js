import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

//import { createStore, applyMiddleware } from 'redux';
//import rootReducer from './reducers';



ReactDOM.render(
  <Provider >
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
