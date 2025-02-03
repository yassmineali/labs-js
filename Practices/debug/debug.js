function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
                    let multiplyresult = multiply(num1, num2);
                    let addresult = add(num1,num2);
                    let devideresult = devide(num1,num2);
                    debugger;
                    displayResult(`Addition: ${addresult}, Multiplication: ${multiplyresult}, Division: ${devideresult}`);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }
            function multiply(a, b) {
                debugger;
                return a * b;
            }
            function add(a,b){
                debugger;
                return a + b;
            }
            function devide(a,b){
                debugger;
                if(b !== 0){
                    return a / b;
                }else{
                    return null;
                }
            }
            function displayResult(result) {
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result is: ${result}`;
            }