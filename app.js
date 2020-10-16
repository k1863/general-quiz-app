const Question = function (question, answer, choices) {
  this.question = question;
  this.answer = answer;
  this.choices = choices;
};

var q1 = new Question(
  "1. In what part of the body would you find the fibula?",
  3,
  [" Hand", "Chest", "Leg"]
);
//console.log(q1);

var q2 = new Question("2. If you have cryophobia, what are you afraid of?", 3, [
  " Crying",
  " Crisis",
  " Ice/cold",
]);
//console.log(q2);

var q3 = new Question("3. What’s the chemical symbol for silver?", 1, [
  " Ag",
  " Si",
  " Na",
]);
//console.log(q3);

var q4 = new Question(
  "4. Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
  2,
  ["Battle Front", " Call of Duty", " Medal of Honor"]
);
//console.log(q4);

var q5 = new Question(
  "5.Who won the Best Actress Award at the most recent Oscars?",
  3,
  [" Emma Stone", " Cate Blanchett", " Renée Zellweger"]
);
//console.log(q5);

var q6 = new Question(
  "6. Ataulfo, Alphonso and Keitt are varieties of what fruit?",
  1,
  ["Mango", " Apple", "Papaya"]
);
//console.log(q6);

var q7 = new Question(
  "7. Who is the current manager of Manchester United?",
  1,
  ["Ole Gunnar Soskjaer", " Jürgen Klopp", "Nuno Espírito Santo"]
);
//console.log(q7);

var q8 = new Question("8.What is the capital city of Switzerland?", 3, [
  " Zürich",
  " Geneva",
  " Bern",
]);
//console.log(q8);

var q9 = new Question(
  "9. What is the smallest planet in our solar system?",
  2,
  ["Venus", "Mercury", "Earth"]
);
//console.log(q9);

var q10 = new Question(
  "10.With what sport would you associate Sachin Tendulkar?",
  1,
  ["Cricket", "Skiing", "formula racing"]
);
//console.log(q10);

//start quiz

//display question

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

Question.prototype.displayQuestion = function () {
  document.getElementById("question").textContent = this.question;
  console.log(this.question);

  var choiceBtns = document.querySelectorAll(".choices");

  for (var i = 0; i < this.choices.length; i++) {
    var choiceNum = i + 1;
    choiceBtns[i].outerHTML = `<input id="${i}" class="choices" type="button"
           onClick="btnClicked(this.id)" value= "${choiceNum}. ${this.choices[i]}"></input>`;
    console.log(choiceNum + ": " + this.choices[i]);
  }
};

//check answer
score = 0;

Question.prototype.checkAnswer = function (userAnswer) {
  if (userAnswer !== this.answer) {
    console.log("*********************************************");
    console.log("Your Score is " + score);
    alert("Incorrect! Answer is " + this.answer + ", your score is " + score);
  } else {
    score++;
    console.log("*********************************************");
    console.log("Your Score is " + score);
    alert("Correct, Answer is " + this.answer + ", your score is " + score);
  }
};

// for (i = 0; i < userInputs.length; i++) {
//   userInputs[i].addEventListener("click", (event) => {
//     var userAnswer = event.id;
//     console.log(userAnswer);
//     Question.checkAnswer(userAnswer);
//   });
// }

var randomNum = Math.floor(Math.random() * questions.length);

function btnClicked(clickedBtn) {
  var userAnswer = parseInt(clickedBtn) + 1;
  console.log(userAnswer);
  questions[randomNum].checkAnswer(parseInt(userAnswer));
}

//display next question
function nextQuestion() {
  questions[randomNum].displayQuestion();
}
nextQuestion();
//user exit app
