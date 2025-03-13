// getelementbyid
//getelementbytagname
//getelementbyclassname
//queryselector
//queryselectorall

const myItems = document.querySelectorAll(".list_items");
console.log(myItems);

for (i = 0; i < myItems.length; i++) {
  myItems[i].style.fontSize = "1rem";
}

const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);

li.innerText = "Attack On Titan";

li.setAttribute("class", "list_items");
