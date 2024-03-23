function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
  }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 const createFareMultiplier = function(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }; 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFunction) {
  return selectFunction(drivers);
}