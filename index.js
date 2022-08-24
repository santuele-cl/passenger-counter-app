let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//==== ADDED FEATURE ====
let totalCountEl = document.getElementById("total-count-el")
let totalCount = 0
//==== ADDED FEATURE ====


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // Cannot save entry if it is 0
    if ( count != 0 ) {
        //==== ADDED FEATURE ====
        totalCount += count    
        totalCountEl.textContent = totalCount
        //==== ADDED FEATURE ====

        let countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    } 
}

function decrement() {
    // Cannot decrease count if it is already 0
    if (count != 0 ) {
        count -= 1
        countEl.textContent = count
    }
    
}

function reset() {
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    totalCountEl.textContent = 0
    totalCount = 0
}

