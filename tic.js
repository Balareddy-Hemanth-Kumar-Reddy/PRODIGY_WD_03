let p1, p2
let matrix = [
    {
        one: "",
        two: "",
        three: ""
    },
    {
        one: "",
        two: "",
        three: ""
    },
    {
        one: "",
        two: "",
        three: ""
    }
]

let count
let allowDataToEdit = true

let p1Wins = "P1 Wins"
let p2Wins = "P2 Wins"


let p1Symbol = 'O'
let p2Symbol = 'X'


const resultElement = document.getElementById('tic-result')
resultElement.style.color = 'green'
var p1Element = document.getElementById('p1');
var p2Element = document.getElementById('p2');
const resetButton = document.getElementById('reset-btn')

const oneOneData = document.getElementById('left-one')
const oneTwoData = document.getElementById('middle-one')
const oneThreeData = document.getElementById('right-one')

const twoOneData = document.getElementById('left-two')
const twoTwoData = document.getElementById('middle-two')
const twoThreeData = document.getElementById('right-two')

const threeOneData = document.getElementById('left-three')
const threeTwoData = document.getElementById('middle-three')
const threeThreeData = document.getElementById('right-three')

console.log("oneOneData", oneOneData)
console.log("oneTwoData", oneTwoData)
console.log("oneThreeData", oneThreeData)

console.log("twoOneData", twoOneData)
console.log("twoTwoData", twoTwoData)
console.log("twoThreeData", twoThreeData)

console.log("threeOneData", threeOneData)
console.log("threeTwoData", threeTwoData)
console.log("twoThreeData", twoThreeData)


const insertData = (dataPart, playerSymbol) => {
    if (dataPart.includes("left") && dataPart.includes("one")) matrix[0].one = playerSymbol;
    else if (dataPart.includes("middle") && dataPart.includes("one")) matrix[0].two = playerSymbol;
    else if (dataPart.includes("right") && dataPart.includes("one")) matrix[0].three = playerSymbol;
    else if (dataPart.includes("left") && dataPart.includes("two")) matrix[1].one = playerSymbol
    else if (dataPart.includes("middle") && dataPart.includes("two")) matrix[1].two = playerSymbol
    else if (dataPart.includes("right") && dataPart.includes("two")) matrix[1].three = playerSymbol
    else if (dataPart.includes("left") && dataPart.includes("three")) matrix[2].one = playerSymbol
    else if (dataPart.includes("middle") && dataPart.includes("three")) matrix[2].two = playerSymbol
    else if (dataPart.includes("right") && dataPart.includes("three")) matrix[2].three = playerSymbol
}
console.log(allowDataToEdit)


document.addEventListener('DOMContentLoaded', function () {

    // if (!allowDataToEdit) {
    //     return
    // }

    document.querySelectorAll('td').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            if (!allowDataToEdit) {
                return
            }


            if (p1Element.className === 'active') {
                if (link.innerHTML != '') return
                link.innerHTML = p1Symbol
                p1Element.className = 'inactive'
                p2Element.className = 'active'
                insertData(link.className, p1Symbol)
            } else {
                if (link.innerHTML != '') return
                link.innerHTML = p2Symbol
                p1Element.className = 'active'
                p2Element.className = 'inactive'
                insertData(link.className, p2Symbol)
            }

            // console.log(matrix)
            checkResult("p1")
            checkResult("p2")
        });
    });
});

