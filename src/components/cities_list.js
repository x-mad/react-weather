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
        <SearchBar/>
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
    const {topCities} = this.props;

    return topCities.map((city)=>{
      return (
        <div className="city"
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

function mapStateToProps({topCities,currentCity}){
  return {topCities,currentCity};
}

export default connect(mapStateToProps, {fetchTopCities, setCurrentCity})(CitiesList);