let a;
let b;
let c;
function calculateAmount() {
 a = parseFloat(document.getElementById('Grocery-1').value);
 b = parseFloat(document.getElementById('Grocery-2').value);
 c = parseFloat(document.getElementById('Grocery-3').value);

let res = a + b + c;
 document.getElementById('result').innerText = `The total amount is: ${ res}`;
}