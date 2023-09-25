let question = document.querySelector(".question")
let time = document.querySelector(".time")
let next = document.querySelector(".next")
let answerA = document.querySelector(".a")
let answerB = document.querySelector(".b")
let answerC = document.querySelector(".c")
let answerD = document.querySelector(".d")

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

let questions = ["What is Iron Man's real name?", "What city does Green Arrow live in?", "How tall is (Comic Book) Superman?", "In the MCU, what does Aunt May(RIP) call Spidermans 'Spidey-sense'?", "What is Dr. Dooms real name?"];

let answerChoices = [{a: "Peter Parker", b: "Bruce Wayne", c: "Tony Stark", d: "Oliver Queen"},
{a: "Star City", b: "Gotham City", c: "New York", d: "Metropolis"},
{a: "6'4", b: "6'6", c: "6'0", D: "6'8"},
{a: "Spider-sense", b: "The 6th sense", c: "Hyper-sense", d: "Peter-tingle"},
{a: "David Doom", b: "Victor Von Doom", c: "Paul Plotter", d: "Julian Jackson"}
]

onQuestionNum = 0;
timeLeft = 5;
console.log(questions[2])
console.log(onQuestionNum)

function main() {
  quizQuestions();
  dynamicAnswers();
  nextQuestion();
  buttonDiff();
  setTime();
}

function buttonDiff() {
if (onQuestionNum <= 3) {
  document.querySelector(".next").textContent = "NEXT";
} else {
document.querySelector(".next").textContent = "SUBMIT";
}
}

/*function answers() {
  if (onQuestionNum === 0) {
    let a = answerChoices[0].a

  }
  return;
}*/

function dynamicAnswers() {
if (onQuestionNum === 0) {     //question 1
  let a = answerChoices[0].a
  answerA.textContent = a
  let b = answerChoices[0].b
  answerB.textContent = b
  let c = answerChoices[0].c
  answerC.textContent = c
  let d = answerChoices[0].d
  answerD.textContent = d
} else if (onQuestionNum === 1) {   //question 2
  let a = answerChoices[1].a
  answerA.textContent = a
  let b = answerChoices[1].b
  answerB.textContent = b
  let c = answerChoices[1].c
  answerC.textContent = c
  let d = answerChoices[1].d
  answerD.textContent = d
} else if (onQuestionNum === 2) {    //question 3
  let a = answerChoices[2].a
  answerA.textContent = a
  let b = answerChoices[2].b
  answerB.textContent = b
  let c = answerChoices[2].c
  answerC.textContent = c
  let d = answerChoices[2].d
  answerD.textContent = d
} else if (onQuestionNum === 3) {    //question 4
  let a = answerChoices[3].a
  answerA.textContent = a
  let b = answerChoices[3].b
  answerB.textContent = b
  let c = answerChoices[3].c
  answerC.textContent = c
  let d = answerChoices[3].d
  answerD.textContent = d
} else if (onQuestionNum === 4) {    //question 5
  let a = answerChoices[4].a
  answerA.textContent = a
  let b = answerChoices[4].b
  answerB.textContent = b
  let c = answerChoices[4].c
  answerC.textContent = c
  let d = answerChoices[4].d
  answerD.textContent = d
} 
}








function setTime() {
  if (timeLeft > 0) {
    let timerInterval = setInterval(function() {
      timeLeft--;
      time.textContent = timeLeft + " SECONDS LEFT...";
      
      if (timeLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
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

  for (let onQuestionNum = 0; onQuestionNum <= questions.length; onQuestionNum++) {

  }


  function clickButton() {
    if(next) {
      next.addEventListener("click", function() {
        
    })
  }
  };

function nextQuestion() {
  if(next || timeLeft === 0) {
    onQuestionNum++;
}
};

main();
