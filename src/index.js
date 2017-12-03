import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import mapData from './middlewares/map_data';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Wrapper from './components/wrapper';

const createStoreWithMiddleware = applyMiddleware(thunk, promise, mapData)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Wrapper/>
  </Provider>
  , document.getElementById('root'));
