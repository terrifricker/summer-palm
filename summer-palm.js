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
const infoBox = document.querySelector(".info-box");
const colorName = document.querySelector(".color-name");
const colorBox = document.querySelector("#color-box");
const centerTop = window.getComputedStyle(infoBox).getPropertyValue('top');
const centerLeft = window.getComputedStyle(infoBox).getPropertyValue('left');

summerPalm.addEventListener('click', showColorBox);

function showColorBox(e) {
    showColor(e);
    showBox(e);

}
function showColor(e) {
    colorName.textContent = "";
    colorBox.classList.remove(...colorBox.classList);
    let color = e.target.getAttribute("class");
    colorName.append(allColors[color]);
    colorBox.classList.add(color);
}
function showBox(e) {
    let offset = parseInt(e.target.getAttribute("class").slice(2));
    let top = 0.5 + offset;
    infoBox.style.top = top+"rem";
    infoBox.style.left = 50+"vw";
    infoBox.style.opacity = 1;
}


