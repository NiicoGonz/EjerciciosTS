"use strict";
(function () {
    //se declara el tipo de dato que tendra la variable por buenas practicas
    //ademas al compilarlo a JS este tomara el let y los definira como var
    let nombre = 'luffy';
    let numero = 123;
    let booleano = true;
    let hoy = new Date();
    //si no se inicializa la variable esta se vuelve any y puede poseer cualquier tipo de dato 
    let cualquiercosa;
    cualquiercosa = nombre;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    /*al asignar un objeto en TS este lee las propiedades que lo componen y hace que el constructor
    *se vea forzado a establecer siempre ese objeto con la misma cantidad de propiedades
    */
    let zoro = {
        apellido: 'roronoa',
        edad: 32,
    };
    zoro = {
        apellido: 'vismoke',
        edad: 33,
    };
});
