'use strict'

let xmlns = 'http://www.w3.org/2000/svg';
//let points = [0.325,0.0325,0.13,0.637,0.6175,0.2535,0.0325,0.2535,0.52,0.6435];
let pointsStart = [
    0.925, 0.2825,
    0.73, 0.887,
    1.2175,0.5035,
    0.6325,0.5035,
    1.12,0.8935]; //Startpunkt til vores stjerne + størrelse

let points = [
    0.925, 0.2825,
    0.73, 0.887,
    1.2175,0.5035,
    0.6325,0.5035,
    1.12,0.8935]; 

//Funktion til at tegne stjerne
function drawStar(){
    let star = document.createElementNS(xmlns, 'polygon'); 
    star.setAttribute(
        "points", `
        ${points[0]},${points[1]} 
        ${points[2]},${points[3]} 
        ${points[4]},${points[5]} 
        ${points[6]},${points[7]} 
        ${points[8]},${points[9]}
    `)
    star.setAttribute("fill", "white");
    return star;
}

//En funkton til at tegne en linje
function drawLine(x1, x2, y1, y2){

    let line = document.createElementNS(xmlns, 'line');

    line.setAttribute("x1", `${x1}`);
    line.setAttribute("y1", `${y1}`);
    line.setAttribute("x2", `${x2}`);
    line.setAttribute("y2", `${y2}`);

    line.setAttribute("stroke-width", '0.92');
    line.setAttribute("stroke", "#B22234");

    return line;  
}

function buildStarRow(noOfStars, html){
    let i = 1; 
    while(i < noOfStars){
        html.appendChild(drawStar());
        for (let p = 0; p < points.length; p+=2) {
            points[p] += 1.3; 
        }
        html.appendChild(drawStar());
        i++;
    }
}

function createUSA(){
    
    //Vi tegner de røde striper
    let stripes = 7; 
    let usaSVG = document.getElementById("usaSVG");
    let y = 0.46; //For at linjen lægger sig i 0 på y aksen
    for (let i = 0; i < stripes; i++) {
        
        usaSVG.appendChild(drawLine(0, 18, y, y));
        y += 1.846; //Vores mellemrum mellem stjernerne
    }

    //Den blå rektangel
    let rect = document.createElementNS(xmlns, 'rect');
    let rectHeight = (0.92*7);
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("height", `${rectHeight}`);
    rect.setAttribute("width", "9");
    rect.setAttribute("fill", "#3C3B6E");
    usaSVG.appendChild(rect);

    let starRow1 = 6; 
    let starRow2 = 5; 
    let starRowTotal1 = 6; 
    let starRowTotal2 = 4;
    
    let v = 0; 

    while(v < starRowTotal1){ //Vi bygger stjernerækker med 6 stjerner

        buildStarRow(starRow1, usaSVG);  //Vi bygger stjernerækken ved at kalde buildStarRow

        for (let p = 0; p < points.length; p+=2) {
            points[p] = pointsStart[p]; //Vi resetter x-aksen hver gang
        }
        for (let p = 1; p < points.length; p+=2) {
            points[p] += 1.3; //Vi lægger til på y-aksen for at få næste række ned
        }
        v++;
    }

    v=0;

    for (let p = 1; p < points.length; p+=2) { //Vi resetter vores points
        points[p] = pointsStart[p]; 
    }
    for (let p = 0; p < points.length; p++) {
        points[p] += 0.65; 
        pointsStart[p] += 0.65; //Vi lægger til i y-akse og x-akse, da vi skal tegne stjernerækker med 5 stjerner
    }


    while(v < starRowTotal2){ //Vi bygger stjernerækker med 5 stjerner

        buildStarRow(starRow2, usaSVG);  //Vi bygger stjernerækken ved at kalde buildStarRow

        for (let p = 0; p < points.length; p+=2) {
            points[p] = pointsStart[p];  //Vi resetter x-aksen 
        }
        for (let p = 1; p < points.length; p+=2) {
            points[p] += 1.3; //Vi lægger til på y-aksen for at komme ned på næste linje
        }
        v++;
    }
    
    
}

export{createUSA};