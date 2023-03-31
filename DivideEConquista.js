//Divide e Conquista

function buscaBinaria(arr, R) {
    let inicio = 0;
    let fim = arr.length - 1;
    
    while (inicio <= fim) {
      let meio = Math.floor((inicio + fim) / 2);
      if (arr[meio] === R) {
        return meio;
      } else if (arr[meio] < R) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }
    
    return -1;
  }
  const numeros = [2, 5, 7, 10, 13, 15, 18];
  const R = 13;
  const indice = buscaBinaria(numeros, R);
  if (indice === -1) {
    console.log(`${R} não foi encontrado no array :( ).`);
  } else {
    console.log(`${R} foi encontrado na posição ${indice} do array :) .`);
  }