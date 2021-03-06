import { combineReducers } from 'redux';
import currentForecastReducer from './reducer_current_forecast';
import forecastsReducer  from './reducer_forecasts';
import hourlyForecastReducer from './reducer_hourly_forecast';
import topCitiesReducer from './reducer_top_cities';
import currentCityReducer from './reducer_current_city';
import locationCityReducer from './reducer_location_city';
import fetchStatusReducer from './reducer_fetching_status';

const rootReducer = combineReducers({
  locationCity: locationCityReducer,
  currentCity: currentCityReducer,
  currentForecast : currentForecastReducer,
  forecasts: forecastsReducer,
  hourlyForecast: hourlyForecastReducer,
  topCities: topCitiesReducer,
  isFetching: fetchStatusReducer
});

export default rootReducer;
