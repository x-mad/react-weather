export function asCelsius (value) {
  return `${value}°`;
}

export function roundTemperature(value) {
  return asCelsius(Math.round(value));
}

export function formatDate (date, format) {
  return new Date(date).toLocaleDateString('en', format);
  //return new Date(date).toLocaleDateString(LocalStorage.getSelectedLang(), format);
}

export function dayName (date) {
  return formatDate(date, {weekday:'short'})
}

export function shortDate (date) {
  return formatDate(date, {day:'2-digit', month: '2-digit'})
}

export function formatTime (date) {
  return new Date(date).toLocaleTimeString('en-us', {hour:'2-digit', minute: '2-digit', hour12: false})
}