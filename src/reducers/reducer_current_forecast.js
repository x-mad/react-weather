import { FETCH_CURRENT_FORECAST} from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_FORECAST:
      return action.payload.data;
    default: 
      return state;
  }
}