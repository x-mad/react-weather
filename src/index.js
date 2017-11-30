import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import mapData from './middlewares/map_data';
import thunk from 'redux-thunk';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
// import Main from './components/main';
// import PeriodForecast from './components/period_forecast';
// import CitiesList from './components/cities_list';
import Wrapper from './components/wrapper';

const createStoreWithMiddleware = applyMiddleware(thunk, promise, mapData)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Wrapper/>
  </Provider>
  , document.getElementById('root'));
