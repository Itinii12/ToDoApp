import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの内容受け取り + 初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li タグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 追加する要素
    const addTarget = completeButton.parentNode;
    // まず incomplete からは削除
    deleteFromIncompleteList(addTarget);
    // 追加するテキスト取得
    const text = addTarget.firstElementChild.innerText;
    // div 以下を初期化
    addTarget.textContent = null;
    // li
    const li = document.createElement("li");
    li.innerText = text;
    // button(戻す)生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 戻す要素
      const returnTarget = returnButton.parentNode;
      // まず complete からは削除
      document.getElementById("complete-list").removeChild(returnTarget);
      // 追加するテキスト取得
      const text = returnTarget.firstElementChild.innerText;
      // div 以下を初期化
      returnTarget.textContent = null;
      // li
      const li = document.createElement("li");
      li.innerText = text;

      // div タグの子要素に li を設定
      returnTarget.appendChild(li);
      returnTarget.appendChild(completeButton);
      returnTarget.appendChild(deleteButton);

      document.getElementById("incomplete-list").appendChild(returnTarget);
    });

    // div タグの子要素に li を設定
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);

    // complete list に追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押されたら対応する div を incomplete-list から削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // div タグの子要素に li を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに、作成した div を追加する
  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
