function clearDisplay() {
    document.getElementById('result').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('result').innerText;
    if (display.length > 1) {
        document.getElementById('result').innerText = display.slice(0, -1);
    } else {
        document.getElementById('result').innerText = '0';
    }
}

function appendToDisplay(value) {
    let display = document.getElementById('result').innerText;
    if (display === '0') {
        document.getElementById('result').innerText = value;
    } else {
        document.getElementById('result').innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('result').innerText;
    try {
        let result = eval(display);
        document.getElementById('result').innerText = result;
    } catch (e) {
        document.getElementById('result').innerText = 'Error';
    }
}
