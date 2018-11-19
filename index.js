// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
    newer = arr.slice(0,2);
    return newer;
}

const returnLastTwoDrivers = (arr) => {
  newer = arr.slice(2,4);
  return newer;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(arr, cb) {
    return cb(arr);
}
