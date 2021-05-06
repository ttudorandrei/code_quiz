const startButtonElement = document.getElementById("start-btn");
const startGameSection = document.getElementById("start-section-wrapper");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-btn");
const timerSpanElement = document.getElementById("timer");
const btnContainerDiv = document.getElementById("button-container");
const submitButton = document.getElementById("submit-btn");
const inputForm = document.getElementById("name-input");

let shuffledQuestions, currentQuestionIndex;

let timerValue = 140;

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
      "The function: 'const myFunction = () => {}' is specific to which version of JavaScript?",
    answers: [
      { text: "ES1", correct: false },
      { text: "ES3", correct: false },
      { text: "ES5", correct: false },
      { text: "ES6", correct: true },
    ],
  },

  {
    question: "'Math.random()' is:",
    answers: [
      { text: "An array", correct: false },
      { text: "A function", correct: false },
      { text: "A method", correct: true },
      { text: "An object", correct: false },
    ],
  },

  {
    question: "Improper use of the while() loop can:",
    answers: [
      { text: "Break you machine", correct: true },
      { text: "Break your browser", correct: false },
      { text: "Improve user experience", correct: false },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question: "How do you add a singe line comment in JavaScript?",
    answers: [
      { text: "'This is a comment'", correct: false },
      { text: "//This is a comment", correct: true },
      { text: "/*This is a comment*/", correct: false },
      { text: "<--This is a comment-->", correct: false },
    ],
  },

  {
    question: "Which one of the next frameworks are JavaScript frameworks:",
    answers: [
      { text: "Vue", correct: false },
      { text: "React", correct: false },
      { text: "jQuery", correct: false },
      { text: "All of the above", correct: true },
    ],
  },

  {
    question:
      "What statement supplies the value of a functionWhich of the following statements supplies the value of a function:",
    answers: [
      { text: "cancel", correct: false },
      { text: "continue", correct: false },
      { text: "return", correct: true },
      { text: "valueOf", correct: false },
    ],
  },
];

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

//this function will start the timer, decrementing one second every interval
const startTimer = () => {
  const timerTick = () => {
    timerValue -= 1;
    timerSpanElement.textContent = timerValue;

    if (timerValue === 0) {
      clearInterval(timer);
      gameOver();
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

  // This will shuffle the questions
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
};

//this will move to the next question
const setNextQuestion = () => {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

//this function will generate buttons with the answers typed inside them
const showQuestion = (question) => {
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

//this function will remove the created elements (question and buttons) to make room for the next question and answers
const resetState = () => {
  while (btnContainerDiv.firstChild) {
    btnContainerDiv.removeChild(btnContainerDiv.firstChild);
  }
};

// in case the wrong answer is selected, this will display a message saying "Wrong!" that stays on the screen for a second
const displayWrongMessage = () => {
  document.getElementById("wrong-answer").innerText = "Wrong!";

  setTimeout(function () {
    document.getElementById("wrong-answer").innerText = "";
  }, 1000);
};

const selectAnswer = (e) => {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  //if chosen answer is correct, user will be prompted with next question, else he will loose a certain amount of time. If the timer reaches 0, the game will be reset.
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    console.log("greater");
    if (correct) {
      resetState();
      currentQuestionIndex += 1;
      setNextQuestion();
    } else {
      if (timerValue >= 10) {
        timerValue -= 10;
      } else if (timerValue <= 10) {
        timerValue = 1;
      }
      displayWrongMessage();
    }
  } else {
    // if there are no more questions left it will save the score and prompt you with the high score page
    gameOver();
  }
};

// this prompts the user with his high score
const gameOver = () => {
  resetState();
  (document.getElementById("question").innerText = document.getElementById(
    "question"
  ).innerText =
    "Game over! You will be automatically redirected to the high score page! Your score is " +
    timerValue),
    saveData();
};

// this function will redirect the user to the high score page
const redirect = () => {
  setTimeout(function () {
    window.location = "./high-score.html";
  }, 4000);
};

//this function logs the result in local memory
const saveData = () => {
  localStorage.setItem("score", timerValue);
  redirect();
};

//this logs the name in local memory
const addListItem = () => {
  const textValue = document.getElementById("name-input").value;
  localStorage.setItem("name", textValue);
  document.getElementById("remove-form-after-submit").removeChild(submitButton);
  document.getElementById("remove-form-after-submit").removeChild(inputForm);
};

document.getElementById("submit-btn").addEventListener("click", addListItem);
startButtonElement.addEventListener("click", startGame);
