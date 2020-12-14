const progress = []

const play = (clickedId) => {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if(playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = "x"
        progress[clickedId] = "x"
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'o'
        progress[clickedId] = 'o'
    }

console.log(progress)
//board placement
const topLeft = progress[0]
const topMid = progress[1]
const topRight = progress[2]
const midLeft = progress[3]
const mid = progress[4]
const midRight = progress[5]
const bottomLeft = progress[6]
const bottomMid = progress[7]
const bottomRight = progress[8]
//checking winning combos
if(topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
    alert(`${topLeft} is the winner`)
    return
}
if(topMid !== undefined && topMid === mid && topMid === bottomMid) {
    alert(`${topMid} is the winner`)
    return
}
if(topRight !== undefined && topRight === midRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`)
    return
}
if(topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`)
    return
}
if(midLeft !== undefined && midLeft === mid && midLeft === midRight) {
    alert(`${midLeft} is the winner`)
    return
}
if(bottomLeft !== undefined && bottomLeft === bottomMid && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`)
    return
}
if(topLeft !== undefined && topLeft === mid & topLeft === bottomRight) {
    alert(`${topLeft} is the winner`)
    return
}
if(topRight !== undefined && topRight === mid && topRight === bottomLeft) {
    alert(`${topRight} is the winner`)
    return
}
//checking for tie
let boardFull = true
for(let i = 0; i <= 8; i++) {
    if( progress[i] === undefined) {
        boardFull = false
    }  
}
    if(boardFull === true) {
        alert("CAT'S GAME")
    }
}