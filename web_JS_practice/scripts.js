console.log("Hello, friend.");

function buttonclicked() {
    console.log("Button Clicked");
    alert("YOU ACTUALLY CLICKED!!")
}

var x   =   5;
var y   =   2;

console.log(x * y);

function sum(a, b) {
    return a + b;
}

console.log(sum(x, y));

var sum_function    =   sum;
console.log(sum_function);

function update() {
    console.log("Updating the results...");
    var myInput = document.getElementById("text");
    console.log(myInput.value);
    var myOutput = document.getElementById("output");
    myOutput.innerHTML = myInput.value;
}