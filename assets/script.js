let question = document.querySelector(".question")
let time = document.querySelector(".time")
let next = document.querySelector(".next")
let secondsLeft = 5;
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
onQuestionNum = 0;
timeLeft = 30;
let questions = ["What is Iron Man's real name?", "What city does Green Arrow live in?", "How tall is (Comic Book) Superman?", "In the MCU, what does Aunt May(RIP) call Spidermans 'Spidey-sense'?", "What is Dr. Dooms real name?"];

let answerChoices = [{a: "Peter Parker", b: "Bruce Wayne", c: "Tony Stark", d: "Oliver Queen"},
{a: "Star City", b: "Gotham City", c: "New York", d: "Metropolis"},
{a: "6'4", b: "6'6", c: "6'0", D: "6'8"},
{a: "Spider-sense", b: "The 6th sense", c: "Hyper-sense", d: "Peter-tingle"},
{a: "David Doom", b: "Victor Von Doom", c: "Paul Plotter", d: "Julian Jackson"}
]
console.log(questions[2])
console.log(answerChoices[3].d);

function setTime() {
let timerInterval = setInterval(function() {
  timeLeft--;
  timerInterval.textContent = timeLeft + " SECONDS LEFT..."
}, 1000);
}


  function quizQuestions() {
    if (onQuestionNum === 0) {
      let q1 = questions[0];
      question.textContent = q1;
    } else if (onQuestionNum === 1) {
      let q2 = questions[1];
      question.textContent = q2;
    } else if (onQuestionNum === 2) {
      let q3 = questions[2];
      question.textContent = q3;
    } else if (onQuestionNum === 3) {
      let q4 = questions[3];
      question.textContent = q4;
    } else if (onQuestionNum === 4) {
      let q5 = questions[4];
      question.textContent = q5;
    }
    return;
  };

  for (let i = 0; i > 0; i--) {
    quizQuestions
  } 





  setTime();
  quizQuestions();
  


















