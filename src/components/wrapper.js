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
    this.stopPoll();

    if (nextProps.currentCity.Key !== this.props.currentCity.Key) {
      this.updateData(nextProps);
    } else if (!nextProps.isFetching) {
      this.startPoll();
    }
  }

  componentDidMount () {
    this.updateData(this.props);
  }
  componentWillUnmount() {
    this.stopPoll();
  }

  stopPoll () {
    clearTimeout(this.pid);
    this.pid = null;
  }

  startPoll () {
      this.pid = setTimeout(() => {this.updateData(this.props)}, 10000);
  }

  updateData (props) {
    const {currentCity:{Key: cityId}} = props;

    return this.props.fetchAllData(cityId);
  }
}
function mapStateToProps({isFetching, currentCity}){
  return {isFetching, currentCity};
}

export default connect(mapStateToProps, { fetchAllData })(Wrapper);