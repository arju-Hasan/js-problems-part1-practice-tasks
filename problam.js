// Write a function to convert temperature from Celsius to Fahrenheit.
// ফারেনহাইট = (সেলসিয়াস × ৯ ÷ ৫) + ৩২

function convert(Celsius){
    let Fahrenheit = ( Celsius * 9 / 5 ) + 32;
    return Fahrenheit;
}
let Fahrenheit = convert(12);
console.log(Fahrenheit)


// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// 
// sample-input: numbers = [5,6,11,12,98, 5]
// 
// find: 5
// 
// output: 2
// 
// 
// sample-input:
// 
// numbers = [5,6,11,12,98, 5]
// 
// find: 25
// 
// output: 0
function countOccurrences(array, target) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            count++;
        }
    }
    return count;
}

let numbers = [5, 6, 11, 12, 5, 55, 98, 5];
let find = 5;
console.log(countOccurrences(numbers, find)); 
