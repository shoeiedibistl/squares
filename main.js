function getNumberOfSquares (min, max) {
    let res = min + Math.random() * (max + 1 - min);
    return Math.floor(res);
}

function getColor () {
    let r = Math.floor(Math.random() * (255 + 1));
    let g = Math.floor(Math.random() * (255 + 1));
    let b = Math.floor(Math.random() * (255 + 1));

    return `rgb(${r}, ${g}, ${b})`
}

function getCoordinates(myWidth, myHeight) {
    let x = Math.floor(Math.random() * (myWidth + 1));
    let y = Math.floor(Math.random() * (myHeight + 1));

    return [x, y]
}

const num = getNumberOfSquares(10, 100);

function addSquares (num) {

    const parent = document.querySelector(".div")

    let coordinates

    for (let i = 0; i < num; i++) {
        let newSquare = document.createElement("div");
        coordinates = getCoordinates(window.innerWidth - 40, window.innerHeight - 40);
        parent.append(newSquare)
        newSquare.classList.add ("mySquare")
        newSquare.style.backgroundColor = getColor();
        newSquare.style.transform = `translate(${coordinates[0]}px, ${coordinates[1]}px)`
    }
}

addSquares (num)
