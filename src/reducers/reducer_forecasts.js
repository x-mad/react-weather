import {FETCH_FORECASTS} from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_FORECASTS :
      return action.payload.data;
    default:
      return state;
  }
}