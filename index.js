const returnFirstTwoDrivers = function (drivers) {
  let newArr = drivers.slice(0,2)
  return newArr
}

const returnLastTwoDrivers = function(drivers) {
  let newArr = drivers.slice(-2)
  return newArr
}


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num){
  return function (fare) {
    return num * fare
  }
}


const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => createFareMultiplier(3)(fare)

const fetchSpecifiedDrivers = function (drivers, funn) {
  return funn(drivers)
}
