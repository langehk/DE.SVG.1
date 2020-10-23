export const $ = function(foo) {
    return document.getElementById(foo);
}
/*
 * params:
 * where designates DOM placement
 * a, b, c as in y = -(a*x*x + b*x + c)
 * scaled scales depth relative to viewbox, higher is shallower
 */
export const parabola = function (where, a, b, c, scaled) {
    let xmlns = "http://www.w3.org/2000/svg";
    let vertexx = Math.abs(b) / (2 * a);
    let vertexy = Math.abs(a) * vertexx * vertexx + Math.abs(b) * vertexx + c;
    let cpy = -(a * vertexx * vertexx + b * vertexx + c) / scaled * 2;
    let x = 0;
    let timer = setInterval(function () {
        let ci = document.createElementNS(xmlns, 'circle');
        ci.setAttributeNS(null, 'cx', x);
        let y = (-(a * x * x + b * x + c) / scaled);
        ci.setAttributeNS(null, 'cy', y);
        ci.setAttributeNS(null, 'r', 1);
        ci.setAttributeNS(null, 'fill', 'fuchsia');
        where.appendChild(ci);
        x++;
        if(x > Math.abs(b)) {
            let ci = document.createElementNS(xmlns, 'circle');
            ci.setAttributeNS(null, 'cx', vertexx);
            ci.setAttributeNS(null, 'cy', cpy);
            ci.setAttributeNS(null, 'r', 2);
            ci.setAttributeNS(null, 'fill', 'black');
            where.appendChild(ci);
            clearInterval(timer);
        }
    }, 10);
}