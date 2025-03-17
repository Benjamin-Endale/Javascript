const findBtn = document.querySelector("#FindBtn");
const missingBox = document.querySelector(".missing_Container");
const closeBtn = document.querySelector(".xBtn");
const missingTxt = document.querySelector(".missingTxt");

findBtn.addEventListener("click", function () {
  missingBox.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  missingBox.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (
    (e.target !== missingBox) &
    (e.target !== findBtn) &
    (e.target !== missingTxt)
  ) {
    missingBox.style.display = "none";
  }
});
