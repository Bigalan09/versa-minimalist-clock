import {
  me as device
} from "device";

let months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "June",
  "July",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec.",

  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

let days = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thurs",
  "Fri",
  "Sat",

  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

// Workaround for Fitbit Ionic running Fitbit OS 1.0.
if (!device.screen) device.screen = {
  width: 348,
  height: 250
};

// Add zero in front of numbers < 10.
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Convert a number to a special monospace number.
export function monoDigits(digits) {
  var ret = "";
  var str = digits.toString();
  for (var index = 0; index < str.length; index++) {
    var num = str.charAt(index);
    ret = ret.concat(hex2a("0x1" + num));
  }
  return ret;
}

// Hex to string.
export function hex2a(hex) {
  var str = '';
  for (var index = 0; index < hex.length; index += 2) {
    var val = parseInt(hex.substr(index, 2), 16);
    if (val) str += String.fromCharCode(val);
  }
  return str.toString();
}

export function getDevice() {
  return device;
}

// Is the app running on Fitbit Ionic?
export function isIonic() {
  return (device.screen.width === 348);
}

export function toMonth(month, len = "short") {
  if (len == "long") {
    month += 12;
  }
  return months[month];
}

export function toDay(day, len = "short") {
  day = day % 7;
  if (len == "long") {
    day += 7;
  }
  return days[day];
}

export function expandDay(day) {
  return days[days.indexOf(day) + 7];
}