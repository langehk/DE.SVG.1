'use strict'

function createGreenland(){
    //rød bund
    let greenlandSVG = document.getElementById("greenlandSVG");
    let xmlns = 'http://www.w3.org/2000/svg';
    let rect = document.createElementNS(xmlns, 'rect');
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 50);
    rect.setAttribute("height", 50);
    rect.setAttribute("width", 200);
    rect.setAttribute("fill", "red");

    //Halvcirkler
    let circ1 = document.createElementNS(xmlns, 'circle');
    let circ2 = document.createElementNS(xmlns, 'path');
    circ1.setAttribute("cx", 70);
    circ1.setAttribute("cy", 50);
    circ1.setAttribute("r", 30);
    circ1.setAttribute("fill", "red");

    circ2.setAttribute("d", "M40, 50 a1, 1 0 0,0 60,0");
    circ2.setAttribute("fill", "white");

    //Append til vores HTML
    greenlandSVG.appendChild(rect);
    greenlandSVG.appendChild(circ1);
    greenlandSVG.appendChild(circ2);
    
}

export{createGreenland}; 