/* 
    TITLE: ASSIGNMENT 3 JAVASCRIPT
    AUTHOR: MISTY MORREYN
    CLASS: COMM644 FALL 2015
*/

// PRACTICE WITH ARRAYS

/*
// STEP 1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs"];

console.log(movies[1]); 
*/

/*
// STEP 2. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

var movies = new Array();
movies[0] = "O Brother Where Art Thou";
movies[1] = "Snatch";
movies[2] = "Boondock Saints";
movies[3] = "Lucky Number Sleven";
movies[4] = "Reservoir Dogs";

console.log(movies[0]);
*/

/*
// STEP 3. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

var movies = ["O Brother Where Art Thou", "Snatch", "Ocean's Eleven", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs"];

console.log(movies.length);
*/

/*
// STEP 4. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs"];

delete movies[0];
console.log(movies);
*/

/*
// STEP 5. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
*/

/*
// STEP 6. Now, use a for-in loop to iterate through the array and display each movie within the console window.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

for (var index in movies) {
    console.log(movies[index]);
}
*/

/*
// STEP 7. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];


for (var index in movies) {
    movies.sort();
    console.log(movies[index]);
}
*/

/*
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
*/

/*
// STEP 9. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

movies = movies.concat(leastFavMovies);
console.log(movies.reverse());
*/

/*
// STEP 10. Return just the last item in the array and display it within the console window.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

movies = movies.concat(leastFavMovies);
console.log(movies.pop());
*/

/*
// STEP 11. Remove the previous method and this time return just the first item in the array and display it within the console window.

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

movies = movies.concat(leastFavMovies);
console.log(movies.shift());
*/

/*
// STEP 12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

var movies = ["O Brother Where Art Thou", "Snatch", "Boondock Saints", "Lucky Number Sleven", "Reservoir Dogs", "Ocean's Eleven", "The Shawshank Redemption"];

var leastFavMovies = ["Zombie Strippers", "Insidious", "Die Hard Dracula"];

movies = movies.concat(leastFavMovies);
console.log(movies.indexOf("Zombie Strippers") + " " + movies.indexOf("Insidious") + " " + movies.indexOf("Die Hard Dracula"));
movies.splice(7, 9, "The Little Mermaid", "Beauty and the Beast", "The Return of Jafar");

console.log(movies);
*/


// STEP 13. Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 

var employee1 = [];
employee1 ["employeeid"] = 105;
employee1 ["name"] = "John Doe";
employee1 ["title"] = "Web Developer";
employee1 ["department"] = "IT";
employee1 ["current"] = true;

var employee2 = [];
employee2 ["employeeid"] = 220;
employee2 ["name"] = "Jane Dane";
employee2 ["title"] = "Graphic Artist";
employee2 ["department"] = "Art";
employee2 ["current"] = true;

var employees = employee1.concat(employee2);
console.log(employees["name"]);

// STEP 14. Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.


// STEP 15. And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.


// STEP 16. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.


// PRACTICE WITH FUNCTIONS:

// STEP 1. Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.


// STEP 2. Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.


// STEP 3. Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY

