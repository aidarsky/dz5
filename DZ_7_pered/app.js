
//////....сложение..../////

    function plus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
    }


//////....вычитание..../////

function minus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
    }


//////....деление..../////

function deleinie() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
    }

    //////....умножение..../////

function umnoj() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
    }


