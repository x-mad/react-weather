import React, {Component} from 'react';
import SearchBar from './search_bar';
import {fetchTopCities, setCurrentCity} from '../actions';
import {connect} from 'react-redux';

class CitiesList extends Component {
  render() {

    if (!this.props.topCities) {
      return <div></div>
    }

    return (
      <div className="top-cities">
        <SearchBar onSetCurrentCity={this.setCurrentCity.bind(this)}/>
        <div className="list">
          <div className="title">Popular cities</div>
          {this.renderCities()}
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    this.props.fetchTopCities();
  }

  renderCities() {
    const {locationCity, topCities} = this.props;
    const cities = [locationCity, ...topCities];

    return cities.map((city, index)=>{
      const cls = (index === 0 ? 'geolocation-city' : '') + ' city';
      return (
        <div className={cls}
             key={city.Key}
             onClick={()=> this.setCurrentCity(city)}
        >{city.LocalizedName}</div>
      )
    });
  }
  setCurrentCity(city) {
    this.props.setCurrentCity(city);
    this.props.history.push('/');
  }
}

function mapStateToProps({topCities,locationCity}){
  return {topCities,locationCity};
}

export default connect(mapStateToProps, {fetchTopCities, setCurrentCity})(CitiesList);