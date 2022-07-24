import Vue from 'vue';

const floatFormatter = new Intl.NumberFormat('pl-PL', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat('pl-PL', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat('pl-PL', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export const filters = {
  float: (value) => {
    if (value === undefined || value === null) {
      return '';
    }

    return floatFormatter.format(value);
  },

  percent: (value) => {
    const decimal = filters.float(value);
    return decimal ? `${decimal}%` : '';
  },

  date: (value) => {
    if (value === undefined || value === null) {
      return '';
    }
    const date = new Date(value);
    const formattedDate = dateFormatter.format(date);
    const formattedHour = timeFormatter.format(date);

    return `${formattedDate} ${formattedHour}`;
  },
};

Object.entries(filters).forEach(([key, filter]) => {
  Vue.filter(key, filter);
});
