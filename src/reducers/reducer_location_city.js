import {SET_LOCATION_CITY} from '../actions'

const DEFAULT_CITY =  {
  "Version": 1,
  "Key": "324505",
  "Type": "City",
  "Rank": 20,
  "LocalizedName": "Kyiv",
  "Country": {
    "ID": "UA",
    "LocalizedName": "Ukraine"
  },
  "AdministrativeArea": {
    "ID": "30",
    "LocalizedName": "Kiev City"
  }
};

export default function (state = DEFAULT_CITY, action) {
  switch (action.type) {
    case SET_LOCATION_CITY : 
      return action.payload;
    default: 
      return state;
  }
}