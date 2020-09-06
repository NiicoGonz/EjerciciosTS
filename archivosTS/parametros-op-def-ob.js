"use strict";
(function () {
    function activar(quien, momento, objeto = " pc") {
        if (momento) {
            console.log(`${quien} activo el ${objeto} en la ${momento}`);
        }
        else {
            console.log(`${quien} activo el ${objeto}`);
        }
    }
    activar("leidy", "noche");
})();
