import "./styles.css";

const onClickAdd = () => {
  //テキストボックス初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  div.appendChild(li);
  //console.log(li);
  document.getElementById("incomplate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
