import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import {withRouter} from 'react-router-dom';

class SettingsBar extends Component {
  render() {
    return (
      <div className="settings-bar">
        <div className="plus"></div>
        <div className="settings-btn" onClick={() => this.showTopCities()}>
          <Ionicon icon="ion-android-more-vertical" fontSize="40px" color="#555"/>
        </div>
      </div>
    )
  }
  
  showTopCities() {
    this.props.history.push('/cities_list');
  }
}

export default withRouter(SettingsBar);