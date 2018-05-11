var exerciseModule = require("./exercise-module");

exerciseModule.addNumber(3);
exerciseModule.addNumber(3);
exerciseModule.addNumber(5);
exerciseModule.addNumber(4);
exerciseModule.addNumber(8);

var data = exerciseModule.sortedData();

var dataString = exerciseModule.dataToString();

console.log(dataString);
console.log(data);
