// Loops

// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
console.log('Count even numbers from 0')
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0
console.log('Count down from 10')
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
console.log('Odd/Even label from 10')
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.forEach((c)=>{
    if (c % 2 ===0) {
        console.log(`${c} even`);
    } else {
        console.log(`${c} odd`)
    }
})

// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
console.log('Count to 10')
for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// 5. Look closely at the code below
const isOdd = (num) =>{
    return num % 2 === 0
}

if(isOdd(2)){
    console.log('is Odd')
} else {
    console.log('is Even')
}

// 6. what will this log?
 //It will return the log "isOdd"


// 7. what is the value of isOdd(2) 
// The value is 2


// 8. Fix the isOdd function to make this work
console.log('Returns even/odd')
const isEven = (num) =>{
    if(num % 2 === 0){
        return 'is Even'
    }else{
        return 'is Odd'
    }
}

let x = isEven(2)
console.log(x)

////////////////

// Functions

// 1. Write a function that takes a positive number and prints all even numbers from 0 – number
console.log('Print all positive numbers in a range 0-27')
for(let i = 0; i <= 27; i += 2){
    console.log(i)
}

// 2. Write a function that takes an array and returns the sum of all the numbers
console.log('Sum of an array of numbers')
function getSum(numArray){
    let sum = 0;
    for(let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    console.log(sum)
}
getSum([2, 5, 6, 7, 9]);

// 3. Write a function that returns the number of vowels in string
console.log('Count number of vowels in a string')
function countVowels(str) {
    return str.match(/[aeiou]/gi).length;
}

console.log(countVowels('The quick brown fox jumped over the lazy dog'));

// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
function math(opp, num1, num2) {

}

// Fist thing, operator as a string, two numbers, 


// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.


// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"


// 7. write a function that takes an array that removes the first and last items and return that new array


// 8. write a function that swaps the last and first items of an array 


// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument


// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.


// 11. Write a function that prints all  numbers from 0 – 10