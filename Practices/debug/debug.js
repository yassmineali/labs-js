function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
                    let product = num1 * num2;
                    let sum = num1 + num2;
                    let devision = num2 !== 0 ? num1 / num2 : "cannot devide by zero";
                    debugger;
                    console.log(`Sum: ${sum}, Product: ${product}, Division: ${devision}`);
                    displayResult(sum,product,devision);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }
            function displayResult(sum,product,devision) {
                const resultElement = document.getElementById('result');
                resultElement.innerHTML = `
                <strong>Results:</strong><br>
                Addition: ${sum} <br>
                Multiplication: ${product} <br>
                Devision: ${devision}`;
            }