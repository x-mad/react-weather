import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import {withRouter} from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <div className="inner">
          <div className="back-button" onClick={() => this.showMain()}>
            <Ionicon icon="ion-ios-arrow-back" fontSize="20" color="lightgray"/>
          </div>
          <input type="text" placeholder="Enter location"/>
        </div>
      </div>
    )
  }

  showMain(){
    this.props.history.push('/');
  }
}

export default withRouter(SearchBar);