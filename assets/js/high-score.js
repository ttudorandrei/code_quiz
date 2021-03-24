const listNode = document.getElementById("list");

// creates a list entry that contains user name and score
const addListItem = () => {
  const textValue =
    window.localStorage.getItem("name") +
    " " +
    window.localStorage.getItem("score");
  const liNode = document.createElement("li");
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
