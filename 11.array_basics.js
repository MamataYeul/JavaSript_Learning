const array1 = [1, 3, 4];
const array2 = [5, 6, 7];
console.log("----Merge array by using concat method()----");
const array3 = array1.concat(array2);
console.log(array3);
console.log("----Merge array by using [...spread operator]----");
const arrays3 = [...array1, ...array2]
console.log(arrays3);
console.log("-----------------------------");

var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
arrayOfNumbers.push(99,88);
// arrayOfNumbers.push(88);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
 var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

//arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);

// let otherArray = arrayOfNumbers; // Shallow Copy
let otherArray = [...arrayOfNumbers];
arrayOfNumbers[3]  = 44;
console.table(arrayOfNumbers);
console.table(otherArray);
console.log("-------------------------------------");

var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log("========== Resize array========");
console.log(arrayOfNumbers.length);
arrayOfNumbers.length = 3;
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers);
console.log("========== Resize array========");

