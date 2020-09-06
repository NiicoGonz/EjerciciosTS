"use strict";
(function () {
    const sumar = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    console.log(sumar(8, 3));
    console.log(sumarF(2, 2));
    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
