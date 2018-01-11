import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import { connect } from 'react-redux';
import _ from 'lodash';
import { roundTemperature, dayName, shortDate } from '../helpers';
import  { getIconData } from '../helpers/icons';
import {Line} from 'react-chartjs-2';
import classNames from 'classnames';
// import Chart from './chart.js';

class PeriodForecast extends Component {
  
  render () {
    const {forecasts} = this.props;

    return (
      <div className="period-forecast bg-white">
        <div className="header">
          <div className="name">5 day forecast</div>
          <div className="period">{`${shortDate(forecasts[0].Date)} - ${shortDate(forecasts[forecasts.length-1].Date)}`} </div>
        </div>
        <div className="table-wrap">
          <div className="table">{this.renderTable()}</div>  
        </div>
        <div className="close-wrap">
          <div className="close" onClick={() => this.onClose()}>
            <Ionicon icon="ion-ios-close-empty" fontSize="40px" color="#838383"/>
          </div>
        </div>

      </div>
    );
  }
  renderTable () {
    const {forecasts} = this.props;
    let isFirstCol = true;

    return _.map(forecasts, (forecast, index) => {
      const {Date, Day, Night, Wind} = forecast;
      const columnCls = classNames({column : true, first:isFirstCol});
      let chart = '';

      if(isFirstCol){
        chart = ''; //<Chart temperatures={[10,20,30,40]} labels={['s','f','sa','gg']}/>;
      }
      isFirstCol = false;

      return (
        <div className={columnCls} key={Date}>
          <div className="date">
            <div className="name">{dayName(Date)}</div>
            <div className="short">{shortDate(Date)}</div>
          </div>
          <div className="day column-border">
            <Ionicon icon={getIconData(Day.Icon).class} fontSize="40" color="#555"></Ionicon>
            <div className="phrase">{Day.IconPhrase}</div>
             <div className="temperature">{roundTemperature(Day.Temperature)}</div>
          </div>
          <div className="chart column-border">
            {chart}
          </div>
          <div className="night column-border">
            <div className="temperature">{roundTemperature(Night.Temperature)}</div>
            <Ionicon icon={getIconData(Night.Icon).class} fontSize="40" color="#555"></Ionicon>
            <div className="phrase">{Night.IconPhrase}</div>
          </div>
          <div className="wind column-border">
            <div className="title">Wind</div>
            <div className="direction"></div>
            <div className="speed">{Wind}</div>
          </div>
        </div>
      )
    })
  }

  renderChart () {
    const data = {
      datasets : [{
        type: 'line',
        data: [1,3,3,4,2]
      }]
    };

    return (
      <Line
        width={500}
        height={100}
        data={data}
      />
    )
  }
  onClose() {
    this.props.history.push('/');
  }
}

function mapStateToProps({forecasts}) {
  return {forecasts};
}

export default connect(mapStateToProps)(PeriodForecast);