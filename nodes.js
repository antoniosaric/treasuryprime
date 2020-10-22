// 6. Consider a directed graph of small non-negative integers where each integer is less than 60,000 and each integer is unique. 
// In this case, a directed graph is a data structure where a node is represented by a unique integer and each node has zero or more child nodes. 
// As above, don't just use an existing graph library.

// - Write a function that creates a node in a graph.
// - Write a function that inserts a node as a child of another node.
// - These functions should not allow cycles to be created. That is, a node may not directly or indirectly point to itself.
// - Write a function to print out a graph

class Node {
    constructor( data, children = [] ){
        this.data = data;
        this.children = children;
    }

    add( data ){
        this.children.push( new Node( data ) );
    }
}
  
class Graph {
    constructor( ) {
        this.root = null;
    }
  
    insertAt(data, n ) {

        if ( n === 0 || !this.root){
            this.insertFirst( data );
            return;
        }

        let found_node = this.traverseBF( n );
        const new_node = found_node.add( data, found_node.children )
        found_node.children = new_node; 
    }
  
    getFirst() {
        return this.root;
    }
  
    insertFirst(data) {
        this.root = new Node(data, this.getFirst());
    }

    circular(fn) {

        const arr = [this.root];
        let node_monitor = this.root;
        let fast_monitor = this.root;
        while ( arr.length ){
            const node = arr.shift();
            arr.push( ...node.children );
            while ( fast_monitor.children && fast_monitor.children.children ) {
                node_monitor = node_monitor.children
                fast_monitor = fast_monitor.children.children;
                if( node_monitor === fast_monitor){
                    return true;
                }
            }
            fn(node);
        }
    
        return false;
    }


    traverseBF(fn) {
        const arr = [this.root];
        while ( arr.length ){
            const node = arr.shift();

            arr.push( ...node.children );
            fn(node);
        }
    }

    printGraph(){
        console.log(this.root);
    }



    *[Symbol.iterator]() {
        let node = this.root;
        while (node) {
            yield node;
            node = node.children;
        }
    }

        // queueCreator = () => {
    //     const queue = []
    //     return {
    //       add(x) {
    //         queue.unshift(x)
    //       },
    //       remove() {
    //         if (queue.length === 0) {
    //           return undefined
    //         }
    //         return queue.pop()
    //       },
    //       next() {
    //         if (queue.length === 0) {
    //           return undefined
    //         }
    //         return queue[queue.length - 1]
    //       },
    //       get length() {
    //         return queue.length
    //       },
    //       empty() {
    //         return queue.length === 0
    //       }
    //     }
    //   }
      
    //   nodeCreator = (id) => {
    //     const neighbors = []
    //     return {
    //       id,
    //       neighbors,
    //       addNeighbors(node) {
    //         neighbors.push(node)
    //       }
    //     }
    //   }
      
    //   graphCreator = (uni = false) => {
    //     const nodes = []
    //     const edges = []
    //     return {
    //       uni,
    //       nodes,
    //       edges,
    //       addNode(id) {
    //         nodes.push(nodeCreator(id))  
    //       },
    //       searchNode(id) {
    //         return nodes.find(n => n.id === id)
    //       },
    //       addEdge(idOne, idTwo) {
    //         const a = this.searchNode(idOne)
    //         const b = this.searchNode(idTwo)
      
    //         a.addNeighbors(b)
    //         if (!uni) {
    //           b.addNeighbors(a)
    //         }
    //         edges.push(`${idOne}${idTwo}`)
    //       },
    //       display() {
    //         return nodes.map(({neighbors, id}) => {
    //           let output = `${id}`
    //           if (neighbors.length) {
    //             output += ` => ${neighbors.map(node => node.id).join(' ')}`
    //           }
    //           return output
    //         }).joing('\n')
    //       },
    //     }
    //   }

    //   breadthFirst(startingNode, neighborVisit) {
    //     const firstNode = this.searchNode(startingNode)
    //     const visitedNode = nodes.reduce((sum, node) => {
    //       sum[node.id] = false
    //       return sum
    //     }, {})
    //     const queue = queueCreator()
    //     queue.add(firstNode) 
    //     while (!queue.empty()) {
    //       const temp = queue.remove()
    //       if (!visitedNode[temp.id]) {
    //         neighborVisit(temp)
    //         visitedNode[temp.id] = true
    //       }
    //       temp.neighbors.forEach(node => {
    //         if(!visitedNode[node.id]) {
    //           queue.add(node)
    //         }
    //       })
    //     }
    //   }  
}

module.exports = { Node, Graph };