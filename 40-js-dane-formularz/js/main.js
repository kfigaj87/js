function displayData() {
  console.log("dziala");

  let nameForm = document.getElementById("name-form");
  let surnameForm = document.getElementById("surname-form");
  let phoneForm = document.getElementById("phone-form");

  let pName = document.getElementById("name");
  pName.innerText = nameForm.value;

  let pSurname = document.getElementById("surname");
  pSurname.innerText = surnameForm.value;

  let pPhone = document.getElementById("phone");
  pPhone.innerText = phoneForm.value;
}
// zdarzenie.praca z interfejsem DOM
let button = document.querySelector("button");

button.addEventListener("click", displayData);
