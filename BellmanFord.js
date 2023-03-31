function bellmanFord(graph, start) {
    let distances = {};
    for (let vertex in graph) {
      distances[vertex] = Infinity;
    }
    distances[start] = 0;
  
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
      for (let vertex in graph) {
        for (let neighbor in graph[vertex]) {
          if (distances[vertex] + graph[vertex][neighbor] < distances[neighbor]) {
            distances[neighbor] = distances[vertex] + graph[vertex][neighbor];
          }
        }
      }
    }
  
    for (let vertex in graph) {
      for (let neighbor in graph[vertex]) {
        if (distances[vertex] + graph[vertex][neighbor] < distances[neighbor]) {
          console.log("O grafo contém um ciclo negativo.");
          return;
        }
      }
    }
  
    return distances;
  }