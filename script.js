const hourField = document.getElementById('hour');
const minuteField = document.getElementById('minute');
const output = document.getElementById('time');

const convertTimeToWords = (hours, minutes) => {
  output.innerHTML = getTimeText(hours, minutes);
};

const getTimeText = (hours, minutes) => {
  if (
    !(hours <= 12 && hours >= 1) ||
    !(minutes <= 59 && minutes >= 0) ||
    !Number.isInteger(hours) ||
    !Number.isInteger(minutes)
  ) {
    return 'Incomputable!';
  }

  const hoursInTwelve = twentyFourToTwelveHour(hours);
  const minutesWithoutZero = removeLeadingZero(minutes);

  switch (minutes) {
    case '0':
      return `${timeWords[hoursInTwelve]} O\`Clock`;
    case '15':
      return `Quarter past ${timeWords[hoursInTwelve]}`;
    case '30':
      return `Half past ${timeWords[hoursInTwelve]}`;
    case '45':
      return `Quarter to ${timeWords[hoursInTwelve]}`;
    default:
      const minutesBounded = minutesWithoutZero > 30 ? 60 - minutes : minutes;
      const minutesText = getMinutesPluralized(minutesWithoutZero);
      const transitionWord = minutes > 30 ? ' to ' : ' past ';
      return `${timeWords[minutesBounded]}${minutesText}${transitionWord}${timeWords[hoursInTwelve]}`;
  }
};

const twentyFourToTwelveHour = (hour) => (hour % 12) + 1;
const removeLeadingZero = (val) => (val == 00 ? '0' : val);
const getMinutesPluralized = (min) => (min > 1 ? ' minutes ' : ' minute ');

const timeWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty-one',
  22: 'twenty-two',
  23: 'twenty-three',
  24: 'twenty-four',
  25: 'twenty-five',
  26: 'twenty-six',
  27: 'twenty-seven',
  28: 'twenty-eight',
  29: 'twenty-nine',
  30: 'thirty',
};

hour.addEventListener('input', function (e) {
  hour = hourField.value;
  min = minuteField.value;
  convertTimeToWords(hour, min);
});

minute.addEventListener('input', function (e) {
  hour = hourField.value;
  min = minuteField.value;
  convertTimeToWords(hour, min);
});

minute.addEventListener('load', function (e) {
  hour = hourField.value;
  min = minuteField.value;
  convertTimeToWords(hour, min);
});
