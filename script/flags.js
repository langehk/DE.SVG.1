'use strict'

//Oprette flag størrelse.
function createSVG(div)
{
    let svgID = div.id + 'SVG';
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, 'viewbox', '0 0 18 12');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttributeNS(null, 'width', '200');
    svg.setAttributeNS(null, 'height', '100');
    svg.setAttribute('id', svgID)
    
    //let vp = document.createElementNS("http://www.w3.org/2000/svg", "viewport");
    //let vpID = svgID.id + 'VP';
    //vp.setAttribute("id", vpID);
    //svg.appendChild(vp);
    div.appendChild(svg);
}

//Viewport scaling
function VPscaling()
{

}


  
    export{createSVG};


