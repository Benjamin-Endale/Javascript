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
  checkBtn.innerHTML = '<i class=" fa-solid fa-check"></i>';

  CDBtn.appendChild(checkBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class=" fa-solid fa-trash-can"></i>';
  deleteBtn.classList.add("deleteBtn");
  CDBtn.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.innerHTML = '<i class=" fa-solid fa-edit"></i>';

  CDBtn.appendChild(editBtn);

  taskContainer.appendChild(CDBtn);

  if (textarea.value == "") {
    window.alert("You didnt put any task");
  } else {
    container.appendChild(taskContainer);
  }
  textarea.value = null;

  //checkbtn
  let statusCheck = "Noline";
  checkBtn.addEventListener("click", function () {
    const list = checkBtn.parentNode.previousSibling;
    if (statusCheck == "Noline") {
      list.style.textDecoration = "line-through";
      statusCheck = "line";
      checkBtn.innerHTML = '<i class=" crossbtn fa-solid fa-close"></i>';
    } else if (statusCheck == "line") {
      list.style.textDecoration = "none";
      statusCheck = "Noline";
      checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
  });

  //deleteBtn

  deleteBtn.addEventListener("click", function () {
    li.parentNode.remove();
  });

  //edit Btn
  editBtn.addEventListener("click", function () {
    if (li.querySelector("#Edit")) {
      editBtn.innerHTML = '<i class=" fa-solid fa-edit"></i>';
      const textCont = document.querySelector("#Edit");
      const updatedT = textCont.value;
      const originalText = li.getAttribute("data-original");
      if (updatedT.trim() == "") {
        li.innerText = originalText;
      } else {
        li.innerText = updatedT;
        li.setAttribute("data-original", updatedT);
      }
    } else {
      editBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      const originalText = li.innerText;
      li.setAttribute("data-original", originalText);
      li.innerHTML = `<input id = "Edit" type="text" placeholder="Edit task" value = "${originalText}" />`;
    }
  });
});
