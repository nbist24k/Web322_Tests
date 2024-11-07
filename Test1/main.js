//Object-Oriented JavaScript Questions:

// Question1:
// Write a JavaScript function using Object Literal Notation to create a 'Car' object, with properties.
const Car = {
  make: "Tesla",
  model: "Model S",
  year: 2021,
  color: "Red",
};

// Question2:
// Method Implementation with this: Implement a method in the 'Car' object that uses "this".
const Car = {
  make: "Tesla",
  model: "Model S",
  year: 2021,
  color: "Red",

  //Method to get car details
  getDetails: function () {
    return `${this.year} ${this.make} ${this.model}, Color: ${this.color}`;
  },
};

//Access the properties and methods
console.log(Car.color); // Red
console.log(Car.getDetails()); // 2021 Tesla Model S, Color: Red


// Question3:
// Class and Constructor: Create a 'Rectangle' Class with constructor and methods.
const Rectangle{

  constructor(width, height) {
    this.width = width;
    this.height = height;
}
  
getArea(){
  return this.width * this.height;
}

};

//Creating a new Rectangle object
let rectangle = new Rectangle(5, 10);

//Access the methods to get area;
console.log("Area: ", rectangle.getArea()); // Area: 50



// Question4:
// Private Properties and Accessors: Add private properties with getters and setters in 'Rectangle'.

const Rectangle{
  #width;
#height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
}
  
//Setter 
set width(newWith){
  this.#width = newWidth;
}

set height(newHeight){
  this.#height = newHeight;
}

//Getter
get width(){
  return this.#width;
}

get height(){
  return this.#height;
}

getArea(){
  return this.#width * this.#height;
}

};
let rectangle = new Rectangle(5, 10);

//Modify rectangle properties through setters
rectangle.width = 10;
rectangle.height = 20;

console.log("Updated Area: ", rectangle.getArea()); // Updated Area: 200


//Modern JavaScript Syntax Questions:

// Question1:
// Iterate over an array of your choice, using for...of.
const num = [2, 6, 7, 9, 10];
for (let i of num) {
  console.log(i);  // Log each number
}

// Question2:
// Double each number in an array with forEach().
const num = [2, 6, 7, 9, 10];
num.forEach((i, idx, arr) => {
  arr[idx] = i * 2;
});

//Output
console.log(num)  //[ 4, 12, 14, 18, 20 ]

// Question3:
// Extract the first two elements of an array.
const num = [2, 6, 7, 9, 10];
const firstTwoElements = num.slice(0, 2);
console.log(firstTwoElements); // [2,6]


// Question4:
// Write an arrow function for summing two parameters.
const sum = (a, b) => {
  return a + b;
}

console.log("Sum: ",sum(3,4)) // Sum: 7

//Advanced JavaScript Techniques:

// Question1:
// Create a greeting message function using template literals.

const greet = function (name, age) {
  return `Hi, my name is ${name}. I am ${age}.`;
};

console.log(greet("Nirajan", 20)); // Hi, my name is Nirajan. I am 20.

// Question2:
// Error Handling with try/catch: Implement error handling in a function.
function parseDate(inputString) {
  try {
    let date = new Date(inputString);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format.");
    }

    console.log("Valid date entered: ", date.toString());
    return date;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

console.log(parseDate("2021-10-15")); // 2021-10-15T00:00:00.000Z

console.log(parseDate("Haha")); //2021-10-15T00:00:00.000Z
                                //  null

// Question3:
// Custom Error Throwing: Throw a custom error for non - numeric arguments.
function checkNumber(num) {
  try {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("Invalid num");
    }
    console.log("Valid num: ", num);
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

checkNumber(42); // Valid num: 42
checkNumber("Meow"); // Invalid num
checkNumber(undefined); // Invalid num

// Question4:
// Combine two arrays using spread syntax.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const array = [...arr1, ...arr2];

console.log(array);  //
