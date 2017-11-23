import {FETCH_TOP_CITIES} from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_TOP_CITIES :
      return action.payload.data;
    default:
      return state;
  }
}