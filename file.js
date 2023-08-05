
function toggleAccordion() {
    let rotate = this.getElementsByClassName("toggle-btn");
    for (let w = 0; w < rotate.length; w++) {
        rotate[w].classList.toggle("transform");
    }
    let headChange = this.getElementsByTagName("h3");
    for (let c = 0; c < headChange.length; c++) {
        headChange[c].classList.toggle("scale");
    }
    let hiddenDiv = this.getElementsByClassName("hidden-div");
    for (let x = 0; x < hiddenDiv.length; x++) {
        hiddenDiv[x].classList.toggle("display");
    }
}

let accordionSections = document.getElementsByClassName("accordion-section");
for (let k = 0; k < accordionSections.length; k++) {
    accordionSections[k].addEventListener("click", toggleAccordion);
}


let toggleBtns = document.getElementsByClassName("toggle-btn");
for (let j = 0; j < toggleBtns.length; j++) {
    toggleBtns[j].addEventListener("click", toggleAccordion);
}