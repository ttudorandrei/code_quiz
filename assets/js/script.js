const startButtonElement = document.getElementById("start-btn");
const startGameSection = document.getElementById("start-section-wrapper");

//construct the game-container div in js
const constructQuestionContainer = () => {
  const questionContainerSection = document.createElement("section");

  questionContainerSection.setAttribute("id", "wrapper");
  questionContainerSection.setAttribute("class", "wrapper");

  const questionContainerDiv = document.createElement("div");

  questionContainerDiv.setAttribute("class", "question-container");

  const questionDiv = document.createElement("h1");
  questionDiv.setAttribute("class", "question");

  questionDiv.textContent = "dummy text";

  const btnContainerDiv = document.createElement("div");
  btnContainerDiv.setAttribute("class", "button-container");
  //replace answers with the actual answers for each different question

  const firstAnswer = document.createElement("button");
  firstAnswer.setAttribute("class", "answer-btn");

  firstAnswer.textContent = "Answer 1";

  const secondAnswer = document.createElement("button");
  secondAnswer.setAttribute("class", "answer-btn");

  secondAnswer.textContent = "Answer 2";

  const thirdAnswer = document.createElement("button");
  thirdAnswer.setAttribute("class", "answer-btn");

  thirdAnswer.textContent = "Answer 3";

  const fourthAnswer = document.createElement("button");
  fourthAnswer.setAttribute("class", "answer-btn");

  fourthAnswer.textContent = "Answer 4";

  document.body.appendChild(questionContainerSection);

  document.getElementById("wrapper").appendChild(questionContainerDiv);

  questionContainerDiv.appendChild(questionDiv);

  questionContainerDiv.appendChild(btnContainerDiv);

  btnContainerDiv.appendChild(firstAnswer);

  btnContainerDiv.appendChild(secondAnswer);

  btnContainerDiv.appendChild(thirdAnswer);

  btnContainerDiv.appendChild(fourthAnswer);

  return questionContainerSection;
};

//replace card-container div with game-container div
const startGame = () => {
  //construct the game-container div in js
  const gameDivElement = constructQuestionContainer();

  //remove start-game element
  document.body.removeChild(startGameSection);

  //insert question-container
  document.body.appendChild(gameDivElement);
};

startButtonElement.addEventListener("click", startGame);
