(() => {
      interface xmen{
        nombre: string,
        edad:number
      }
    const enviarMision = (xmen: { nombre :string}) => {
      console.log(`enviando a ${xmen.nombre} a la mision`);
    };

    const regresarMision=(xmen:{nombre:string})=>{
        console.log(`${xmen.nombre} regreso de la mision `);

    }
    
    const edadXmen=(xmen:xmen)=>{
        console.log(`la edad del xmen es de ${xmen.edad}`);
    }
    const wolverine :xmen ={
        nombre:'Logan',
        edad:60
    }
    enviarMision(wolverine);
    regresarMision(wolverine);
})();
