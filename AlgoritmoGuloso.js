//Algoritmo Guloso

function selecionarNumeroAtividades(inicio, fim) {
  const y = inicio.length;
  const NumeroAtividades = [];
  let indice = 0;
  NumeroAtividades.push(i);
  for (let j = 1; j < y; j++) {
    if (inicio[j] >= fim[i]) {
      NumeroAtividades.push(j);
      indice= j;
    }
  }
  return NumeroAtividades;
}
const inicio = [1, 3, 0, 5, 8, 5];
const fim = [2, 4, 6, 7, 9, 12];
const NumeroAtividadesSelecionadas = selecionarNumeroAtividades(inicio, fim);
console.log(NumeroAtividadesSelecionadas);