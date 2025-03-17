// const myItems = document.querySelectorAll(".list_items");
// console.log(myItems);

// for (i = 0; i < myItems.length; i++) {
//   myItems[i].style.fontSize = "1rem";
// }

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// const li2 = document.createElement("li");

// ul.append(li);
// ul.append(li2);

// li.innerText = "Attack On Titan";
// li2.innerText = "One piece";

// li.setAttribute("class", "list_items");
// li2.setAttribute("class", "list_items");

// console.log(ul);

// const box_1 = document.querySelector(".box-1");

// function changeBgcolor() {
//   box_1.style.backgroundColor = "burlywood";
// }

// box_1.addEventListener("mouseover", changeBgcolor);

const reveal = document.querySelector(".Reveal");
const content = document.querySelector(".hidden_content");
const revealBtn = document.querySelector("#Revealbtn");
const originalText = revealBtn.innerText;

function revealContent() {
  if (content.classList.contains("open")) {
    content.classList.remove("open");
    revealBtn.innerText = originalText;
  } else {
    content.classList.add("open");
    revealBtn.innerText = "Show less";
  }
}

reveal.addEventListener("click", revealContent);

// Event Propagation

document.querySelector(".div_2").addEventListener(
  "click",
  function () {
    console.log("Div 2");
  },
  false
);
document.querySelector(".div_1").addEventListener(
  "click",
  function () {
    console.log("Div 2");
  },
  false
);

document.querySelector(".targetBtn").addEventListener(
  "click",
  function (e) {
    console.log(e.target);
  },
  false
);

// Event Delegation

document.querySelector(".EventD").addEventListener("click", function (e) {
  console.log(e);

  // this is fun to try, it changes all the li elements to chocolate color if you click on any of them
  // if (target.matches("li")) {
  //   target.style.backgroundColor = "chocolate";
  // }
});
