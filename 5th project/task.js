const addBtn = document.getElementById("addBtn");
let textarea = document.getElementById("txtArea");

addBtn.addEventListener("click", function () {
  const container = document.querySelector(".added_tasks");
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  let li = document.createElement("li");
  li.innerText = `${textarea.value}`;
  li.classList.add("taskList");

  taskContainer.appendChild(li);

  let CDBtn = document.createElement("div");
  CDBtn.classList.add("taskButtons");

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("checkBtn");
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

  CDBtn.appendChild(checkBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.classList.add("deleteBtn");
  CDBtn.appendChild(deleteBtn);

  taskContainer.appendChild(CDBtn);

  if (textarea.value == "") {
    window.alert("You didnt put any task");
  } else {
    container.appendChild(taskContainer);
  }
  textarea.value = null;

  //checkbtn

  checkBtn.addEventListener("click", function () {
    const list = checkBtn.parentNode.previousSibling;
    list.style.textDecoration = "line-through";
  });
});
