let paragraph = document.getElementById("opis-wyswietlenie");

let button = document.querySelector("button");

button.onclick = function () {
  paragraph.innerText = "it is alive!!!!!";
};
console.log(paragraph);
console.log(button);
