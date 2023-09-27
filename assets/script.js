let question = document.querySelector(".question");
let time = document.querySelector(".time");
let submit = document.querySelector(".submit");
let answerA = document.querySelector(".a");
let answerB = document.querySelector(".b");
let answerC = document.querySelector(".c");
let answerD = document.querySelector(".d");
let questionCounter = 0;

let newBackground = document.querySelector(".codeQuiz");
// question one: What is Iron Man's real name?
// Tony Stark, Bruce Wayne, Oliver Queen, Peter Parker
// question two: What city does Green Arrow live in?
// Star City, Gotham City, New York, Metropolis
// question three: How tall is comic book Superman?
// 6'4, 6'6, 6'0, 6'8
// question four: In the MCU, what does Aunt May(RIP) call Spidermans "Spidey-sense"
// Peter tingle, spider-sense, The 6th sense, Hyper-sense
// question five: What is Dr. Dooms real name?
// Victor Von Doom, Paul Potter, Julian Jackson, David Doom


let qA = [
  {
    question: "What is Iron Man's real name?",
    answerChoices: [
      "Bruce Wayne",
      "Oliver Queen",
      "Tony Stark",
      "Peter Parker",
    ],
    correctAnswer: "Tony Stark",
  },

  {
    question: "What city does Green Arrow live in?",
    answerChoices: ["Gotham City", "New York", "Metropolis", "Star City"],
    correctAnswer: "Star City",
  },

  {
    question: "How tall is comic book Superman?",
    answerChoices: ["6'8", "6'0", "6'2", "6'4"],
    correctAnswer: "6'4",
  },

  {
    question:
      "In the MCU, what does Aunt May(RIP) call Spidermans 'Spidey-sense'",
    answerChoices: [
      "Peter tingle",
      "spider-sense",
      "The 6th sense",
      "Hyper-sense",
    ],
    correctAnswer: "Tony Stark",
  },

  {
    question: "What is Dr. Dooms real name?",
    answerChoices: [
      "Paul Potter",
      "Victor Von Doom",
      "Julian Jackson",
      "David Doom",
    ],
    correctAnswer: "Victor Von Doom",
  },
];

// Get references to the startScreen and codeQuiz sections
const startScreen = document.querySelector(".startScreen");
const codeQuiz = document.querySelector(".codeQuiz");

// Function to show the start screen and hide the code quiz
function showStartScreen() {
  startScreen.style.display = "block";
  codeQuiz.style.display = "none";
  
  
}
// Submit button logic
submit.style.display = "none";

// Set time and 10 second count down timer logic
let secondsLeft = 11;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft > 1) {
      time.textContent = secondsLeft + " SECONDS REMAIN...";
    } else if (secondsLeft === 1) {
      time.textContent = secondsLeft + " SECOND REMAINS...";
    } else {
      time.textContent = "TIMES UP :(";
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Start screen and code quiz toggle logic
startScreen.style.display = "none";
if ((startScreen.style.display = "block")) {
  codeQuiz.style.display = "none";
} else if ((codeQuiz.style.display = "block")) {
  startScreen.style.display = "none";
}

// Shows the code quiz and hides the start screen on line 58's click
function showCodeQuiz() {
  codeQuiz.style.display = "block";
  startScreen.style.display = "none";
  setTime();
  return;
}
// On begin Button Event listener
const startButton = document.querySelector(".begin");
startButton.addEventListener("click", showCodeQuiz);

// Dynamic question & answer logic


// Question & answer display logic
if ((codeQuiz.style.display = "block" && questionCounter === 0)) {
  question.textContent = qA[0].question;
  answerA.textContent = qA[0].answerChoices[0];
  answerB.textContent = qA[0].answerChoices[1];
  answerC.textContent = qA[0].answerChoices[2];
  answerD.textContent = qA[0].answerChoices[3];
} else if ((codeQuiz.style.display = "block" && questionCounter === 1)) {
  question.textContent = qA[1].question;
  answerA.textContent = qA[1].answerChoices[0];
  answerB.textContent = qA[1].answerChoices[1];
  answerC.textContent = qA[1].answerChoices[2];
  answerD.textContent = qA[1].answerChoices[3];
} else if ((codeQuiz.style.display = "block" && questionCounter === 2)) {
  question.textContent = qA[2].question;
  answerA.textContent = qA[2].answerChoices[0];
  answerB.textContent = qA[2].answerChoices[1];
  answerC.textContent = qA[2].answerChoices[2];
  answerD.textContent = qA[2].answerChoices[3];
} else if ((codeQuiz.style.display = "block" && questionCounter === 3)) {
  question.textContent = qA[3].question;
  answerA.textContent = qA[3].answerChoices[0];
  answerB.textContent = qA[3].answerChoices[1];
  answerC.textContent = qA[3].answerChoices[2];
  answerD.textContent = qA[3].answerChoices[3];
} else if ((codeQuiz.style.display = "block" && questionCounter === 4)) {
  question.textContent = qA[4].question;
  answerA.textContent = qA[4].answerChoices[0];
  answerB.textContent = qA[4].answerChoices[1];
  answerC.textContent = qA[4].answerChoices[2];
  answerD.textContent = qA[4].answerChoices[3];
}

// Next question Logic
function nextQuestion() {
  let questionCounter = 0;
  if (questionCounter < qA.length) {

    questionCounter++;
  }
}


const selected = document.querySelector(".choices");
selected.addEventListener("click", function() {
  
})










