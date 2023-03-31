class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element, priority) {
      let queueElement = new QueueElement(element, priority);
      let contain = false;
  
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          contain = true;
          break;
        }
      }
  
      if (!contain) {
        this.items.push(queueElement);
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class QueueElement {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }
  
  function dijkstra(graph, start) {
    let distances = {};
    let visited = {};
    let queue = new PriorityQueue();

    for (let vertex in graph) {
      distances[vertex] = Infinity;
      visited[vertex] = false;
    }

    distances[start] = 0;
  
    queue.enqueue(start, 0);
  
    while (!queue.isEmpty()) {

      let currentVertex = queue.dequeue().element;
  
      if (visited[currentVertex]) {
        continue;
      }
  
      visited[currentVertex] = true;
  
      for (let neighbor in graph[currentVertex]) {
        
        let distance = distances[currentVertex] + graph[currentVertex][neighbor];
  
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
  
          queue.enqueue(neighbor, distance);
        }
      }
    }
  
    return distances;
  }