/* Inputs */
const customInput = document.querySelector(".custom")
const maxInput = document.querySelector(".max")
const minInput = document.querySelector(".min")

/* Buttons */
const incrementBtn = document.querySelector(".increment")
const decrementBtn = document.querySelector(".decrement")
const resetBtn = document.querySelector(".reset")
const saveBtn = document.querySelector(".save")
const loadBtn = document.querySelector(".load")

const counterDisplay = document.querySelector(".counter")

let customIncrement = 1;
customInput.addEventListener("input", (event) => {
    customIncrement = Number(event.target.value);
})

let max = 10000;
maxInput.addEventListener("input", (event) => {
    max = Number(event.target.value);
})

let min = -10000;
minInput.addEventListener("input", (event) => {
    min = Number(event.target.value);
})

incrementBtn.addEventListener('click', () => {
    let value = Number(counterDisplay.innerHTML) + customIncrement;
    if(value > max) {
        counterDisplay.classList.add('error');
        setTimeout(() => counterDisplay.classList.remove('error'), 820);
    } else {
        counterDisplay.innerHTML = value;
    }
})

decrementBtn.addEventListener('click', () => {
    let value = Number(counterDisplay.innerHTML) - customIncrement;
    if(value < min) {
        counterDisplay.classList.add('error');
        setTimeout(() => counterDisplay.classList.remove('error'), 820);
    } else {
        counterDisplay.innerHTML = value;
    }
})

resetBtn.addEventListener('click', () => {
    let answer = prompt("Type in 'Yes' to confirm.")

    if(answer == "Yes") {
        counterDisplay.innerHTML = 0;
    }
})

saveBtn.addEventListener('click', () => {
    localStorage.setItem('counter', counterDisplay.textContent)
    alert("Successfully saved counter value.")
})

loadBtn.addEventListener('click', () => {
    const storedCount = localStorage.getItem('counter')
    if(storedCount) {
        counterDisplay.innerHTML = storedCount
    }
})