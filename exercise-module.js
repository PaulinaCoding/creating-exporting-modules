var list =[2,2,8,4,5,3];
function addNumber(number){
    list.push(number);   
}

function sortedData(){
    var sorted = list.sort(function sortingBackwards (a,b) {
        return b - a;
    });
    return sorted;
}

function dataToString(){
    return sortedData().toString();
    
}
exports.sortedData = sortedData;
exports.addNumber = addNumber;
exports.dataToString = dataToString;



// 1. Create a list and a function that adds a number to that list. The list can't be accessed from other modules, only the function can.

// 2. Create a function that returns the contents of the list, sorted.

