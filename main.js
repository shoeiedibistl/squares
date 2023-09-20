function getRandomNumber (min, max) {
    let res = min + Math.random() * (max + 1 - min);
    return Math.floor(res);
}

function getColor () {
    let r = getRandomNumber(0, 255);
    let g = getRandomNumber(0, 255);
    let b = getRandomNumber(0, 255);
    
    let opacity = getRandomNumber(1, 10) / 10;

    return [`rgb(${r}, ${g}, ${b})`, opacity]
}

function getCoordinates(myWidth, myHeight) {
    let x = getRandomNumber(0, myWidth);
    let y = getRandomNumber(0, myHeight);

    return [x, y]
}

function getOpacity () {
}

const num = getRandomNumber(10, 100);

function addSquares (num) {
    const parent = document.querySelector(".div")
    let coordinates
    let color

    for (let i = 0; i < num; i++) {
        let newSquare = document.createElement("div");
        color = getColor ()
        coordinates = getCoordinates(window.innerWidth - 40, window.innerHeight - 40);
        parent.append(newSquare)
        newSquare.classList.add ("mySquare");
        newSquare.style.backgroundColor = color[0];
        newSquare.style.opacity = color[1];
        newSquare.style.transform = `translate(${coordinates[0]}px, ${coordinates[1]}px)`
    }
}

addSquares (num)
