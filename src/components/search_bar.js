import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import {withRouter} from 'react-router-dom';
import {fetchCitiesAutocomplete}from '../actions';
import classNames from 'classnames';

class SearchBar extends Component {
  constructor() {
    super();
    
    this.state = {
      isLoading: false,
      query: "",
      cities:[]
    }
  }
  
  render() {
    const {query, cities} = this.state;
    const cls = classNames({
      'autocomplete' : true,
      'visible' : !!query.length,
      'no-results': !cities.length
    });

    return (
      <div className="search-wrap">
        <div className="search">
          <div className="inner">
            <div className="back-button" onClick={() => this.showMain()}>
              <Ionicon icon="ion-ios-arrow-back" fontSize="20" color="lightgray"/>
            </div>
            <input type="text" placeholder="Enter location" onChange={this.onInputChange.bind(this)}/>
          </div>

        </div>
          <div className={cls}>
            {this.renderAutocompletedCities()}
            <div className="no-results">No results</div>
          </div>
      </div>
    )
  }

  renderAutocompletedCities() {
    const {cities}= this.state;

    return cities.map(city => {
      return(
        <div key={city.Key} className="autocomplete-item-wrap" onClick={()=>{this.props.onSetCurrentCity(city)}}>
          <div className="autocomplete-item">
            {city.LocalizedName}
          </div>
        </div>
      )
    })
  }

  showMain(){
    this.props.history.push('/');
  }

  onInputChange(e) {
    const query = e.target.value;

    if (query.length) {
      fetchCitiesAutocomplete(query).payload.then(({data: cities})=> {
        this.setState({cities, query});
      }).catch(e => {
        this.setState({cities:[], query});
      })
    } else {
      this.setState({cities: [], query});
    }


  }
}

export default withRouter(SearchBar);