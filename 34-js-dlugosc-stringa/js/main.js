let string1 = "Uwielbiam JavaScript";
let string2 = "Jestem świetnym programistą";

function longerString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else if (str1.length < str2.length) {
    return str2;
  } else {
    return "Stringi są równe";
  }
}

let result = longerString(string1, string2);

console.log(result);
