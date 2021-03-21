const startButtonElement = document.getElementById("start-btn");
const startGameSection = document.getElementById("start-section-wrapper");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerSpanElement = document.getElementById("timer");
const bodyElement = document.body;

let timerValue = 10;

const questions = [
  {
    question:
      "The data type in JavaScript that can only have two values is called:",
    answers: [
      { text: "boolean", correct: true },
      { text: "function", correct: false },
      { text: "Memory", correct: false },
      { text: "String", correct: false },
    ],
  },

  {
    question:
      "The data type in JavaScript that can only have two values is called:",
    answers: [
      { text: "boolean", correct: true },
      { text: "function", correct: false },
      { text: "Memory", correct: false },
      { text: "String", correct: false },
    ],
  },

  {
    question:
      "The data type in JavaScript that can only have two values is called:",
    answers: [
      { text: "boolean", correct: true },
      { text: "function", correct: false },
      { text: "Memory", correct: false },
      { text: "String", correct: false },
    ],
  },

  {
    question:
      "The data type in JavaScript that can only have two values is called:",
    answers: [
      { text: "boolean", correct: true },
      { text: "function", correct: false },
      { text: "Memory", correct: false },
      { text: "String", correct: false },
    ],
  },

  {
    question:
      "The data type in JavaScript that can only have two values is called:",
    answers: [
      { text: "boolean", correct: true },
      { text: "function", correct: false },
      { text: "Memory", correct: false },
      { text: "String", correct: false },
    ],
  },

  {
    question:
      "The data type in JavaScript that can only have two values is called:",
    answers: [
      { text: "boolean", correct: true },
      { text: "function", correct: false },
      { text: "Memory", correct: false },
      { text: "String", correct: false },
    ],
  },

  {
    question:
      "The data type in JavaScript that can only have two values is called:",
    answers: [
      { text: "boolean", correct: true },
      { text: "function", correct: false },
      { text: "Memory", correct: false },
      { text: "String", correct: false },
    ],
  },
];

console.log(
  startButtonElement,
  startGameSection,
  questionElement,
  answerButtonsElement,
  timer
);

// CAUTION! to add data to question/button on click without gettin the "null" error, try and use .innerHTML inside the startGame function

//construct the game-container div in js
const constructQuestionContainer = () => {
  const questionContainerSection = document.createElement("section");

  questionContainerSection.setAttribute("id", "wrapper");
  questionContainerSection.setAttribute("class", "wrapper");

  const questionContainerDiv = document.createElement("div");

  questionContainerDiv.setAttribute("class", "question-container");

  const questionDiv = document.createElement("h1");
  questionDiv.setAttribute("class", "question");
  questionDiv.setAttribute("id", "question");

  const btnContainerDiv = document.createElement("div");
  btnContainerDiv.setAttribute("class", "button-container");
  //replace answers with the actual answers for each different question

  const firstAnswer = document.createElement("button");
  firstAnswer.setAttribute("class", "answer-btn");
  firstAnswer.setAttribute("id", "answer-buttons");

  firstAnswer.textContent = "Answer 1";

  const secondAnswer = document.createElement("button");
  secondAnswer.setAttribute("class", "answer-btn");
  firstAnswer.setAttribute("id", "answer-buttons");

  secondAnswer.textContent = "Answer 2";

  const thirdAnswer = document.createElement("button");
  thirdAnswer.setAttribute("class", "answer-btn");
  firstAnswer.setAttribute("id", "answer-buttons");

  thirdAnswer.textContent = "Answer 3";

  const fourthAnswer = document.createElement("button");
  fourthAnswer.setAttribute("class", "answer-btn");
  firstAnswer.setAttribute("id", "answer-buttons");

  fourthAnswer.textContent = "Answer 4";

  bodyElement.appendChild(questionContainerSection);

  document.getElementById("wrapper").appendChild(questionContainerDiv);

  questionContainerDiv.appendChild(questionDiv);

  questionContainerDiv.appendChild(btnContainerDiv);

  btnContainerDiv.appendChild(firstAnswer);

  btnContainerDiv.appendChild(secondAnswer);

  btnContainerDiv.appendChild(thirdAnswer);

  btnContainerDiv.appendChild(fourthAnswer);

  return questionContainerSection;
};

const startTimer = () => {
  const timerTick = () => {
    timerValue -= 1;
    timerSpanElement.textContent = timerValue;

    if (timerValue === 0) {
      clearInterval(timer);
    }
  };

  const timer = setInterval(timerTick, 1000);
};

//replace card-container div with game-container div
const startGame = () => {
  //remove start-game element
  bodyElement.removeChild(startGameSection);

  //construct the game-container div in js
  const gameDivElement = constructQuestionContainer();

  //insert question-container
  bodyElement.appendChild(gameDivElement);

  startTimer();
};

// Add timer
// Sync questions array with buttons and question itself
// add High Score in local memory

startButtonElement.addEventListener("click", startGame);
