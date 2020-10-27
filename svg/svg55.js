export const $ = function (foo) {return document.getElementById(foo);}


/*
 * animate svg, params:
 * svgelm: id of svg in html
 * widx: width of animated svg
 * wp: viewport (html elm) holding the svgelm
 */
export function anim (svgelm, widx, dx, wp) {
    let vb = window.getComputedStyle($(wp)); //Vi får computed css-styles, så vi kan kalde dem
    let xmax = parseInt(vb.getPropertyValue('width')); //Vi henter css-width
    let ymax = parseInt(vb.getPropertyValue('height')); //Vi henter css-height

    let timer = setInterval(function () {
        let svg = window.getComputedStyle($(svgelm)); //Vi henter styles på svg
        let left = parseInt(svg.getPropertyValue('left'));//Vi henter css-left på vores svg
        let top = parseInt(svg.getPropertyValue('top'));//Vi henter css-top på vores svg
        if (left < 0 || left + widx > xmax) //Hvis kuglen rammer kanten på x-aksen, vender den om
            dx *= -1;

        if (top < 0) //Her vender den i toppen
        
            dx *= 1;

        if (top > ymax) //Her vender den i bunden
    
            dx *= -1;
            
        $(svgelm).style.left  = left + dx + 'px';
        $(svgelm).style.top  = top + dx + 'px';
    }, 10);

    console.log($(svgelm));

}