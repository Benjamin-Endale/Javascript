// getelementbyid
//getelementbytagname
//getelementbyclassname
//queryselector
//queryselectorall

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
