import {SET_CURRENT_CITY} from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_CITY : 
      return action.payload;
    default: 
      return state;
  }
}