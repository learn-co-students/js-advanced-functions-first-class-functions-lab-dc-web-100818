// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let firstTwo = drivers.slice(0, 2);
  return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
  let lastTwo = drivers.slice(-2);
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function multiplier(int) {
    return total = fare * int;
  }
}

function fareDoubler(fare) {
  const newFare = createFareMultiplier(fare)(2);
  return newFare;
}

function fareTripler(fare) {
  const newFare = createFareMultiplier(fare)(3);
  return newFare;
}

function fetchSpecifiedDrivers(drivers, func) {
  if (func == returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if (func == returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
}
