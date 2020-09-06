(() => {
  const avenger = {
    nombre: "Steve",
    clave: "capitan america",
    poder: "droga",
  };
  // const {nombre,clave,poder}=avenger;

  // console.log(nombre);
  // console.log(clave);
  // console.log(poder);

  const extraer =(avenger:any)=>{
      
    const {nombre , clave,poder}=avenger;
    console.log(poder);
    console.log(nombre);
    console.log(clave);
  }
  
 /* const extraer=({nombre,clave,poder}:any)=>{
    console.log(clave);
    console.log(poder);
    console.log(nombre);
  }*/
  //extraer(avenger);

  const avengers:String[]=['thor','IronMan','spiderma'];
  //const [thor,ironman,spiderman]=avengers;
  const [,,spiderman]=avengers;
  
  const extraerArr =([thor,ironman,spiderman]:String[])=>{
   console.log(thor);
   console.log(ironman);
   console.log(spiderman);
  };

  const estados = [
    {value:0,description:'selected'},
    {value:1,description:'active'},
    {value:2,description:'suspended'}
  ]
  const [selected,active,suspended]=estados;
  console.log(selected);
  console.log(active);
  console.log(suspended);
  extraer(avenger);
  extraerArr(avengers);
})();
