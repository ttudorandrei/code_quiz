const addListItem = () => {
  const textValue =
    window.localStorage.getItem("name") +
    " " +
    window.localStorage.getItem("score");
  const listNode = document.getElementById("list");
  const liNode = document.createElement("li");
  const txtNode = document.createTextNode(textValue);

  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
  console.log("something");
};

window.onload = addListItem();

const clearUnusedStorage = () => {
  window.localStorage.removeItem("score");
  window.localStorage.removeItem("name");
};

// let createDataArray = () => {
//   let formData = {};
//   formData.name = document.getElementById("name-input").value;
//   formData.score = window.localStorage.getItem("score");

//   let formDataArray = localStorage.getItem("formDataArray") || [];

//   formDataArray.push(formData);
// };
