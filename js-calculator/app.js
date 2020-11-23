var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var res = document.getElementById('res');
function result(op){

    switch(op){
            case "+":
            res.innerHTML = parseInt(num1.value) + parseInt(num2.value);
            num1.value = "";
            num2.value = "";
            break;
            case "-":
            res.innerHTML = parseInt(num1.value) - parseInt(num2.value);
            num1.value = "";
            num2.value = "";
            break;
            case "/":
            res.innerHTML = parseInt(num1.value) / parseInt(num2.value);
            num1.value = "";
            num2.value = "";
            break;
            case "*":
            res.innerHTML = parseInt(num1.value) * parseInt(num2.value);
            num1.value = "";
            num2.value = "";
            break;
        }
}
