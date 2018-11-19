// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {

  return arr.slice(0,2)


}

const returnLastTwoDrivers = function (arr) {

  return arr.slice(-2)


}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (multipler) {
  return function farer(fare) {
    return multipler * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function fetchSpecifiedDrivers (drivers, funcs) {
  return  funcs(drivers)
}
