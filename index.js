// Code your solution in this file
function findMatching(drivers, name) {
  drivers.filter(function(driver) {
    if (driver === name) {
      return driver;
    }
  })
}
