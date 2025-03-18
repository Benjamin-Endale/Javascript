const main = document.getElementsByClassName("faq_container");

let num = main.length;

for (i = 0; i < num; i++) {
  main[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
