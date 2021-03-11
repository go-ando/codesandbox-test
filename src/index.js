import "./styles.css";

const onClickAdd = () => {
  //テキストボックス初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //親タグ削除
    deleteFromIncompleteList(complateButton.parentNode);
    //完了リストに追加
    const addTarget = complateButton.parentNode;
    //内容取得
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    //li生成
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //親タグ完了リストから削除
      const deleteButton = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteButton);
      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //親タグ削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  //console.log(deleteButton);

  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
