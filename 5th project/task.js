const addBtn = document.getElementById("addBtn");
let textarea = document.getElementById("txtArea");

addBtn.addEventListener("click", function () {
  const x = textarea.value;
  console.log(x);
});
