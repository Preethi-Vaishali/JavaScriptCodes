let display = document.getElementById("display");

function appendNumber(number) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    let lastChar = display.innerText.slice(-1);
    if (!isNaN(lastChar) || lastChar === '.') {
        display.innerText += operator;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

function calculate() {
    try {
        let result = eval(display.innerText);
        display.innerText = result % 1 !== 0 ? result.toFixed(2) : result;
    } catch (error) {
        display.innerText = "Error";
    }
}
