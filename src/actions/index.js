import axios from 'axios';

export const FETCH_CURRENT_FORECAST = 'fetch_current_forecast';
export const FETCH_FORECASTS = 'fetch_5days_forecast';
export const FETCH_HOURLY_FORECAST = 'fetch_hourly_forecast';
export const FETCH_TOP_CITIES = 'fetch_popular_cities';
// export const FETCH_CITY = 'fetch_city';
export const SET_CURRENT_CITY = 'set_current_city';

const ROOT_URL = 'http://dataservice.accuweather.com';
const API_KEY = 'apikey=engGAPA64fX30ZJpmBAEgymHdKNUhnYs';
const METRIC = 'metric=true';
const DETAILS = 'details=true';


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
//   return {
//     type: FETCH_HOURLY_FORECAST,
//     payload: {data: [
//       {
//         "DateTime": "2017-11-01T22:00:00+02:00",
//         "EpochDateTime": 1509566400,
//         "WeatherIcon": 7,
//         "IconPhrase": "Cloudy",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": 0.6,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 4.5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 3.7,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 16.7,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 261,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 20.4,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 91,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 38,
//         "RainProbability": 38,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=1&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=1&hbhhour=22&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-01T23:00:00+02:00",
//         "EpochDateTime": 1509570000,
//         "WeatherIcon": 12,
//         "IconPhrase": "Showers",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 4.8,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": -1.4,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 3.9,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 2.7,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 18.5,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 262,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 25.9,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 86,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 42,
//         "RainProbability": 42,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=1&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=1&hbhhour=23&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T00:00:00+02:00",
//         "EpochDateTime": 1509573600,
//         "WeatherIcon": 7,
//         "IconPhrase": "Cloudy",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": -0.5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 4.1,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 2.8,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 20.4,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 263,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 29.6,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 86,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 35,
//         "RainProbability": 35,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=0&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T01:00:00+02:00",
//         "EpochDateTime": 1509577200,
//         "WeatherIcon": 12,
//         "IconPhrase": "Showers",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 5.2,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": -1.3,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 4.1,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 2.6,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 20.4,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 263,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 29.6,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 83,
//         "Visibility": {
//           "Value": 9.7,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 51,
//         "RainProbability": 51,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=1&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T02:00:00+02:00",
//         "EpochDateTime": 1509580800,
//         "WeatherIcon": 7,
//         "IconPhrase": "Cloudy",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 5.3,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": 0,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 4.2,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 2.4,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 20.4,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 263,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 27.8,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 82,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 47,
//         "RainProbability": 47,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=2&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T03:00:00+02:00",
//         "EpochDateTime": 1509584400,
//         "WeatherIcon": 7,
//         "IconPhrase": "Cloudy",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 5.5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": 0,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 4.3,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 2.5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 22.2,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 263,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 27.8,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 81,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 43,
//         "RainProbability": 43,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=3&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T04:00:00+02:00",
//         "EpochDateTime": 1509588000,
//         "WeatherIcon": 7,
//         "IconPhrase": "Cloudy",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 5.6,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": 0.2,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 4.4,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 2.7,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 22.2,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 262,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 27.8,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 82,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 47,
//         "RainProbability": 47,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=4&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T05:00:00+02:00",
//         "EpochDateTime": 1509591600,
//         "WeatherIcon": 12,
//         "IconPhrase": "Showers",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 5.7,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": -0.8,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 4.6,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 3,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 22.2,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 262,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 27.8,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 83,
//         "Visibility": {
//           "Value": 9.7,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 51,
//         "RainProbability": 51,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=5&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T06:00:00+02:00",
//         "EpochDateTime": 1509595200,
//         "WeatherIcon": 7,
//         "IconPhrase": "Cloudy",
//         "IsDaylight": false,
//         "Temperature": {
//           "Value": 6,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": 0.6,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 4.9,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 3.3,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 22.2,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 263,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 27.8,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 83,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 518,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 47,
//         "RainProbability": 47,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 100,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=6&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T07:00:00+02:00",
//         "EpochDateTime": 1509598800,
//         "WeatherIcon": 7,
//         "IconPhrase": "Cloudy",
//         "IsDaylight": true,
//         "Temperature": {
//           "Value": 6.2,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": 0.8,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 5.2,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 3.7,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 22.2,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 263,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 27.8,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 84,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 488,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 47,
//         "RainProbability": 47,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 94,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=7&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T08:00:00+02:00",
//         "EpochDateTime": 1509602400,
//         "WeatherIcon": 12,
//         "IconPhrase": "Showers",
//         "IsDaylight": true,
//         "Temperature": {
//           "Value": 6.5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": 0.2,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 5.5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 4.1,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 22.2,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 264,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 29.6,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 84,
//         "Visibility": {
//           "Value": 9.7,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 488,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 51,
//         "RainProbability": 51,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 94,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=8&unit=c&lang=en-us"
//       },
//       {
//         "DateTime": "2017-11-02T09:00:00+02:00",
//         "EpochDateTime": 1509606000,
//         "WeatherIcon": 7,
//         "IconPhrase": "Cloudy",
//         "IsDaylight": true,
//         "Temperature": {
//           "Value": 7.3,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "RealFeelTemperature": {
//           "Value": 2.2,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "WetBulbTemperature": {
//           "Value": 6.1,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "DewPoint": {
//           "Value": 4.5,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Wind": {
//           "Speed": {
//             "Value": 22.2,
//             "Unit": "km/h",
//             "UnitType": 7
//           },
//           "Direction": {
//             "Degrees": 266,
//             "Localized": "W",
//             "English": "W"
//           }
//         },
//         "WindGust": {
//           "Speed": {
//             "Value": 29.6,
//             "Unit": "km/h",
//             "UnitType": 7
//           }
//         },
//         "RelativeHumidity": 83,
//         "Visibility": {
//           "Value": 16.1,
//           "Unit": "km",
//           "UnitType": 6
//         },
//         "Ceiling": {
//           "Value": 488,
//           "Unit": "m",
//           "UnitType": 5
//         },
//         "UVIndex": 0,
//         "UVIndexText": "Low",
//         "PrecipitationProbability": 47,
//         "RainProbability": 47,
//         "SnowProbability": 0,
//         "IceProbability": 0,
//         "TotalLiquid": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Rain": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "Snow": {
//           "Value": 0,
//           "Unit": "cm",
//           "UnitType": 4
//         },
//         "Ice": {
//           "Value": 0,
//           "Unit": "mm",
//           "UnitType": 3
//         },
//         "CloudCover": 94,
//         "MobileLink": "http://m.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/ua/zhytomyr/326609/hourly-weather-forecast/326609?day=2&hbhhour=9&unit=c&lang=en-us"
//       }
//     ]}
//   }
// }