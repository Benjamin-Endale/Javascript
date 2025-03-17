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
