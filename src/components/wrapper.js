import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchCurrentForecast, fetch5DaysForecast, fetchHourlyForecast } from '../actions'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main';
import PeriodForecast from './period_forecast';
import CitiesList from './cities_list';


class Wrapper extends Component {
  render () {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/period_forecast/:cityId" component={PeriodForecast}/>
            <Route path="/cities_list" component={CitiesList}/>
            <Route path="/" component={Main}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

  componentDidMount () {
    setInterval(()=> {this.updateData()}, 15000);
  }

  updateData (fCallback) {
    const {currentForecast, currentCity} = this.props;
    const cityId = currentCity.Key;

    this.props.fetchCurrentForecast(cityId);
    this.props.fetch5DaysForecast(cityId);
    this.props.fetchHourlyForecast(cityId);

    if (fCallback) {
      fCallback();
    }

  }
}
function mapStateToProps({currentForecast, currentCity}){
  return {currentForecast, currentCity};
}

export default connect(mapStateToProps, { fetchCurrentForecast, fetch5DaysForecast, fetchHourlyForecast })(Wrapper);