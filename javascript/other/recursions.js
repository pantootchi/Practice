// Question 1: Sum all numbers

function sumRange(num) {
    if (num === 1) return 1;

    return num + sumRange(num - 1);
}

console.log(sumRange(3));

// Question 2: Power function

function power(base, exponent) {
    if (exponent === 0) return 1;

    return base * power(base, exponent - 1);
}

console.log(power(2, 4), power(2, 0));

// Question 3: Calculate Factorial

function factorial(num) {
    if (num === 1) return 1;

    return num * factorial(num - 1);
}

console.log(factorial(5));

// Question 4: Check all values in an array

function all(array, callback){
	var copy = copy || array.slice(); // array.slice shallow copies array, assigns the first truthy value

	if(copy.length === 0) return true; // if array is empty, return true and exit out of recursive loop

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback); // call itself again and input new array without the deleted element
	} else {
		return false; // since an element didn't return true after passing it into a callback, return false and exit out of recursive loop
	}
}

const allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

// Question 6: Search JS Object

function contains(obj, value) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            return contains(obj[key], value); //terminates loop and the function and calls itself again
        }

        if (obj[key] === value) {
            return true; //return true if it finds the value and terminates loop and the function
        }
    }

    return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

// Question 7: Parse a multi-dimensional array

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); //takes car of inner arrays
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array); //calls function again passing new array that doesn't include the first element
}

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

// Question 8: Sum Squares

function SumSquares(array) {
    if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])) {
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}

	return total;
}



var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

// Question 9: Replicate

function replicate(times, num) {
    if (times <= 0) return [];

    return [num].concat(replicate(times - 1, num));
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []