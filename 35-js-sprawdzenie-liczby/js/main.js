let n = 130;

function compare(elements) {
  if (elements >= 100 && elements <= 200) {
    return "Liczba znajduje się w przedziale";
  } else {
    return "Liczba nie znajduje się w przedziale";
  }
}

console.log(compare(n));
