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
