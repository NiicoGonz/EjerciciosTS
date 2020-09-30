(function () {
  function verSeries(
    quien: string,
    temporada?: string,
    serie: string = "final space"
  ) {
    if (temporada) {
      console.log(`${quien} esta viendo ${serie} en la temporada ${temporada}`);
    }else{
    console.log(`${quien}`);
    
    }
  }
  verSeries("Nicolas", "temporada 2");
})();
