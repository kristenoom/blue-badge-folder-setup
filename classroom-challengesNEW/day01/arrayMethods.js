/*
    - ARRAY METHODS
*/ 
//Array methods allow us to manipulate elements in an array.
//They allow us to combine, remove, add, update and reverse elements.

//Join Method
/*
    the join method allows us to concatenate all of the elements in an array. it creates and then returns a string using a separator.
    NOTE: a separator can be anything
*/

let sailorMoon = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon.join(" * "));

let sailorMoon = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon.join(" AND "));

//REVERSE METHOD
/*
    the reverse method reverses the order of the elements in an array. It sorts it in descending order.
*/

let numbers = [1, 2, 3];
console.log(numbers.reverse());

let sailorMoon2 = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon2.reverse().join(' - '));

//SPLIT METHOD
/*
    Splits an element into multiple elements and returns an array. It does NOT change the original array.
*/
let str = "Sailor Moon is one of my favorite cartoons.";

//splitting by whitespace
let strWords = str.split(" ")
console.log(strWords);

let strChar = str.split("");
console.log(strChar[8]);

fullName = "Taylor Dickens";
partName = fullName.split(" ", 1);
console.log(partName);

//Replace Method
/*
    used to search for a certain string and replace it with another
    NOTE: .replace("old", "new")
*/

let wrong = "Who's monitor is this?";

let correct = wrong.replace("Who's", "Whose");
console.log(correct);

let str2 = "I have experience with HTML, C#, and javascript. javascript is the one I love the most.";
let strNew = str2.replace(/javascript/gi, "JavaScript");

// g stands for global, i stands for case insensitive

console.log(strNew);

//Splice Method
/*
    We use the splice method when we want to delete a certain element and/or replace them with other elements that we create.
*/

let darkSide = ["Darth Vader", "Darth Plagueis", "Emperor Palpatine", "Count Dooku", "General Grievous", "Kylo Ren", "Darth Maul"];
let removed = darkSide.splice(2, 4, "Darth Sidious", "Darth Tyranous");
console.log(darkSide); //prints new array
console.log(removed);  //prints what was removed from array

//Map Method
/*
    Used to update all the elements in an array based on a function that you create.
    NOTE: This method does NOT create a new array.
*/

let wheelOfTime = [
    { firstName: "Rand", lastName: "al'Thor" },
    { firstName: "Egwene", lastName: "al'Vere" },
    { firstName: "Nynaeve", lastName: "al'Meara" }
];

let charsName = wheelOfTime.map(function (name) {
    return [name.firstName, name.lastName].join(" ");
})

console.log(charsName);     //joins the firstname and lastname of the characters
console.log(wheelOfTime);

//IndexOf Method
/*
    Used to determine where an element is in an array
*/

let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
let alphaB = alphabet.split(" ").indexOf("b");

alphaB += 1;

console.log(alphaB);

//Filter Method
/*
    Used to filter out certain elements. Returns a value of true or false.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter(function (item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(even);

//Every Method
/*
    Use this method if you want to check if every element in an array passes a condition
*/

let ages = [34, 27, 18, 43, 12, 66];
let over18 = ages.every(function (element) {
    return element > 18;
});
console.log(over18);