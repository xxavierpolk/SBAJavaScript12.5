// A. Q + A
// 1. How do we assign a value to a variable?

// ANSWER: We assign a variable by using any of these three words: let, const, and var. These keywords introduce variables that store data and acts as a reference for later use.

// 2. How do we change the value of a variable?

// ANSWER: We change the value by reassigning it with an assignment operator.

// 3. How do we assign an existing variable to a new variable?

// ANSWER: If there is an existing variable declared with let or var, you can declare that variable again with a different value. This can happen both in the global and local scope.

// 4. Remind me, what are declare, assign, and define?

// ANSWER: To declare means to introduce a variable to the program. To assign means to use an assignment operator to provide a value to that variable. And a defined variable is when it has been both declared and assigned a value.

// 5. What is pseudocoding and why should you do it?

// ANSWER: Pseudocoding is the coding that outlines the logic and structure of your program in conjuction to your JS syntax.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// ANSWER: I personally like to plan as much as I can and then code. But I would say 50% to both. Because it takes an equal amount of effort to plan and research as it does to code and test what's planned and researched.



// B. STRINGS
// For all other questions that involve writing code, you can solve them via the following instructions.

// 1. Create a variable called firstVariable
// 2. Assign it the value of the string "Hello World"

let firstVariable = "Hello World";

// 3. Change the value of this variable to some number

firstVariable = 417;

// 4. Store the value of firstVariablein a new variable called secondVariable

let secondVariable = firstVariable;

// 5. Change the value of secondVariableto any string.

secondVariable = "Here we have a string"

// 6. What is the value of firstVariable?

console.log(firstVariable) // 417

// 7. Create a variable called yourName and set it equal to your name as a string.    Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

let yourName = "Xxavier"
let greeting1 = "Hello, my name is " + yourName
// console.log(greeting1)

let greeting2 = "Hello, my name is".concat(" ", yourName)
// console.log(greeting2)

let greeting3 = `Hello, my name is ${yourName}`
console.log(greeting3)

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


//   D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cat"
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow"){
    console.log("mooooo")
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
else{
    console.log("Hey! You're not a cow")
}
// Commit


// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
let personAge = 9
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let minAge = 16
if (personAge >= minAge){
    console.log("Here are the keys")
} else { 
    console.log("Sorry, you're too young.")
}