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


for (let i = 0; i < num; i++) {
    let Coordinates = getCoordinates(window.innerWidth - 40 * 2, window.innerHeight - 40 * 2);
    let newSquare = document.createElement("div");
    document.body.insertAdjacentElement("afterend", newSquare)
    console.log(Coordinates);
    newSquare.classList.add ("mySquare")
    newSquare.style.backgroundColor = getColor();
    newSquare.style.transform = `translate(${Coordinates[0]}px, ${Coordinates[1]}px)`
}
}

addSquares (num)
