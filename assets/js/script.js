const startButtonElement = document.getElementById("start-btn");
const startGameSection = document.getElementById("start-section-wrapper");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-btn");
const timerSpanElement = document.getElementById("timer");
const btnContainerDiv = document.getElementById("button-container");

let shuffledQuestions, currentQuestionIndex;

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
    question: "Car makers",
    answers: [
      { text: "Audi", correct: true },
      { text: "Bmw", correct: false },
      { text: "Nissan", correct: false },
      { text: "Honda", correct: false },
    ],
  },

  {
    question: "Processors",
    answers: [
      { text: "i3", correct: true },
      { text: "i5", correct: false },
      { text: "i7", correct: false },
      { text: "i9", correct: false },
    ],
  },

  {
    question: "Planets",
    answers: [
      { text: "Pluto", correct: true },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Uranus", correct: false },
    ],
  },

  {
    question: "Engines",
    answers: [
      { text: "2JZ", correct: true },
      { text: "RB26", correct: false },
      { text: "K24", correct: false },
      { text: "B22", correct: false },
    ],
  },

  {
    question: "Phone",
    answers: [
      { text: "Iphone 7", correct: true },
      { text: "Iphone 8", correct: false },
      { text: "Iphone X", correct: false },
      { text: "Iphone 11", correct: false },
    ],
  },

  {
    question: "Samsung",
    answers: [
      { text: "S5", correct: true },
      { text: "S6", correct: false },
      { text: "S7", correct: false },
      { text: "S8", correct: false },
    ],
  },
];

console.log(questions);

//construct the game-container div in js
const constructQuestionContainer = () => {
  document.getElementById("wrapper").setAttribute("class", "wrapper");

  const questionContainerDiv = document.createElement("div");
  questionContainerDiv.setAttribute("class", "question-container");

  const questionDiv = document.createElement("h1");
  questionDiv.setAttribute("class", "question");
  questionDiv.setAttribute("id", "question");

  btnContainerDiv.setAttribute("class", "button-container");

  questionContainerDiv.appendChild(questionDiv);

  questionContainerDiv.appendChild(btnContainerDiv);

  return questionContainerDiv;
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
  document.body.removeChild(startGameSection);

  //construct the game-container div in js
  const gameDivElement = constructQuestionContainer();

  //insert question-container
  document.getElementById("wrapper").appendChild(gameDivElement);

  // Starts the timer when the game starts
  startTimer();
  // document.getElementById("question").textContent = "dummy text";

  // This will shuffle the questions
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
};

let setNextQuestion = () => {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

let showQuestion = (question) => {
  document.getElementById("question").innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    btnContainerDiv.appendChild(button);
    button.setAttribute("id", "start-btn");
    button.setAttribute("class", "start-button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const selectAnswer = () => {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
};

// Sync questions array with buttons and question itself
// add High Score in local memory

startButtonElement.addEventListener("click", startGame);
