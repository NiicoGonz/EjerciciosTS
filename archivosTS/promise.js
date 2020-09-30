"use strict";
(() => {
    console.log('Inicio');
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('se termino el timeout');
        }, 1000);
    });
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
    console.log('Fin');
    let capActua = "nicolas";
    const siguienteCap = (capActua) => {
        const capitulos = [2, 3, 4, 5];
        const [cap2, cap3, cap4, cap5] = capitulos;
        return new Promise((res, rej) => {
            if (capActua === "nicolas") {
                rej("no puede ver el capitulo 2");
            }
            else {
                let capSi = cap2;
                res(`puede ver el capitulo ${capSi}`);
            }
        });
    };
    siguienteCap(capActua)
        .then((capSi) => console.log(capSi))
        .catch((err) => console.warn(err));
})();
