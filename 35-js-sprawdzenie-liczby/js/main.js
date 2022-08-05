let n = 130;
let x = 100;
let y = 200;
function compare(elemens) {
  if (n >= x && n <= y) {
    return "Liczba znajduje się w przedziale";
  } else {
    return "Liczba nie znajduje się w przedziale";
  }
}
let result = compare(n);

console.log(result);
