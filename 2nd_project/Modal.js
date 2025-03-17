const findBtn = document.querySelector(".modal_container");
const missingBox = document.querySelector(".missing_Container");
const closeBtn = document.querySelector(".xBtn");

findBtn.addEventListener("click", function () {
  missingBox.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  missingBox.style.display = "none";
});

window.addEventListener("click", function (e) {
  if ((e.target !== missingBox) & (e.target !== findBtn)) {
    missingBox.style.display = "none";
  }
});
