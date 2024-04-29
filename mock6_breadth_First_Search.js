let n = 10; 
let m = 6; 
let s = 3; 
let edges = [[1, 2], [1, 3]];
// let edges = [ [ 3, 1 ], [ 10, 1 ], [ 10, 1 ], [ 3, 1 ], [ 1, 8 ], [ 5, 2 ] ]
// let edges = [[4,2],[1,2],[1,3]]; 
// Starting node

function bfs(n, m, edges, s) {
  let edgeList = []; 
  for (let i = 0; i < n; i++) {
    edgeList.push([]);
  }
  for (let [u, v] of edges) { 
    console.log("u,v", u, v)
    // console.log("u-1,v-1", u - 1, v - 1)
    edgeList[u - 1].push(v - 1); 
    console.log("u-1", { edgeList })
    edgeList[v - 1].push(u - 1); 
    console.log("v-1", { edgeList })
  }

  let distances = new Array(n).fill(-1); 
  distances[s - 1] = 0; 

  // Queue for BFS traversal
  let queue = [s - 1];
  console.log({ queue })
  while (queue.length > 0) { // Continue BFS traversal until the queue is empty
    let node = queue.shift(); // Dequeue the first node from the queue
    console.log({ node })
    console.log({ queue })
    // Traverse all neighbors of the current node
    for (let neighbor of edgeList[node]) { // Iterate through each neighbor of the current node
      // If neighbor is not visited yet (distance is still -1)
      console.log({ neighbor })
      console.log("distances[neighbor]",distances[neighbor] )
      if (distances[neighbor] === -1) {
        // Update distance and enqueue neighbor
        distances[neighbor] = distances[node] + 6; // Update distance to neighbor (edge weight is 6 units)
        console.log("distances[neighbor] ",distances[neighbor] )
        queue.push(neighbor); // Enqueue the neighbor for further exploration
        console.log({ queue })
      }
    }
  }
  console.log({ distances })

  // Remove distance to starting node from the result
  distances.splice(s - 1, 1); // Remove the distance to the starting node (s-1 for 0-based index)
  return distances; // Return the distances to other nodes in increasing node number order
}
console.log(bfs(n, m, edges, s)); // Output the result


// function bfs(n, m, edges, s) {
//   // Create edge list representation of the graph
//   let edgeList = []; // Initialize an empty array to store edge lists
//   for (let i = 0; i < n; i++) { // Loop through each node from 1 to n
//       edgeList.push([]); // Initialize an empty array for each node to store its neighbors
//   }

//   // Populate the edge list based on the given edges
//   for (let [u, v] of edges) { // Iterate through each edge in the edges array
//       // Since nodes are labeled consecutively from 1 to n, subtract 1 to get 0-based indexing
//       edgeList[u - 1].push(v - 1); // Add v-1 to the edge list of u-1 (0-based index)
//       edgeList[v - 1].push(u - 1); // Add u-1 to the edge list of v-1 (0-based index)
//       // This ensures that the graph is undirected
//   }

//   // Initialize distances array with -1 indicating unreachable nodes
//   let distances = new Array(n).fill(-1); // Create an array of size n filled with -1
//   distances[s - 1] = 0; // Set the distance to the starting node (s) as 0

//   // Queue for BFS traversal
//   let queue = [s - 1]; // Initialize the queue with the starting node (s-1 for 0-based index)
//   while (queue.length > 0) { // Continue BFS traversal until the queue is empty
//       let node = queue.shift(); // Dequeue the first node from the queue
//       // Traverse all neighbors of the current node
//       for (let neighbor of edgeList[node]) { // Iterate through each neighbor of the current node
//           // If neighbor is not visited yet (distance is still -1)
//           if (distances[neighbor] === -1) {
//               // Update distance and enqueue neighbor
//               distances[neighbor] = distances[node] + 6; // Update distance to neighbor (edge weight is 6 units)
//               queue.push(neighbor); // Enqueue the neighbor for further exploration
//           }
//       }
//   }

//   // Remove distance to starting node from the result
//   distances.splice(s - 1, 1); // Remove the distance to the starting node (s-1 for 0-based index)
//   return distances; // Return the distances to other nodes in increasing node number order
// }

// Example usage:

