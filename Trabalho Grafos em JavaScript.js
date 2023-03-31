// Função para criar um grafo como uma matriz de adjacências
function criarMatrizAdjacencias(numVertices) {
    // Inicializa uma matriz vazia
    const matriz = [];
    for (let i = 0; i < numVertices; i++) {
      matriz[i] = [];
      for (let j = 0; j < numVertices; j++) {
        matriz[i][j] = 0;
      }
    }
    // Preenche a matriz com as arestas do grafo
    let numArestas = parseInt(prompt("Digite o número de arestas do grafo: "));
    for (let k = 0; k < numArestas; k++) {
      let origem = parseInt(prompt("Digite a origem da aresta " + (k+1) + ": "));
      let destino = parseInt(prompt("Digite o destino da aresta " + (k+1) + ": "));
      matriz[origem][destino] = 1;
      matriz[destino][origem] = 1;
    }
    return matriz;
  }
  
  // Função para criar um grafo como uma lista de adjacências
  function criarListaAdjacencias(numVertices) {
    // Inicializa uma lista vazia
    const lista = [];
    for (let i = 0; i < numVertices; i++) {
      lista[i] = [];
    }
    // Preenche a lista com as arestas do grafo
    let numArestas = parseInt(prompt("Digite o número de arestas do grafo: "));
    for (let k = 0; k < numArestas; k++) {
      let origem = parseInt(prompt("Digite a origem da aresta " + (k+1) + ": "));
      let destino = parseInt(prompt("Digite o destino da aresta " + (k+1) + ": "));
      lista[origem].push(destino);
      lista[destino].push(origem);
    }
    return lista;
  }
  
  // Função para calcular o grau de cada vértice
  function calcularGraus(grafo) {
    const graus = [];
    for (let i = 0; i < grafo.length; i++) {
      let grau = 0;
      if (Array.isArray(grafo[i])) {
        grau = grafo[i].length;
      } else {
        for (let j = 0; j < grafo[i].length; j++) {
          grau += grafo[i][j];
        }
      }
      graus.push(grau);
    }
    return graus;
  }
  
  // Programa principal
  const numVertices = parseInt(prompt("Digite o número de vértices do grafo: "));
  const opcao = prompt("Digite 1 para criar o grafo como uma matriz de adjacências ou 2 para criar o grafo como uma lista de adjacências: ");
  let grafo;
  if (opcao == 1) {
    grafo = criarMatrizAdjacencias(numVertices);
  } else if (opcao == 2) {
    grafo = criarListaAdjacencias(numVertices);
  } else {
    alert("Opção inválida");
  }
  const graus = calcularGraus(grafo);
  console.log("Graus dos vértices:");
  for (let i = 0; i < graus.length; i++) {
    console.log("Vértice " + i + ": " + graus[i]);
  }