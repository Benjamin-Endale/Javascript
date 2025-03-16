// // getelementbyid;
// // getelementbytagname;
// // getelementbyclassname;
// // queryselector;
// // queryselectorall;

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

// const reveal = document.querySelector(".Reveal");
// const content = document.querySelector(".hidden_content");
// const revealBtn = document.querySelector("#Revealbtn");
// const originalText = revealBtn.innerText;

// function revealContent() {
//   if (content.classList.contains("open")) {
//     content.classList.remove("open");
//     revealBtn.innerText = originalText;
//   } else {
//     content.classList.add("open");
//     revealBtn.innerText = "Show less";
//   }
// }

// reveal.addEventListener("click", revealContent);

// document.querySelector;

// // Event Propagation

// document.querySelector(".div_2").addEventListener(
//   "click",
//   function () {
//     console.log("Div 2");
//   },
//   false
// );
// document.querySelector(".div_1").addEventListener(
//   "click",
//   function () {
//     console.log("Div 2");
//   },
//   false
// );

// document.querySelector(".targetBtn").addEventListener(
//   "click",
//   function (e) {
//     console.log(e.target);
//   },
//   false
// );

// // Event Delegation

// document.querySelector(".EventD").addEventListener("click", function (e) {
//   console.log(e);

//   // this is fun to try, it changes all the li elements to chocolate color if you click on any of them
//   // if (target.matches("li")) {
//   //   target.style.backgroundColor = "chocolate";
//   // }
// });

const quote = document.querySelector("#Quote");
const persontxt = document.querySelector("#persontxt");
const changeBtn = document.querySelector("#Btn");

const quotes = [
  {
    quote: "Half finished work generally proves to be labor lost.",
    person: "Abrahem Lincoln",
  },
  {
    quote: "All the worlds a stage, and all the men and women merely players.",
    person: "William Shakespeare",
  },
  {
    quote:
      "Ask not what your country can do for you; ask what you can do for your country.",
    person: "John Kennedy",
  },
  {
    quote: "Ask, and it shall be given you; seek, and you shall find.",
    person: "The Bible",
  },
  {
    quote:
      "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    person: "Martin Luther King",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person: "Albert Einstein",
  },
  {
    quote: "Power corrupts; absolute power corrupts absolutely.",
    person: "John Dalberg-Acton",
  },
  {
    quote: "Thats one small step for a man, a giant leap for mankind.",
    person: "Neil Armstrong",
  },
  {
    quote: "The love of money is the root of all evil.",
    person: "the Bible",
  },
  {
    quote: "Whatever you are, be a good one.",
    person: "Abraham Lincoln",
  },
  {
    quote:
      "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    person: "Abraham Lincoln",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    person: "Mahatma Gandhi",
  },
  {
    quote: "It is better to light a single candle than to curse the darkness.",
    person: "Confucius ",
  },
  {
    quote: "Life is what happens when youre busy making other plans.",
    person: "John Lennon",
  },
  {
    quote: "You miss 100% of the shots you dont take.",
    person: "Wayne Gretzky ",
  },
];

changeBtn.addEventListener("click", function () {
  let randomNr = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randomNr].quote;
  persontxt.innerText = quotes[randomNr].person;
});
