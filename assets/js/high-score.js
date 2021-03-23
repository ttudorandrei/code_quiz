const submitButton = document.getElementById("submit-btn");

const addListItem = (event) => {
  const textValue =
    document.getElementById("name-input").value +
    " " +
    window.localStorage.getItem("score");
  const listNode = document.getElementById("list");
  const liNode = document.createElement("li");
  const txtNode = document.createTextNode(textValue);

  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
  console.log("something");
};

submitButton.addEventListener("click", addListItem());
