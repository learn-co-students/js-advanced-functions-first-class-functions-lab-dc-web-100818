const returnFirstTwoDrivers = function (drivers) {
  return drivers.filter(function (driver) {
    return driver === drivers[0] || driver === drivers[1];
  })
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.filter(function (driver) {
    return driver === drivers[drivers.length - 1] || driver == drivers[drivers.length - 2];
  })
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function (fare) {return fare * multiplier;}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, driverFunction){
    return driverFunction(drivers);
}
