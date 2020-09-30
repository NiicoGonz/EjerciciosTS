(function () {
  function activar(quien: string, momento?: string, objeto: string = " pc") {
    if (momento) {
      console.log(`${quien} activo el ${objeto} en la ${momento}`);
    } else {
      console.log(`${quien} activo el ${objeto}`);
    }
  }

  activar("leidy", "noche");
})();
