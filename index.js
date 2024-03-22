var display = document.getElementById("display");


function keypress(key) {
    display.innerHTML += key; 
}
function allClear() {
    display.innerHTML = "";
}
function calculate() {
    display.innerHTML = eval(display.innerHTML);
}
function backspace() {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
}
