// script.js
function printsum() {
 let numb1 = parseFloat(document.getElementById("number1").value);
 let numb2 = parseFloat(document.getElementById("number2").value);
 let c = numb1 + numb2;
    document.getElementById('span').textContent = c;
  }
