import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTime} from '../helpers';
import Chart from './chart';

class HourlyForecast extends Component {
  render() {
    const {hourlyForecast} = this.props;
    const labels = [];
    const temperatures = [];

    if (!hourlyForecast) return '<div></div>';

    hourlyForecast.map(function (item) {
      labels.push(formatTime(item.DateTime));
      temperatures.push(Math.round(item.Temperature));
    });

    return(
      <div className="hourly-forecast bg-white">
        <div className="block-title">Hourly forecast</div>
        <div className="chart-wrap">
          <Chart temperatures={temperatures} labels={labels}/>
        </div>
      </div>
    )
  }
}
function mapStateToProps({hourlyForecast}) {
  return {hourlyForecast};
}

export default connect(mapStateToProps)(HourlyForecast);