export const icons = {
  sunny: {
    class: 'ion-ios-sunny-outline',
    background: ''
  },
  mostlycloudy: {
    class: 'ion-ios-partlysunny-outline',
    background:''
  },
  cloudy: {
    class: 'ion-ios-cloudy-outline',
    background:''
  },
  rainy: {
    class: 'ion-ios-rainy-outline',
    background:''
  },
  thunderstorm: {
    class: 'ion-ios-thunderstorm-outline',
    background:''
  },
  snowy: {
    class: 'ion-ios-snowy',
    background:''
  },
  thermomether: {
    class: 'ion-thermometer',
    background:''
  },
  nightclear: {
    class: 'ion-ios-moon-outline',
    background:''
  },
  nightcloudy: {
    class: 'ion-ios-cloudy-night-outline',
    background:''
  }
};

export function  getIconData(iconIndex) {
  switch (iconIndex) {
    case 1:
    case 2:
      return icons.sunny;
    case 3:
    case 4:
    case 5:
    case 6:
      return icons.mostlycloudy;
    case 7:
    case 8:
    case 11:
      return icons.cloudy;
    case 12:
    case 13:
    case 14:
    case 18:
    case 39:
    case 40:
    case 41:
    case 42:
      return icons.rainy;
    case 15:
    case 16:
    case 17:
      return icons.thunderstorm;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 29:
      return icons.snowy;
    case 30:
    case 31:
    case 43:
    case 44:
      return icons.thermomether;
    case 33:
    case 34:
    case 35:
      return icons.nightclear;
    case 36:
    case 38:
      return icons.nightcloudy;
  }
}