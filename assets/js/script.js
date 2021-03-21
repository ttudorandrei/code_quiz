const startButtonElement = document.getElementById("start-btn");

const constructQuestionContainer = () => {
  const questionContainerDiv = document.createElement("div");
  questionContainerDiv.setAttribute("class", "question-container");

  const questionDiv = document.createElement("h1");
  questionDiv.setAttribute("class", "question");

  questionDiv.textContent =
    "plain text container words differnet language car automobile honda technology ideatur lorem ipsum javascript questions random text question anwer samd etcetera";

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

  document.getElementById("wrapper").appendChild(questionContainerDiv);

  questionContainerDiv.appendChild(questionDiv);

  questionContainerDiv.appendChild(btnContainerDiv);

  btnContainerDiv.appendChild(firstAnswer);

  btnContainerDiv.appendChild(secondAnswer);

  btnContainerDiv.appendChild(thirdAnswer);

  btnContainerDiv.appendChild(fourthAnswer);

  return questionContainerDiv;
};

const startGame = () => {
  //replace card-container div with game-container div

  //construct the game-container div in js
  const gameDivElement = constructQuestionContainer();

  console.log(gameDivElement);
  document.getElementById("wrapper").appendChild(gameDivElement);
};

startButtonElement.addEventListener("click", startGame);
