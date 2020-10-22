'use strict'

function createDenmark() {
    let denmarkSVG = document.getElementById("denmarkSVG");
    let xmlns = 'http://www.w3.org/2000/svg';

    //Rød baggrund
    let background = document.createElementNS(xmlns, 'rect');
    background.setAttribute("x", 0);
    background.setAttribute("y", 0);
    background.setAttribute("height", '12');
    background.setAttribute("width", '18');
    background.setAttribute("fill", "red");

    //Line 1
    let line1 = document.createElementNS(xmlns, 'line');
    line1.setAttribute("x1", '0');
    line1.setAttribute("y1", '6');
    line1.setAttribute("x2", '18');
    line1.setAttribute("y2", '6');
    line1.setAttribute("stroke-width", '1');
    line1.setAttribute("stroke", "white");


    //Line 2
    let line2 = document.createElementNS(xmlns, 'line');
    line2.setAttribute("x1", '6');
    line2.setAttribute("y1", '0');
    line2.setAttribute("x2", '6');
    line2.setAttribute("y2", '12');
    line2.setAttribute("stroke-width", '1');
    line2.setAttribute("stroke", "white");


    denmarkSVG.appendChild(background);
    denmarkSVG.appendChild(line1);
    denmarkSVG.appendChild(line2);
}

export{createDenmark};