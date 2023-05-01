let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

// Create the for...in loop to iterate through the object properties
for (let property in statistics) {
  // Check if the property starts with the letter 'r' or if the value is an odd number
  if (property[0]=='r' || statistic[property] % 2 !== 0) {
    // Print the value of the property
    console.log(statistic[property]);
  }
}
