//Restaurant Tip Calculator
const button = document.querySelector("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input");
button.innerHTML = "Calculate Tip!";

button.addEventListener("click", function(){
    let tip = cost.value * 0.15;
    let tipMessage = `<h1>You should tip $${tip.toFixed(2)} on $${ cost.value} </h1>`;
    output.innerHTML = tipMessage;
});
