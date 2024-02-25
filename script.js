function add(x,y) {
    return x+y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    return x/y;
}

function operate(x,y,op) {
    if (op=="x") {
        return multiply(x,y);
    }
    else if (op=="-") {
        return subtract(x,y);
    }
    else if (op=="+") {
        return add(x,y);
    }
    else if (op=="/") {
        return divide(x,y);
    }
}

let x = "";
let y = ""; 
let stage = 0; 
let operator = "";
let display = document.getElementById("display");

const numButtons = document.getElementsByClassName("num"); 
i=0;
while (i<numButtons.length) {
    numButtons[i].addEventListener("click", function() {
        if (stage==0) {
            x+=this.innerHTML;
            display.innerHTML += this.innerHTML;
        }
        else {
            y+=this.innerHTML;
            display.innerHTML += this.innerHTML;
        }
    })
    i++;
}

const opButtons = document.getElementsByClassName("op");
i=0;
while (i<opButtons.length) {
    opButtons[i].addEventListener("click", function() {
        stage+=1;
        operator = this.innerHTML;
        display.innerHTML+=operator;
    })
    i++;
}

let equalsButton = document.getElementsByClassName("equals");
equalsButton[0].addEventListener("click", function() {
    let result = operate(parseInt(x),parseInt(y),operator);
    display.innerHTML+="="+result
})

let acButton = document.getElementsByClassName("clear");
acButton[0].addEventListener("click", function () {
    x="";
    y="";
    stage=0;
    operator="";
    display.innerHTML = "";
})

