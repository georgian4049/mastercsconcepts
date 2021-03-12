import Regex from "../utils/Regex";

export const CamelCaseToString = (str) => {
  return str.match(/^[a-z]+|[A-Z][a-z]*/g)
    ? str
        .match(/^[a-z]+|[A-Z][a-z]*/g)
        .map(function (x) {
          return x[0].toUpperCase() + x.substr(1).toLowerCase();
        })
        .join(" ")
    : "";
};

export const simpleUpperString = (str) => {
  var simpleString = str;
  simpleString = simpleString.replace(/[^a-zA-Z0-9]/g, "");
  simpleString = simpleString.trim();
  simpleString = simpleString.toUpperCase();
  return simpleString;
};

export const arrayToString = (array) => {
  return array.join(" , ");
};

export const checkSpecialChar = (value) => {
  if (!Regex.specialCharCheck.test(value)) {
    return true;
  } else {
    return false;
  }
};
export function dateConverter(val) {
  let date = new Date(val);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}
export function datetimeConverter(val) {
  let date = new Date(val);
  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} @ ${date.getHours()}:${date.getMinutes()}`;
}

export function dateWord(val) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = new Date(val);

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function dateTimeFormat(date) {
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  return dateTimeFormat.format(new Date(date));
}

export function monthDifferenceWithCurrentDate(date1) {
  const day1 = new Date(dateTimeFormat(date1));
  const day2 = new Date(dateTimeFormat(new Date()));
  return Math.ceil(
    Math.abs(day1.getTime() - day2.getTime()) / (1000 * 3600 * 24 * 30)
  );
}
