export const aclock = function () {
    setInterval(function () {

        const rndr = function (elm, deg) {
            elm.setAttribute('transform', 'rotate('+ deg +' 50 50)');
        }

        var now = new Date();
        rndr(sec, 6 * now.getSeconds());  // 1/60*360
        rndr(min, 6 * now.getMinutes());  // 1/60*360
                                        // 1/12*360
        rndr(hour, 30 * (now.getHours() % 12) + now.getMinutes() / 2);
        // https://stackoverflow.com/questions/25931810/why-is-document-getelementbyid-not-needed#25931928
        // console.log(svg0 === document.getElementById('svg0'));
    }, 1000);
}