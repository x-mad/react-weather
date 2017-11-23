import React, { Component } from 'react';
import { connect } from 'react-redux';
import { roundTemperature, dayName } from '../helpers';
import  { getIconData } from '../helpers/icons';
import Ionicon from 'react-ionicons';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ShortForecast extends Component {
  render() {
    return (
      <div className="short-forecast-wrap">
        <div className="short-forecast">
          {this.render3DayForecast()}
        </div>
        <div className="full-forecast-link" onClick={() => this.onPeriodForecastClick()}>5 day forecast
        </div>
      </div>
    )
  }
  onPeriodForecastClick() {
    const {history, currentCity} = this.props;
    history.push(`/period_forecast/${currentCity.key}`);
  }

  render3DayForecast() {
    const daysCount = 3;
    const forecasts = _.slice(this.props.forecasts, 0, daysCount);

    return _.map(forecasts, (forecast, index) => {

      const {Date, Day, Night} = forecast;
      const dayCls = "short-forecast-day" + ((index === daysCount - 1) ? " last" : "");

      return(
        <div className={dayCls} key={Date}>
          <div className="icon">
            <Ionicon icon={getIconData(Day.Icon).class} fontSize="50" color="#555"/>
          </div>
          <div className="description">
            <div className="text">
              <div className="day-name">{dayName(Date)}</div>
              <div className="phrase">{Day.IconPhrase}</div>
            </div>
            <div className="temperature">
              <span className="day">{roundTemperature(Day.Temperature)}</span>
             <span className="separator">/</span>
              <span className="night">{roundTemperature(Night.Temperature)}</span>
            </div>
          </div>
        </div>
      )
    });
    }
}

function mapStateToProps({forecasts, currentCity}){
  return {forecasts, currentCity};
}

export default withRouter(connect(mapStateToProps)(ShortForecast));