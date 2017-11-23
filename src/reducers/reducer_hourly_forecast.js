import {FETCH_HOURLY_FORECAST} from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_HOURLY_FORECAST :
      return action.payload.data;
    default:
      return state;
  }
}
