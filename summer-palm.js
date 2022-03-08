/* This javascript makes an information box that shows the color
of the area clicked on the svg. */

const allColors = {
    st0: "English Vermillion",
    st1: "Jasper Orange",
    st2: "Royal Orange",
    st3: "Orange-Yellow",
    st4: "Middle Green Yellow",
    st5: "Dollar Bill",
    st6: "Green Sheen",
    st7: "Jelly Bean Blue",
    st8: "Deep Space Sparkle",
    st9: "Bistre"
}

const summerPalm = document.querySelector("svg");
const boxes = document.querySelector(".boxes");

summerPalm.addEventListener('click', newColorBox);

function newColorBox(e) {
    let box = createNewElement(e);
    setLocation(box, e);
    appendBox(box);
}
function createNewElement(e) {
    // create the info box container
    const newBoxDiv = document.createElement('div');
    newBoxDiv.classList.add("info-box");

    // create the color name
    const newParagaraph = document.createElement('p');
    let color = e.target.getAttribute("class");
    newParagaraph.innerHTML = (allColors[color]);

    // create the colored box
    const newSquare = document.createElement('div');
    newSquare.classList.add("color-box");
    newSquare.classList.add(color);

    // append name and colored box to info box
    newBoxDiv.appendChild(newParagaraph);
    newBoxDiv.appendChild(newSquare);

    return newBoxDiv;
}

function setLocation(box, e) {
    let offset = parseInt(e.target.getAttribute("class").slice(2));
    let top = 0.5 + offset;
    box.style.top = top+"rem";
    box.style.left = 50+"vw";
    box.style.opacity = 1;
}
function appendBox(box) {
    boxes.appendChild(box);
}


