import axios from 'axios';

export const FETCH_CURRENT_FORECAST = 'fetch_current_forecast';
export const FETCH_FORECASTS = 'fetch_5days_forecast';
export const FETCH_HOURLY_FORECAST = 'fetch_hourly_forecast';
export const FETCH_TOP_CITIES = 'fetch_popular_cities';
// export const FETCH_CITY = 'fetch_city';
export const SET_CURRENT_CITY = 'set_current_city';
export const FETCH_ALL_DATA = 'fetch_all_data';
export const FETCH_ALL_DATA_BEGIN = 'fetch_all_data_begin';
export const FETCH_ALL_DATA_SUCCESS = 'fetch_all_data_success';
export const FETCH_ALL_DATA_ERROR = 'fetch_all_data_error';

const ROOT_URL = 'http://dataservice.accuweather.com';
const API_KEY = 'apikey=engGAPA64fX30ZJpmBAEgymHdKNUhnYs';
const METRIC = 'metric=true';
const DETAILS = 'details=true';

export function fetchAllData(cityId) {
  return dispatch => {

    dispatch({type: FETCH_ALL_DATA_BEGIN, payload: true});

    Promise.all([
      dispatch(fetchHourlyForecast(cityId)),
      dispatch(fetch5DaysForecast(cityId)),
      dispatch(fetchCurrentForecast(cityId))
    ]).then(() => {
      dispatch({type: FETCH_ALL_DATA_SUCCESS, payload: false});
    }).catch(() => {
      dispatch({type: FETCH_ALL_DATA_ERROR, payload: false});
    })
  }
}


export function fetchCurrentForecast (cityId) {
  const request = axios.get(`${ROOT_URL}/currentconditions/v1/${cityId}?${API_KEY}&${DETAILS}`);

  return {
    type: FETCH_CURRENT_FORECAST,
    payload: request
  }
}

export function fetch5DaysForecast(cityId) {
  const request = axios.get(`${ROOT_URL}/forecasts/v1/daily/5day/${cityId}?${API_KEY}&${METRIC}&${DETAILS}`);

  return {
    type: FETCH_FORECASTS,
    payload: request
  }
}

export function setCurrentCity (city) {
  return {
    type: SET_CURRENT_CITY,
    payload: city
  }
}

// export function fetchCity() {
//   const request = axios..get(`${ROOT_URL}/forecasts/v1/daily/5day/${cityId}?${API_KEY}&${METRIC}&${DETAILS}`);
//   return {
//     type: FETCH_CITY,
//     payload: request
//   }
// }

export function fetchTopCities() {
  const request = axios.get(`${ROOT_URL}/locations/v1/topcities/50?${API_KEY}`);

  return {
    type: FETCH_TOP_CITIES,
    payload: request
  }
}

export function fetchHourlyForecast(cityId) {
  const request = axios.get(`${ROOT_URL}/forecasts/v1/hourly/12hour/${cityId}?${API_KEY}&${METRIC}&${DETAILS}`);

  return {
    type:FETCH_HOURLY_FORECAST,
    payload: request
  }
}