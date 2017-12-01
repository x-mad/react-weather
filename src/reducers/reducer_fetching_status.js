import {FETCH_ALL_DATA_BEGIN, FETCH_ALL_DATA_ERROR, FETCH_ALL_DATA_SUCCESS } from '../actions';

const initialState = {
  isFetching: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_DATA_BEGIN:
    case FETCH_ALL_DATA_SUCCESS:
    case FETCH_ALL_DATA_ERROR:
      return action.payload;
    default:
      return state;
  }
}
