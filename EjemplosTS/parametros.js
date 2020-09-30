"use strict";
(function () {
    function verSeries(quien, temporada, serie = "final space") {
        if (temporada) {
            console.log(`${quien} esta viendo ${serie} en la temporada ${temporada}`);
        }
        else {
            console.log(`${quien}`);
        }
    }
    verSeries("Nicolas", "temporada 2");
})();
