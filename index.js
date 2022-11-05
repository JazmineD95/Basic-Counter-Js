
let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count

}

function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0

}




