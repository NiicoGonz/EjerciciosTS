"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`enviando a ${xmen.nombre} a la mision`);
    };
    const regresarMision = (xmen) => {
        console.log(`${xmen.nombre} regreso de la mision `);
    };
    const edadXmen = (xmen) => {
        console.log(`la edad del xmen es de ${xmen.edad}`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarMision(wolverine);
})();
