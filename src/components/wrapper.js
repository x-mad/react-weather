import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchAllData, initializeCity, setCurrentCity } from '../actions'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main';
import PeriodForecast from './period_forecast';
import CitiesList from './cities_list';

const POLLER_TIMEOUT = 30000; //ms

class Wrapper extends Component {
  
  render () {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/period_forecast" component={PeriodForecast}/>
            <Route path="/cities_list" component={CitiesList}/>
            <Route path="/" component={Main}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

  componentWillReceiveProps (nextProps) {
    this.stopPoll();

    if (nextProps.currentCity.Key !== this.props.currentCity.Key) {
      this.updateData(nextProps);
    } else if (!nextProps.isFetching) {
      this.startPoll();
    }
  }

  componentDidMount () {
    const {props} = this;

    props.initializeCity();
  }
  componentWillUnmount() {
    this.stopPoll();
  }

  stopPoll () {
    clearTimeout(this.pid);
    this.pid = null;
  }

  startPoll () {
      this.pid = setTimeout(() => {this.updateData(this.props)}, POLLER_TIMEOUT);
  }

  updateData (props) {
    const {currentCity:{Key: cityId}} = props;

    return this.props.fetchAllData(cityId);
  }
}
function mapStateToProps({isFetching, currentCity}){
  return {isFetching, currentCity};
}

export default connect(mapStateToProps, { fetchAllData, initializeCity, setCurrentCity })(Wrapper);