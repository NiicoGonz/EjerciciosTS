(function () {
  const  sumar=function (a:number,b:number){
    return a+b;
  }
  const sumarF=(a:number,b:number) =>a+b;

  console.log(sumar(8,3));
  console.log(sumarF(2,2));


  const hulk={
    nombre:'hulk',
    smash(){
      setTimeout(()=>{
      console.log(`${this.nombre} smash!!!`);
      
      },1000)
    }
  }

  hulk.smash();
})();

