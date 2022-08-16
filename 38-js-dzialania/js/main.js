let element1 = 58;
let element2 = 12;

function action(num1, num2) {
  let suma = num1 + num2;
  let roznica = num1 - num2;
  let iloczyn = num1 * num2;

  if (suma >= 0) {
    console.log("Wynik dodawania wynosi " + suma);
  } else {
    console.log("Wynik jest nieprawidłowy");
  }
  if (roznica >= 0) {
    console.log("Wynik odejmowania wynosi " + roznica);
  } else {
    console.log("Wynik jest nieprawidłowy");
  }
  if (iloczyn >= 0) {
    console.log("Wynik mnożenia wynosi " + iloczyn);
  } else {
    console.log("Wynik jest nieprawidłowy");
  }
}

action(element1, element2);
