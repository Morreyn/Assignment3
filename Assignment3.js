/* 
    TITLE: ASSIGNMENT 3 JAVASCRIPT
    AUTHOR: MISTY MORREYN
    CLASS: COMM644 FALL 2015
*/

// PRACTICE WITH ARRAYS

/* ------------------------------------------------------------------------------
// STEP 1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs"];

console.log(movies[1]); 
------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 2. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

var movies = new Array();
movies[0] = "O Brother Where Art Thou";
movies[1] = "Snatch";
movies[2] = "Boondock Saints";
movies[3] = "Lucky Number Sleven";
movies[4] = "Reservoir Dogs";

console.log(movies[0]);
------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 3. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

var movies = ["O Brother Where Art Thou", "Snatch", "Ocean's Eleven", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs"];

console.log(movies.length);
------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 4. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs"];

delete movies[0];
console.log(movies);
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 5. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 6. Now, use a for-in loop to iterate through the array and display each movie within the console window.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

for (var index in movies) {
    console.log(movies[index]);
}
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 7. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];


for (var index in movies) {
    movies.sort();
    console.log(movies[index]);
}
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 8. Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

console.log("Movies I like: \n\n" + movies[0] + "\n" + movies[1] + "\n" + movies[2] + "\n" + movies[3] + "\n" + movies[4] + "\n" + movies[5] + "\n" + movies[6] + "\n\n" + "Movies I regret watching: \n\n" + leastFavMovies[0] + "\n" + movies[1] + "\n" + movies[2] + "\n" + movies[3]);
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 9. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

movies = movies.concat(leastFavMovies);
console.log(movies.reverse());
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 10. Return just the last item in the array and display it within the console window.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

movies = movies.concat(leastFavMovies);
console.log(movies.pop());
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 11. Remove the previous method and this time return just the first item in the array and display it within the console window.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

movies = movies.concat(leastFavMovies);
console.log(movies.shift());
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

movies = movies.concat(leastFavMovies);
console.log(movies.indexOf("Zombie Strippers") + " " + movies.indexOf("Insidious") + " " + movies.indexOf("Die Hard Dracula"));
movies.splice(7, 9, "The Little Mermaid", "Beauty and the Beast", "The Return of Jafar");

console.log(movies);
 ------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------
// STEP 13. Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 

var employee1 = [];
employee1["employeeid"] = 105;
employee1["name"] = "John Doe";
employee1["title"] = "Web Developer";
employee1["department"] = "IT";
employee1["current"] = true;

var employee2 = [];
employee2["employeeid"] = 220;
employee2["name"] = "Jane Dane";
employee2["title"] = "Graphic Artist";
employee2["department"] = "Art";
employee2["current"] = true;

var employee = [employee1, employee2];
console.log(employee[1]["name"]);
 ------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------
// STEP 14. Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.

for (var index in employee) {
    console.log(employee[index]["name"]);
}
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 15. And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.

var employee1 = [];
employee1["employeeid"] = 105;
employee1["name"] = "John Doe";
employee1["title"] = "Web Developer";
employee1["department"] = "IT";
employee1["current"] = true;

var employee2 = [];
employee2["employeeid"] = 220;
employee2["name"] = "Jane Dane";
employee2["title"] = "Graphic Artist";
employee2["department"] = "Art";
employee2["current"] = true;

var employee3 = [];
employee3["employeeid"] = 574;
employee3["name"] = "Inigo Montoya";
employee3["title"] = "Car Salesman";
employee3["department"] = "Souless Heathens";
employee3["current"] = false;

var employee = [employee1, employee2, employee3]; 

for (var index in employee) {
    if (employee[index]["current"] == true) {
        console.log(employee[index]);
    }   
}
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// STEP 16. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

var movies = [["O Brother Where Art Thou", 1], ["Snatch", 2], ["The Shawshank Redemption", 3], ["Lucky Number Sleven", 4], ["Boondock Saints", 5]];


function movieNames() {
    'use strict';
    var i, j;
    
    for (i = 0; i < movies.length; i++) {

        for (j = 0; j < 2; j++) {
            if (typeof movies[i][j] == "string") {return true; }
        }
        
    }
    
}
        
var strNames = movies.filter(movieNames);
console.log(strNames);
 ------------------------------------------------------------------------------ */    



// PRACTICE WITH FUNCTIONS:

