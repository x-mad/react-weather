import { FETCH_CURRENT_FORECAST, FETCH_HOURLY_FORECAST, FETCH_FORECASTS} from '../actions';

export default store => next => action => {
  switch (action.type) {
    case FETCH_CURRENT_FORECAST:
      action.payload.data = mapCurrentForecastData(action.payload.data[0]);
      break;
    case FETCH_HOURLY_FORECAST:
      action.payload.data = action.payload.data.map(mapHourlyForecastData);
      break;
    case FETCH_FORECASTS:
      action.payload.data = action.payload.data.DailyForecasts.map(mapForecastsData);
      break;
  }
  return next(action);
};

function mapCurrentForecastData (data) {
  const {Temperature, RealFeelTemperature, Wind, Pressure, UVIndex, WeatherText} = data;

  return {
    Temperature: Temperature.Metric.Value,
    RealFeel: RealFeelTemperature.Metric.Value,
    Wind: `${Wind.Speed.Metric.Value}${Wind.Speed.Metric.Unit} ${Wind.Direction.English}`,
    Pressure: Pressure.Metric.Value + Pressure.Metric.Unit,
    UVIndex,
    WeatherText
  }
}


function mapHourlyForecastData(item) {
  const {DateTime, IconPhrase, WeatherIcon, Temperature} = item;

  return {
    DateTime,
    IconPhrase,
    WeatherIcon,
    Temperature: Temperature.Value
  }
}

function mapForecastsData (item) {
  const {Date, Temperature, Day, Night } = item;

  return {
    Date,
    Day: {
      Temperature: Temperature.Maximum.Value,
      ...Day
    },
    Night: {
      Temperature: Temperature.Minimum.Value,
      ...Night
    },
    Wind: Day.Wind.Speed.Value + Day.Wind.Speed.Unit
  }
}