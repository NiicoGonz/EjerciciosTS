"use strict";
(() => {
    const serie = {
        nombre: 'kakegurui',
        cap() {
            console.log(`estas en el capitulo 1 de ${this.nombre}`);
            setTimeout(() => {
                console.log(`el capitulo 2 de ${this.nombre} va a empezar`);
            }, 1000);
        }
    };
    serie.cap();
})();
