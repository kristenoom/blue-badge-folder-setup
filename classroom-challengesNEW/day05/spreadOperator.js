/*
    - SPREAD OPERATOR
        - The spread operator pulls out all elements in an array and gives them
          back to you as a standalone list of elements
        - It takes an iterable object and/or object and expands it into individual
          elements. The spread operator is typically used to make copies of an 
          array/object.
        - Denoted by the ellipsis(...)
*/

let students = ["Jake Greene", "Stephanie Falls"];
// WRONG SYNTAX
// ...students

let copiedStudents = [...students]; //The spread operator is good at making a new copy of that array.
//let copiedStudents = [students]; //NOTE: this is not doing the same thing as a spread operator. Example: [['Jake Greene']]
console.log(copiedStudents, "Line 17"); // ['Jake Greene', 'Stephanie Falls'] Line 17
students.push("Leslie Phillips");
//console.log(copiedStudents);
console.log(students, "Line 20"); // ['Jake Greene', 'Stephanie Falls', 'Leslie Phillips'] Line 20
console.log(copiedStudents, "Line 21"); // ['Jake Greene', 'Stephanie Falls'] Line 21

const persons = [
    {name: "Taylor", age: 300},
    {name: "Ryan", age: 25}
];

const copiedPersons = [...persons];

persons.push({name: "Quinn", age: 24});
//console.log(persons, copiedPersons); // [ { name: 'Taylor', age: 300 }, { name: 'Ryan', age: 25 }, { name: 'Quinn', age: 24 }] [ { name: 'Taylor', age: 300 }, { name: 'Ryan', age: 25 } ]

copiedPersons.push({name: "Mike", age: 24});
console.log(copiedPersons); // [ { name: 'Taylor', age: 300 }, { name: 'Ryan', age: 25 }, { name: 'Mike', age: 24 } ]

//MATH
console.log(Math.min(1, 5, -3));
let prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices)); //NaN
//Math.min() is looking for a number and it is looking at an array
console.log(Math.min(...prices)); //able to read array and print minimum number in the array