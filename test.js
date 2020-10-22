const L = require('./nodes');
const Graph = L.Graph;
const Node = L.Node;

test('Graph is a class', () => {
  expect(typeof Graph.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test('has properties "data" and "children"', () => {
    const node = new Node('a', 'b');
    expect(node.data).toEqual('a');
    expect(node.children).toEqual('b');
  });
});

describe('Insert First', () => {
  test('appends a node to the start of the Graph', () => {
    const l = new Graph();
    l.insertFirst(1);
    expect(l.root.data).toEqual(1);
    l.insertFirst(2);
    expect(l.root.data).toEqual(2);
  });
});

describe('GetFirst', () => {
  test('returns the first element', () => {
    const l = new Graph();
    l.insertFirst(1);
    expect(l.getFirst().data).toEqual(1);
    l.insertFirst(2);
    expect(l.getFirst().data).toEqual(2);
  });
});

describe('InsertAt', () => {
  test('inserts a new node with data at the 0 index when the Graph is empty', () => {
    const l = new Graph();
    l.insertFirst('hi');
    expect(l.getFirst().data).toEqual('hi');
  });

  test('return false if node not found', () => {
    const l = new Graph();
    l.insertAt('hi', 30);
    expect(l.traverseBF(l.root)).toEqual(false);
  });
});

// describe('circular', () => {
//   test('circular detects circular linked Graphs', () => {
//     const l = new Graph();
//     const a = new Node('a');
//     const b = new Node('b');
//     const c = new Node('c');
  
//     l.root = a;
//     a.children = [b];
//     b.children = [c];
//     c.children = [b];
  
//     expect(l.circular(l.root)).toEqual(true);
//   });
  
//   test('circular detects circular linked Graphs linked at the root', () => {
//     const l = new Graph();
//     const a = new Node('a');
//     const b = new Node('b');
//     const c = new Node('c');
  
//     l.root = a;
//     a.children = [b];
//     b.children = [c];
//     c.children = [a];
  
//     expect(l.circular(l)).toEqual(true);
//   });
  
//   test('circular detects non-circular linked Graphs', () => {
//     const l = new Graph();
//     const a = new Node('a');
//     const b = new Node('b');
//     const c = new Node('c');
  
//     l.root = a;
//     a.children = [b];
//     b.children = [c];
//     c.children = null;

    
//     l.display()

//     expect(l.circular(l)).toEqual(false);
//   });
// });

describe('Node', () => {
    test('Node is a constructor', () => {
      expect(typeof Node.prototype.constructor).toEqual('function');
    });
  
    test('Node has a data and children properties', () => {
      const n = new Node('a');
      expect(n.data).toEqual('a');
      expect(n.children.length).toEqual(0);
    });
  
    test('Node can add children', () => {
      const n = new Node('a');
      n.add('b');
      expect(n.children.length).toEqual(1);
      expect(n.children[0].children).toEqual([]);
    });
  });
  
//   describe('Graph', () => {
//     test('starts empty', () => {
//       const l = new Graph();
//       expect(l.root).toEqual(null);
//     });
  
//     test('Can traverse bf', () => {
//         letters = [];
//         const l = new Graph();
//         const graph = l.graphCreator(true)
//         graph.addNode('a')
//         graph.addNode('b')
//         graph.addNode('c')
//         graph.addNode('d')
//         graph.addNode('e')
//         graph.addNode('f')
//         graph.addEdge('a', 'c')
//         graph.addEdge('a', 'e')
//         graph.addEdge('b', 'a')
//         graph.addEdge('b', 'c')
//         graph.addEdge('c', 'd')
//         graph.addEdge('c', 'e')
//         graph.addEdge('d', 'e')
//         graph.addEdge('e', 'f')
//         graph.addEdge('f', 'e')

        
//         graph.breadthFirst('c', node => {
//             letters.push(node.id);
//         });

//         expect(letters).toEqual(['a', 'b', 'd', 'c']);
//     });
//   });
  