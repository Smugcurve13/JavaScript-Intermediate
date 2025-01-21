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
const movies = ['dhoom1','dhoom2','dhoom3']

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i])
}

for (const movie of movies) {
    console.log(movie);
}