const listNode = document.getElementById("list");

const getNameFromLocalStorage = () => {
  const name = window.localStorage.getItem("name");
  if (name) {
    return name;
  } else {
    return [];
  }
};

const getScoreFromLocalStorage = () => {
  const highScore = window.localStorage.getItem("score");
  if (highScore) {
    return highScore;
  } else {
    return [];
  }
};

// creates a list entry that contains user name and score
const addListItem = () => {
  const textValue =
    getNameFromLocalStorage() + " " + getScoreFromLocalStorage();
  const liNode = document.createElement("div");
  const txtNode = document.createTextNode(textValue);

  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
};

//creates a list item containing the name and score of the player
window.onload = addListItem();

const clearUnusedStorage = () => {
  window.localStorage.removeItem("score");
  window.localStorage.removeItem("name");
  location.reload();
};

document
  .getElementById("submit-btn")
  .addEventListener("click", clearUnusedStorage);
