import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';
import * as serviceWorker from './serviceWorker';

import reducers from './redux/reducers';
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    reduxPromise,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
