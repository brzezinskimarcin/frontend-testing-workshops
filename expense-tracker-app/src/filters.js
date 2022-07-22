import Vue from 'vue';

const floatFormatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat([], {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export function floatFilter(value) {
  if (value === undefined || value === null) {
    return '';
  }

  return floatFormatter.format(value);
}

export function percentFilter(value) {
  const decimal = floatFilter(value);
  return decimal ? `${decimal}%` : '';
}

export function dateFilter(value) {
  if (value === undefined || value === null) {
    return '';
  }
  const date = new Date(value);
  const formattedDate = dateFormatter.format(date);
  const formattedHour = timeFormatter.format(date);

  return `${formattedDate} ${formattedHour}`;
}

Vue.filter('float', floatFilter);
Vue.filter('percent', percentFilter);
Vue.filter('date', dateFilter);
