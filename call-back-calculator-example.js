    function displayResult(result)
    {
        console.log(result);
    }
    function calculator(firstNumber,secondNumber,callback)
    {
        let result=firstNumber+secondNumber;
        callback(result);
    }
    calculator(23,22,displayResult);