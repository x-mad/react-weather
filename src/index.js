import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import mapData from './middlewares/map_data';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Main from './components/main';
import PeriodForecast from './components/period_forecast';
import CitiesList from './components/cities_list';

const createStoreWithMiddleware = applyMiddleware(promise, mapData)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route path="/period_forecast/:cityId" component={PeriodForecast}/>
          <Route path="/cities_list" component={CitiesList}/>
          <Route path="/" component={Main}/>
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
