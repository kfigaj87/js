function switchParagraph1() {
  let pValue = document.getElementById("tekst").innerHTML,
    p = document.getElementById("tekst");
  switch (pValue) {
    case "Coś się zaczyna":
      p.innerHTML = "Coś się zaczyna";
      break;
    default:
      p.innerHTML = "Coś się zaczyna";
  }
}

document.getElementById("dodaj").addEventListener("click", switchParagraph1);

function switchParagraph2() {
  let pValue = document.getElementById("tekst").innerHTML,
    p = document.getElementById("tekst");
  switch (pValue) {
    case "":
      p.innerHTML = "";
      break;
    default:
      p.innerHTML = "";
  }
}

document.getElementById("usuń").addEventListener("click", switchParagraph2);
