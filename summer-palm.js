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
const boxContainer = document.querySelector(".box-container");

summerPalm.addEventListener('click', showBox);

function showBox(e) {
    // if there is already a box, remove it
    if (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.firstChild)
    };

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

    // center info box on click coordinates
}

