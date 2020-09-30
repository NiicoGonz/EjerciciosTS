"use strict";
(function () {
    //templates literales nos permiten construir String de una forma mas sencilla a la forma clasica
    function getEdad() {
        return 100 + 100 + 100 + edad;
    }
    const nombre = 'Nicolas';
    const apellido = 'Gonzalez';
    const edad = 21;
    //const salida =nombre + apellido + edad;
    // const salida=nombre+" "+ apellido+ "("+edad+")";
    //se pueden pasar funciones a los templates literales 
    const salida = `${nombre} ${apellido} (${edad})`;
    //Nicolas Gonzalez (edad: 21)
    console.log(salida);
})();
