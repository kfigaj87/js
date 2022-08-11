let pValue = document.getElementById("tekst").innerHTML,
  p = document.getElementById("tekst");

function switchParagraph1() {
  p.innerHTML = "Coś się zaczyna";
}

document.getElementById("dodaj").addEventListener("click", switchParagraph1);

function switchParagraph2() {
  p.innerHTML = "";
}

document.getElementById("usun").addEventListener("click", switchParagraph2);
