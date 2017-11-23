import React, {Component} from 'react';
import {connect} from 'react-redux';
import { roundTemperature } from '../helpers';
import Ionicon from 'react-ionicons';

class Details extends Component {
  render() {
    return (
      <div className="details bg-white">
        <div className="block-title">Details</div>
        <table width="100%">
          <tbody>
          <tr>
            {this.renderChunk('Wind', 'ion-leaf')}
            {this.renderChunk('RealFeel', 'ion-thermometer', 'Real Feel', roundTemperature)}
          </tr>
          <tr>
            {this.renderChunk('UVIndex', 'ion-android-sunny', 'UV Index')}
            {this.renderChunk('Pressure', 'ion-speedometer')}
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

  renderChunk(chunk, icon, title, valueDecorator) {
    const {currentForecast} = this.props;
    const value = valueDecorator ? valueDecorator(currentForecast[chunk]) : currentForecast[chunk];

    return (
      <td>
        <div className="text">
          <div className="title">{title || chunk}</div>
          <div className="value">{value}</div>
        </div>
        <div className="icon">
            <Ionicon icon={icon} fontSize="30" color="#bbb"/>
        </div>
      </td>
    )
  }
}

function mapStateToProps({currentForecast}) {
  return {currentForecast};
}

export default connect(mapStateToProps)(Details);