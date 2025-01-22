// // Array creation
// const fruits = ['apple','banana','cherry'];
// console.log(fruits)

// // Accessing Elements
// console.log(fruits[0])
// console.log(fruits[2])

// // Adding Elements
// fruits.push("orange");
// console.log(fruits);

// // Removing Elements
// fruits.pop();  // Removes the last element
// console.log(fruits);

// // Lenghth of an Array
// console.log(fruits.length); // Number of Elements

// PRACTICE
// const languages = ['python','js','c++']
// console.log(languages[0])
// console.log(languages[2])
// languages.push("html")
// console.log(languages)
// languages.pop()
// console.log(languages)

// OBJECT CREATION
// const person = {
//     name: "John",
//     age: 25,
//     isStudent: true
// };
// console.log(person)

// // Accessing Properties
// console.log(person.name);
// console.log(person["age"]);

// // Updating Properties
// person.age = 26;
// console.log(person.age);

// // Adding New Properties
// person.country = "India"
// console.log(person);

// PRACTICE
// const book = {
//     title: "YoMAMA",
//     author: "your mom",
//     yearPublished: 1900
// };

// console.log(book.title)
// console.log(book.author)

// book.yearPublished = 1899

// book.genre = "KoMeDy"

// console.log(book)

// LOOPS WITH ARRAYS
// const fruits = ['apple','banana','cherry']

// for (let i = 0; i < fruits.length; i++) {  // For Loop
//     console.log(fruits[i])
// }

// for (const fruit of fruits) { // For ... of Loop
//     console.log(fruit);
// }
// Practice
// const movies = ['dhoom1','dhoom2','dhoom3']

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i])
// }

// for (const movie of movies) {
//     console.log(movie);
// }

// OBJECTS WITH LOOPS

// const person = {
//     name: "John",
//     age: 30,
//     country: "USA"
// };

// for (const key in person) {
//     console.log(`${key}: ${person[key]}`)
// }
// Practice
// const car = {
//     make: "Honda",
//     model: "City",
//     year: 2015
// };

// for (const key in car) {
//     console.log(`${key}: ${car[key]}`)
// }

// COMBINING ARRAYS AND OBJECTS

// const books = [
//     {title: "BookA", author: "Author1"},
//     {title: "BookB", author: "Author2"},
//     {title: "BookC", author: "Author3"}
// ]

// for (const book of books) {
//     console.log(`Title: ${book.title}, Author: ${book.author}`)
// }

// PRACTICE
// const langs = [
//     {name: "Python", difficulty: "Easy"},
//     {name: "JS", difficulty: "dk"},
//     {name: "C#", difficulty: "def dk"}
// ]
// for (const lang of langs) {
//     console.log(`Name: ${lang.name}, Difficulty: ${lang.difficulty}`)
// }

// FUNCTIONS
// function greet(name) { // basic function defination
//     console.log(`Hello ${name}`);
// }
// greet("Alice");

// // Returning Values
// function add(a, b) {
//     return a + b;
// }
// const result = add(5,3);
// console.log(result)

// Practice
// function multiply(a,b) {
//     return a*b;
// }
// const result = multiply(5,3)
// console.log(result)

// ARROW FUNCTIONS

// const greet = (name) => {
//     console.log(`Hello, ${name}`);
// }
// greet('bob');

// const add = (a, b) => a+b
//     console.log(add(2,4))

// Practice
// const multiply = (a,b) => a*b;
// console.log(multiply(4,5))

// const square = (a) => a**2;
// console.log(square(4))

// FUNCTIONS WITH ARRAY

// Find Even Numbers

// const numbers = [1,2,3,4,5,6,7];

// const isEven = (num) => num % 2 === 0;

// for (const num of numbers) {
//     if (isEven(num)) {
//         console.log(`${num} is even`);
//     }
// }

// Practice
// Find Odd Numbers
// const numbers = [10,15,20,25,30]

// const filterOddNumbers = (num) => num % 2 === 1;
// for (const num of numbers) {
//     if (filterOddNumbers(num)) {
//         console.log(`${num} is odd`)
//     }
// }

// JS SCOPE
// Global Scope

// let globalVar = "I am global";

// function showGlobal() {
//     console.log(globalVar) // accessible
// }

// showGlobal();
// console.log(globalVar); //accessible

// // Function Scope

// function myFunction() {
//     let localVar = "I am local";
//     console.log(localVar); // accessible
// }

// myFunction();
// console.log(localVar) // not accessible

// // Block Scope

// {
//     let blockVar = "I exist only here"
//     console.log(blockVar); // accessible
// }
// console.log(blockVar) // not accessble

// Practice
// let counter = 0
// function incrementCounter(a) {
//     counter += a
//     console.log(counter);
//     const message = ("testmessage")
//     console.log(message)
// }
// incrementCounter(5)

// CLOSURES
// A closure is when a function "remembers" variables from its outer scope, even after the outer function has finished executing.

// function outerFunction() {
//     let OuterVar = "I am from the outer scope";

//     function innerFunction() {
//         console.log(OuterVar); // accessible due to closure
//     }

//     return innerFunction
// }

// const myClosure = outerFunction();
// myClosure();

// Practice

// Create a createMultiplier function that takes a number x and returns another function. The returned function should multiply its input by x.
// function createMultiplier(x) {
//     function innerMultipler(y) {
//         const result = (x*y)
//         return result
        
//     }
//     return innerMultipler
// }
// const func = createMultiplier(2)
// console.log(func(5));

// Use closures to create a createGreeter function that takes a name and returns a function that greets the name.
// function createGreeter(name) {
//     function greeting() {
//         const greet = `Hello, ${name}`
//         return greet
//     }
//     return greeting
// }
// const greetJohn = createGreeter("John");
// console.log(greetJohn());

// ASYNCHRONOUS JAVASCRIPT

// setTimeout and setInterval
// console.log("Start")

// setTimeout(() => {   // run block of code after delay
//     console.log("This Runs after 2 seconds")
// }, 2000);

// setInterval(() => {
//     console.log("This runs every second") // run block of code at intervals
// }, 1000);

// console.log("End")

// Promises
// const myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Promise resolved successfully!")
//     } else {
//         reject("Promise failed")
//     }
// });

// myPromise
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error))

// Pizza Delivery Example
// const orderPizza = new Promise((resolve, reject) => {
//     let isRestaurantOpen = false;

//     if (isRestaurantOpen) {
//         resolve("Pizza is delivered");
//     } else {
//         reject("Restaurant is closed")
//     }
// });

// orderPizza
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))

// Practice
// function delayedMessage() {
//     setTimeout(() => {
//         console.log("Hello after 3 seconds")
//     }, 3000);
// }
// delayedMessage()

// function checkNumber(num) {
//     const numChecker = new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve(`${num} is an even number`)
//         } else {
//             reject(`${num} is an odd number`)
//         }
//     })
//     return numChecker
// }

// checkNumber(3)
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error))

// ASYNC/AWAIT
// const fetchData = async () => {
//     try {
//         const response = await new Promise((resolve) => 
//             setTimeout(() => resolve("Data Fetched"), 2000)
//         );
//         console.log(response);
//     } catch (error) {
//         console.error("Error:",error)
//     }
// };

// fetchData()

// Practice
const delayedMessage = async() => {
    try{
        const response = await new Promise ((resolve) => 
        setTimeout(() => resolve("Welcome to async"), 2000)
    );
    console.log(response);
    } catch (error) {
        console.error("Error:",error)
    }
};

delayedMessage()