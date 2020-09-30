(function (){
    
    function getCap(){
        return cap+4;
    }
    const nombre='Nicolas';
    const serie='One piece';
    const cap=983;

    //const salida=nombre+serie+cap;
    //const salida=nombre+" "+ serie+ " " +"("+cap+")";
    const salida=`${nombre} esta viendo ${serie} y va por el capitulo ${cap} y dentro de una semana ira
por el capitulo ${getCap()}`;
    console.log(salida);
})();