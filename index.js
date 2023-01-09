// console.log('Anshu Kumar');
// var oldBoolean = 0;
// var readlineSync= require('readline-sync');
// var ans=readlineSync.question("Hi Anshu,Tell me your passing year.");
// if(ans>=2020){
//   oldBoolean= oldBoolean+1;
// }
// console.log("You are " + ans + ","+ "graduate!Congratulations !!"  + '\n' + "");




//functions

// var readlineSync = require('readline-sync');
// var x1= readlineSync.question("Input your first number: ");
// var x2= readlineSync.question("Input your second number: ");

// function product(n1, n2){
//   const product= n1*n2;
//   return product;

// }

// var output= product(x1,x2);
// console.log("Your answer is :" + " "+ output);


//for 2023 admission
//play and track score
var score = 0;
var readlineSync = require("readline-sync");
console.log("Welcome To the DO YOU KNOW ANSHU application");
var userName = readlineSync.question("Could you please tell me your name?");
// console.log("Welcome" + userName+"!" );
console.log("Welcome" + " " + userName + "!.");
console.log("Let's Start the Quiz !! ");
var q1 = readlineSync.question("From Which State I belong?");
// console.log(q1.toUpperCase());
if (q1.toUpperCase() === "BIHAR") {
  score = score + 1;
  // console.log("KKKKKk")
  console.log("You are Correct !! ")
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}
var q2 = readlineSync.question("In Which City I stay? ");
if (q2.toUpperCase() === "BENGALURU") {
  console.log("You are Correct !! ")
  score = score + 1;
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}
var q3 = readlineSync.question("Any Guess about My favourite language?");
if (q3.toUpperCase() === "HINDI") {
  console.log("You are Correct !! ")
  score = score + 1;
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}

var q4 = readlineSync.question("Am I Married ?");
if (q4.toUpperCase() === "NO") {
  console.log("You are Correct !! ")
  score = score + 1;
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}

var q5 = readlineSync.question("Can you guess about my current company name where I work as a Senior Software Engineer?");
if (q5.toUpperCase() === "INFOSYS") {
  console.log("You are Correct !! ")
  score = score + 1;
  console.log("Your Current Score is:" + score);
}
else {
  console.log("OOPs this answer is wrong !! ")
  score = score;
  console.log("Your Current Score is:" + score);

}

console.log("______________________________");

console.log("Congratulation " + userName.toUpperCase() + "!!" + "Your Final Score is:" + score);







