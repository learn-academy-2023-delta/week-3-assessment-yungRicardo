// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibLength3 = 0

describe("fibonacci", () => {
  it("returns an array of fibonacci numbers", () => {
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    expect(fibonacci(fibLength3)).toEqual("Please enter a number greater than 2")
  })
})

// b) Create the function that makes the test pass.

const fibonacci = (num) => {
  const fibo = []
  let n1 = 0, n2 = 1
  if (num > 2) {
    for(let i=0; i<num; i++){
      fibo.push(n2)
      nextNum = n1 + n2
      n1 = n2
      n2 = nextNum
    }
    return fibo
  } 
  else if (num <= 2) {
    return "Please enter a number greater than 2"
  }
}

// Pseudo code:

// Create a function that takes a number as an argument and console outs an array with values
// Declare an empty array to store fibonacci number
// Make variables n1 and n2, store values 0 and 1 
// Check if argument passed in function is greater than 2
// Use for loop to push new values into empty array
// Else return a string




// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("logMinutes", () => {
  it("returns an array of minutes sorted in numerical order", () => {
    expect(logMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(logMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// b) Create the function that makes the test pass.

const logMinutes = (obj) => {
  let arr = []
  for(key in obj){
    arr.push(obj[key])
    arr.sort(function(a, b){
      return a-b;
    }
  )}
  return arr
}
// console.log(logMinutes(studyMinutesWeek2))

// Pseudo code:

// Declare a function to return an array of minutes sorted numerically
// Pass an object as argument to extract data
// For loop through the object and access the keys
// Will iterate through keys and push values into a empty arrray
// Return array with minutes sorted in order

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("accumlatingSum", () => {
  it("returns an array with values accumlating in sum", () => {
    expect(accumulatingSum(accountTransactions1)).toEqual([100, -17, -23, -9])
    expect(accumulatingSum(accountTransactions2)).toEqual([250, -89, 100, -96])
    expect(accumulatingSum(accountTransactions3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.
const accumulatingSum = (arr) => {

  let initialValue = arr[0] // 100
  for(let i=1; i<=arr; i++){ // begins iteration at index 1 => index 2
    arr[i] += initialValue // arr[1] = (-17 + 100 = 83) => (-23 + 83 = 60) => (-9 + 60 = 51)
    initialValue = arr[i] // initialValue = , initialValue = 60, initialValue = 51 
  }  
  return arr
}

// Pseudo code:

// Create function to return a accumulating sum of the values in the array

// Create a variable and store the initial value being index 1 in the array

// Iterate through accountTransactions starting index 1 to keep index 0 intact

// Iteration begins adding each element with index 0 (initialValue) then right after
// after variable (initialValue) updates to starting index

// Return array


