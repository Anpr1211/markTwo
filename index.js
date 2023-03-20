var readlineSync = require('readline-sync');

console.log("Welcome to Kolkata Quiz!");
var userName = readlineSync.question("Please enter your name: ");

console.log("Let's get started!");

questions = [{
  question: "What has the famous Park Street been renamed as? ",
  answer: "Mother Teresa Sarani"
}, {
  question: "What ingredient is unique to Kolkata Biryani? ",
  answer: "Potato",
}, {
  question: "Which is the famous lake of Kolkata, named after the writer of India's national anthem? ",
  answer: "Rabindra Sarobar"
}, {
  question: "What was the older office of the WB Government? ",
  answer: "Writer's Building"
}, {
  question: "What is the world-famous festival of Kolkata? ",
  answer: "Durga Puja"
}]

var score = 0;

function quiz(question, rightAnswer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === rightAnswer) {
    console.log("Right! You know Kolkata pretty well.");
    score = score + 1;
    console.log("Your score is " + score);
  }
  else {
    console.log("Wrong. The correct answer is "+ rightAnswer + ".");
    console.log("Your score is " + score);
  }
}

for (var i = 0; i < questions.length; i++) {
  console.log("\n")
  console.log("Question " + (i + 1) + " goes here -> ")
  quiz(questions[i].question, questions[i].answer);

}

console.log("\n");
console.log("Final score is ", score)