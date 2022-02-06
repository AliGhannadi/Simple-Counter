let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
console.log("saveEl")

function decrement() {
    count -= 1
    countEl.textContent = count

}

function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0

}