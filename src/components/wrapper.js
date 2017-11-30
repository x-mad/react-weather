import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchAllData } from '../actions'
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

  componentWillReceiveProps (nextProps) {
   if (nextProps.currentCity.Key !== this.props.currentCity.Key) {
     this.stopPoll();
   }
  }

  componentDidMount () {
    this.startPoll();
  }
  componentWillUnmount() {
    this.stopPoll();
  }

  stopPoll () {
    clearTimeout(this.pid);
    this.pid = null;
  }

  startPoll () {
    this.updateData().then(() => {
      this.pid = setTimeout(() => {this.startPoll();}, 10000);
    })
  }

  updateData () {
    const {currentForecast, currentCity:{Key: cityId}} = this.props;

    return this.props.fetchAllData(cityId);
  }
}
function mapStateToProps({currentForecast, currentCity}){
  return {currentForecast, currentCity};
}

export default connect(mapStateToProps, { fetchAllData })(Wrapper);