/* ------------------------------------------------------------------------------
// STEP 1. Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.

function displayMessage (str) {
    console.log(str);
}

displayMessage ("Hello World!");
 ------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------
// STEP 2. Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

function calculate(num1, num2) {
    var res = num1 % num2;
    return  res;
}

console.log(calculate(10, 2));
 ------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------
// STEP 3. Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(array) {
    console.log("Employees:\n\n");
    for (var index in array) {
        console.log(array[index]);
    }
    
}

showEmployee(employees);
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// THE ROCK, PAPER, SCISSORS GAME   

// STEP 1. Begin by prompting the user for their choice.

var userChoice = prompt("Pick Rock, Paper, or Scissors.").toLowerCase();

// STEP 2. Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.

var comChoice = Math.random();
var outcome;


function compChoiceToString() {
    if (comChoice < 1.0 && comChoice > .66) {
        outcome = "rock";
    } else if (comChoice < .66 && comChoice > .33) {
        outcome = "paper";
    } else if (comChoice < .33) {
        outcome = "scissors";

    }
}

compChoiceToString();

// STEP 3. Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
// STEP 4. Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.

// STEP 5. What if the result ends in a tie? Figure out how to handle that as well.

// STEP 6. What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

// Rock beats scissors
// Paper beats rock
// Scissors beatS paper

function RPS(userChoice, outcome) {
    if (userChoice == "rock" && outcome == "scissers") {
        alert("The computer picked: " + outcome + "\n" + "You win!")
    } else if (userChoice == "rock" && outcome == "paper") {
        alert("The computer picked: " + outcome + "\n" + "You lose.")
    } else if (userChoice == "paper" && outcome == "rock") {
        alert("The computer picked: " + outcome + "\n" + "You win!")
    } else if (userChoice == "paper" && outcome == "scissors") {
        alert("The computer picked: " + outcome + "\n" + "You lose.")
    } else if (userChoice == "scissors" && outcome == "rock") {
        alert("The computer picked: " + outcome + "\n" + "You lose.")
    } else if (userChoice == "scissors" && outcome == "paper") {
        alert("The computer picked: " + outcome + "\n" + "You win!")
    } else if (userChoice == outcome) {
        alert ("The computer picked: " + outcome + "\n" + "It's a tie! Choose again");
        userChoice = prompt("Pick Rock, Paper, or Scissors.").toLowerCase();
        RPS (userChoice, outcome);
    } else {
        console.log("Something went wrong: " + " Userchoice: " + userChoice + " Outcome: " + outcome);
        userChoice = prompt("That's not a valid input, please choose again: Rock, Paper, or Scissors.").toLowerCase();
        comChoice = Math.random();
        compChoiceToString();
        RPS(userChoice, outcome);
    }
}

RPS(userChoice, outcome);
 ------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------
// THE BASIC CALCULATOR

// In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
// STEP 1. Prompt the user for a number and store that in a variable.

var num1 = parseInt(prompt("Enter a number."));

// STEP 2. Prompt the user for a second number and store that in a variable.

var num2 = parseInt(prompt("Enter another number."));

// STEP 3. Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.

var operation = prompt("Choose an operation to perform: add, subtract, multiply, or divide")

// STEP 4. Create a new named function called calculate() that accepts 3 parameters.

// STEP 5. Call the calculate function and pass in the 3 variables as parameters. 
// HINT: You will need to convert the 2 numbers from strings to numbers. 

// STEP 6. Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.

// STEP 7. Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.

function calculate(operation, num1, num2) {
    switch (operation) {
        case "+":
        case "add":
            alert(num1 + num2);
            break;
        case "-":
        case "subtract":
        case "minus":
            alert(num1 - num2);
            break;
        case"/":
        case "divide":
            alert(num1 / num2);
            break;
        case "*":
        case "multiply":
        case "times":
            alert(num1 * num2);
            break;
        default:
            operation = prompt("I can't perform that action. Please choose to add, subtract, multiply, or divide");
            calculate(operation, num1, num2);
            break;
    }
}

calculate(operation, num1, num2);

// For personal testing:
//    console.log(typeof(num1));
//    console.log(typeof(num2));
//    console.log(operation);
//    console.log(typeof(operation));
 ------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------
// DEATH BY JAVASCRIPT

// Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.

//STEP 1. Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

Sample Data and Output
Example string: 'webmaster' 
Expected Output: 'abeemrstw'

var x = "webmaster";

function alpha(string) {
    var y = [];
    y = x.split("");
    y = y.sort().join("");
    return y;
}

console.log(alpha(x));
------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------
//STEP 2. Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.

Sample Data and Output
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox'

var x = "the quick brown fox";

function capitalize(str) {
    var y;
    y = str.replace(/\b\w/g, function(txt){
        return txt.toUpperCase();
    });
    return y;
}

console.log(capitalize(x));
------------------------------------------------------------------------------ */




/* ------------------------------------------------------------------------------
//STEP 3. Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

Sample Data and Output
Example string: 'The quick brown fox' 
Expected Output: 5


var x = "The quick brown fox";

function vowelCount(str) {
    return str.match(/[aeiou]/g).length;
}

console.log(vowelCount(x));
------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------
//STEP 4. Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.

Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA


function strIdGenerator() {
    //Generate random number
    // iterate through alphabet, push charAt random number to array
    // iterate through 0-9, push number to array
    // iterate 8 times
    // convert array to string
    
    //26 letters in English alphabet
    
    var sID = [];
    
    for (var i = 0; i < 8; i++) {
        var rN = Math.random();
        var rN2;
        var rN3 = Math.random();
        var alpha = "abcdefghijklmnopqrstuvwxyz";
        var num = "0123456789";
        var a;
        var b;

        
        if (rN < 0.5) {
            rN2 = Math.floor(Math.random() * 27);
            a = alpha.charAt(rN2);
                if (rN3 > 0.5) {
                   a = a.toUpperCase();
                }
            sID.push(a);
        } else if (rN >= 0.5) {
            rN2 = Math.floor(Math.random() * 10);
            b = num.charAt(rN2);
            sID.push(b);
        } 
    };    

    sID = sID.join("");
    return sID;
}

console.log(strIdGenerator());
------------------------------------------------------------------------------ */


/* ------------------------------------------------------------------------------
//STEP 5. Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.

Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"


var countries = ["Australia", "Germany", "United States of America"];

function longestCountryName(array) {
    var lgth = 0;
    var longestName;
    
    for (var i = 0; i < array.length; i++) {
		if (array[i].length > lgth) {
			lgth = array[i].length;
			longestName = array[i];
		}; 
    }   
    
    return longestName; 
}
console.log(longestCountryName(countries));
------------------------------------------------------------------------------ */