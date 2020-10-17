//Create Questions
const Question = function (question, answer, choices) {
  this.question = question;
  this.answer = answer;
  this.choices = choices;
};

var q1 = new Question(
  "1. In what part of the body would you find the fibula?",
  3,
  [" Hand", "Chest", "Leg", "shoulder"]
);
//console.log(q1);

var q2 = new Question("2. If you have cryophobia, what are you afraid of?", 3, [
  " Crying",
  " Crisis",
  " Ice/cold",
  "Darkness",
]);
//console.log(q2);

var q3 = new Question("3. What’s the chemical symbol for silver?", 1, [
  " Ag",
  " Si",
  " Na",
  " Mg",
]);
//console.log(q3);

var q4 = new Question(
  "4. Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
  2,
  ["Battle Front", " Call of Duty", " Medal of Honor", "Wolfenstein"]
);
//console.log(q4);

var q5 = new Question(
  "5. Who won the Best Actress Award at the most recent Oscars?",
  3,
  [" Emma Stone", " Cate Blanchett", " Renée Zellweger", "Jeniffer Lawrence"]
);
//console.log(q5);

var q6 = new Question(
  "6. Ataulfo, Alphonso and Keitt are varieties of what fruit?",
  1,
  ["Mango", " Apple", "Papaya", "Banana"]
);
//console.log(q6);

var q7 = new Question(
  "7. Who is the current manager of Manchester United?",
  1,
  [
    "Ole Gunnar Soskjaer",
    " Jürgen Klopp",
    "Nuno Espírito Santo",
    "José Mourinho",
  ]
);
//console.log(q7);

var q8 = new Question("8. What is the capital city of Switzerland?", 3, [
  " Zürich",
  " Geneva",
  " Bern",
  "Lausanne",
]);
//console.log(q8);

var q9 = new Question(
  "9. What is the smallest planet in our solar system?",
  2,
  ["Venus", "Mercury", "Earth", "Uranus"]
);
//console.log(q9);

var q10 = new Question(
  "10. With what sport would you associate Sachin Tendulkar?",
  1,
  ["Cricket", "Skiing", "formula racing", "Boxing"]
);

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var choiceBtns = document.querySelectorAll(".choices");
var newGameBtn = document.getElementById("newGame");
var startBtn = document.getElementById("start");
var scoreDOM = document.getElementById("score");
var questionNum = -1;
var score = 0;
var scorePercentage;

//reset app
function startGame() {
  for (i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].style.visibility = "hidden";
  }
  startBtn.textContent = "Start";
  scoreDOM.style.display = "none";
}

startGame();
newGameBtn.addEventListener("click", function () {
  document.getElementById("question").textContent = "Quiz";
  startGame();
  window.location.reload();
});

//display question
Question.prototype.displayQuestion = function () {
  document.getElementById("question").textContent = this.question;
  console.log(this.question);
  scoreDOM.style.display = "block";

  for (var i = 0; i < this.choices.length; i++) {
    var choiceNum = i + 1;
    choiceBtns[i].style.visibility = "visible";
    choiceBtns[i].classList.remove("redBtn");
    choiceBtns[i].classList.remove("greenBtn");
    choiceBtns[i].textContent = ` ${choiceNum}. ${this.choices[i]}`;
    console.log(choiceNum + ": " + this.choices[i]);
  }
};

//check answer
function btnClicked(clickedBtn) {
  var userAnswer = parseInt(clickedBtn);
  console.log(userAnswer);
  questions[questionNum].checkAnswer(userAnswer);
}

Question.prototype.checkAnswer = function (userAnswer) {
  //check if user answer is correct and display correct answer and user answer using green
  //for correct and red for wrong answers.
  if (userAnswer !== this.answer) {
    scoreDOM.textContent = `Score: ${score}`;
    document.getElementById(`${userAnswer}`).classList.add("redBtn");
    document.getElementById(`${this.answer}`).classList.add("greenBtn");
  } else {
    if (
      //else check if user already clicked an option
      document
        .getElementById(`${this.answer}`)
        .classList.contains("greenBtn") ||
      document.getElementById(`${this.answer}`).classList.contains("redBtn")
    ) {
      //if user already clicked an option, score remains the same
      score = score;
    } else {
      //if user clicked correct option, score increases by 1
      score++;
      document.getElementById(`${this.answer}`).classList.add("greenBtn");
    }
    scoreDOM.textContent = `Score: ${score}`;
  }
};

//Display next question
function randomQuestion(questionNum) {
  questions[questionNum].displayQuestion();
}

//select next question on click
startBtn.addEventListener("click", function () {
  questionNum++;
  startBtn.textContent = "Next";

  // select upto 10 questions otherwise quiz ends
  questionNum < 10 ? randomQuestion(questionNum) : endQuiz();
});

function endQuiz() {
  scorePercentage = score * 10;
  if (score > 5) {
    document.getElementById(
      "question"
    ).textContent = `Congratulations! you have ${scorePercentage}%`;
  } else {
    document.getElementById(
      "question"
    ).textContent = `Give it another shot! You have ${scorePercentage}%`;
  }
  startGame();
}