const checkResult = (player) => {
    count = 0;
    if (player === 'p1') {
        if (matrix[0].one === p1Symbol && matrix[0].two === p1Symbol && matrix[0].three === p1Symbol) {
            resultElement.innerHTML = p1Wins
            allowDataToEdit = false
            oneOneData.classList.add('winner-data')
            oneTwoData.classList.add('winner-data')
            oneThreeData.classList.add('winner-data')
            return
        } else if (matrix[1].one === p1Symbol && matrix[1].two === p1Symbol && matrix[1].three === p1Symbol) {
            resultElement.innerHTML = p1Wins
            allowDataToEdit = false
            twoOneData.classList.add('winner-data')
            twoTwoData.classList.add('winner-data')
            twoThreeData.classList.add('winner-data')
            return
        } else if (matrix[2].one === p1Symbol && matrix[2].two === p1Symbol && matrix[2].three === p1Symbol) {
            resultElement.innerHTML = p1Wins
            allowDataToEdit = false
            threeOneData.classList.add('winner-data')
            threeTwoData.classList.add('winner-data')
            threeThreeData.classList.add('winner-data')
            return
        } else if (matrix[0].one === p1Symbol && matrix[1].one === p1Symbol && matrix[2].one === p1Symbol) {
            resultElement.innerHTML = p1Wins
            allowDataToEdit = false
            oneOneData.classList.add('winner-data')
            twoOneData.classList.add('winner-data')
            threeOneData.classList.add('winner-data')
            return



        } else if (matrix[0].two === p1Symbol && matrix[1].two === p1Symbol && matrix[2].two === p1Symbol) {
            resultElement.innerHTML = p1Wins
            allowDataToEdit = false
            oneTwoData.classList.add('winner-data')
            twoTwoData.classList.add('winner-data')
            threeTwoData.classList.add('winner-data')
            return

        } else if (matrix[0].three === p1Symbol && matrix[1].three === p1Symbol && matrix[2].three === p1Symbol) {
            resultElement.innerHTML = p1Wins
            allowDataToEdit = false

            oneThreeData.classList.add('winner-data')
            twoThreeData.classList.add('winner-data')
            threeThreeData.classList.add('winner-data')
            return
        } else if (matrix[0].one === p1Symbol && matrix[1].two === p1Symbol && matrix[2].three === p1Symbol) {
            resultElement.innerHTML = p1Wins
            allowDataToEdit = false

            oneOneData.classList.add('winner-data')
            twoTwoData.classList.add('winner-data')
            threeThreeData.classList.add('winner-data')
            return
        } else if (matrix[0].three === p1Symbol && matrix[1].two === p1Symbol && matrix[2].one === p1Symbol) {
            resultElement.innerHTML = p1Wins
            allowDataToEdit = false

            oneThreeData.classList.add('winner-data')
            twoTwoData.classList.add('winner-data')
            threeOneData.classList.add('winner-data')
            return
        }
    } else if (player === 'p2') {
        if (matrix[0].one === p2Symbol && matrix[0].two === p2Symbol && matrix[0].three === p2Symbol) {
            resultElement.innerHTML = p2Wins
            allowDataToEdit = false

            oneOneData.classList.add('winner-data')
            oneTwoData.classList.add('winner-data')
            oneThreeData.classList.add('winner-data')
            return
        } else if (matrix[1].one === p2Symbol && matrix[1].two === p2Symbol && matrix[1].three === p2Symbol) {
            resultElement.innerHTML = p2Wins
            allowDataToEdit = false

            twoOneData.classList.add('winner-data')
            twoTwoData.classList.add('winner-data')
            twoThreeData.classList.add('winner-data')
            return
        } else if (matrix[2].one === p2Symbol && matrix[2].two === p2Symbol && matrix[2].three === p2Symbol) {
            resultElement.innerHTML = p2Wins
            allowDataToEdit = false

            threeOneData.classList.add('winner-data')
            threeTwoData.classList.add('winner-data')
            threeThreeData.classList.add('winner-data')
            return
        } else if (matrix[0].one === p2Symbol && matrix[1].one === p2Symbol && matrix[2].one === p2Symbol) {
            resultElement.innerHTML = p2Wins
            allowDataToEdit = false

            oneOneData.classList.add('winner-data')
            twoOneData.classList.add('winner-data')
            threeOneData.classList.add('winner-data')
            return

        } else if (matrix[0].two === p2Symbol && matrix[1].two === p2Symbol && matrix[2].two === p2Symbol) {
            resultElement.innerHTML = p2Wins
            allowDataToEdit = false

            oneTwoData.classList.add('winner-data')
            twoTwoData.classList.add('winner-data')
            threeTwoData.classList.add('winner-data')
            return
        } else if (matrix[0].three === p2Symbol && matrix[1].three === p2Symbol && matrix[2].three === p2Symbol) {
            resultElement.innerHTML = p2Wins
            allowDataToEdit = false


            oneThreeData.classList.add('winner-data')
            twoThreeData.classList.add('winner-data')
            threeThreeData.classList.add('winner-data')
            return
        } else if (matrix[0].one === p2Symbol && matrix[1].two === p2Symbol && matrix[2].three === p2Symbol) {
            resultElement.innerHTML = p2Wins
            allowDataToEdit = false

            oneOneData.classList.add('winner-data')
            twoTwoData.classList.add('winner-data')
            threeThreeData.classList.add('winner-data')
            return
        } else if (matrix[0].three === p2Symbol && matrix[1].two === p2Symbol && matrix[2].one === p2Symbol) {
            resultElement.innerHTML = p2Wins
            allowDataToEdit = false

            oneThreeData.classList.add('winner-data')
            twoTwoData.classList.add('winner-data')
            threeOneData.classList.add('winner-data')
            return
        }
    }

    matrix.forEach((row) => {
        Object.values(row).forEach((data) => {
            if (data === '') {
                return; // This will exit the inner forEach loop, not the checkResult function
            }
            count++; // Increment count if data is not empty
        });
    });

    // console.log("count", count);
    if (count === 9) {
        if(allowDataToEdit) resultElement.innerHTML = "Draw"; // This line will always execute regardless of count value
    }
}

// if(resultElement.innerHTML==='Draw' || resultElement.innerHTML===p1Wins || resultElement.innerHTML===p2Wins){
//     allowDataToEdit=false
// }

resetButton.onclick = () => {
    location.reload()
    // document.querySelectorAll('td').forEach(link => {
    //     link.innerHTML = ''
    // })
    // resultElement.innerHTML = ''
    // p1Element.className = 'active'
    // p2Element.className = 'inactive'
    // count = 0
    // allowDataToEdit = true
    // oneOneData.classList.remove('winner-data')
    // oneTwoData.classList.remove('winner-data')
    // oneThreeData.classList.remove('winner-data')

    // twoOneData.classList.remove('winner-data')
    // twoTwoData.classList.remove('winner-data')
    // twoThreeData.classList.remove('winner-data')

    // threeOneData.classList.remove('winner-data')
    // threeTwoData.classList.remove('winner-data')
    // threeThreeData.classList.remove('winner-data')
}


