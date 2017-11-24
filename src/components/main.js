import React, {Component} from 'react';
import ShortForecast from './short_forecast';
import { roundTemperature } from '../helpers';
// import { fetchCurrentForecast, fetch5DaysForecast, fetchHourlyForecast } from '../actions'
import { connect } from 'react-redux';
import SettingsBar from './settings_bar';
import Details from './details';
import HourlyForecast from './hourly_forecast';


class Main extends Component {
  render() {
    const {currentCity, currentForecast} = this.props;

    if (!currentForecast) {
      return <div>Loading..</div>
    }

    return (
      <div className="main-wrap">
        <div className="main bg-white">
          <div className="current">
            <div className="degrees">{roundTemperature(currentForecast.Temperature)}</div>
            <div className="city">{currentCity.LocalizedName}</div>
            <div className="description">{currentForecast.WeatherText}</div>

          </div>
          <ShortForecast/>
        </div>
        <HourlyForecast/>
        <Details/>
        <SettingsBar/>
      </div>
    )
  }

  // componentDidMount () {
  //   const {currentForecast, currentCity} = this.props;
  //   const cityId = currentCity.Key;
  //
  //   this.props.fetchCurrentForecast(cityId);
  //   this.props.fetch5DaysForecast(cityId);
  //   this.props.fetchHourlyForecast(cityId);
  // }
}

function mapStateToProps({currentForecast, currentCity}){
  return {currentForecast, currentCity};
}

export default connect(mapStateToProps)(Main);