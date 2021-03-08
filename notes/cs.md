# General concepts

The objects of all manipulations in programming are **data structures**:

- *Array* consists of a collection of elements, each identified by index.

- *Stack* is a collection of elements with two main principal operations - *push* and *pop* in *last in, first out (LIFO)* order.

- *Queue* is a collection of entities that can be modified by addition and removal of entities in *first in, first out (FIFO)* order.

- *Linked list* is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next.

- *Graph* represents relations or connections between nodes. Graph can be *directed* or *undirected*, *weighted* or *non-weighted*.

- *Tree* is a graph that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

- *Hash table* implements an associative array that can map keys to values.

Probably the most important part of computer science is **algorithms**:

- *Binary Search* finds index of target number in sorted array of other numbers by dividing it on two halves on each iteration. Efficiency is O(log(n)),
where *n* is array length.

- *Insertion Sort* sorts array of numbers by comparing and ordering them one by one. Efficiency is from O(n) to O(n<sup>2</sup>).

- *Selection Sort* sorts array by finding and selecting next the smallest number across array one after another. Efficiency is O(n).

- *Merge Sort* sorts array by dividing it on two halves based on index on each iteration and sorting each half. Efficiency is O(n * log(n)).

- *Quick Sort* sorts array by dividing it on two halves based on some median value called pivot and sorting each half. Efficiency is from O(n * log(n)) to 
O(n<sup>2</sup>).

- *Heap Sort* sorts array by dividing it on sorted and unsorted parts and finding and selecting next the smallest number across unsorted part one after another.
Efficincy is O(n * log(n)).

- *Counting Sort* sorts array of values in specific range by counting value's number of appearances in array one by one. Efficiency is O(n + k), where *k* is
values range. 

- *Breadth-First Search (BFS)* searches tree or graph data structure by checking neighbours of nodes level by level. Efficiency is O(v + e), where *v* and *e* are
amounts of graph vertices and edges respectively. Any graph algorithm is considered *inorder*, if it discovers left child node earlier than right and *reverse* if vice
versa.

- *Depth-first Search (DFS)* searches tree or graph data structure by checking node branches as far as possible one by one. Efficiency is O(v + e).

- *Kruskal’s Algorithm* constructs tree of edges with minimum weight out of undirected connected graph. Efficiency is O(n<sup>2</sup>).

- *Dijkstra’s Algorithm* finds the shortest path in weighted graph with non-negative edge weights from root. Efficiency is O(e * log(v)).

- *Floyd Warshall's Algorithm* finds the shortest path in weighted graph with possible negative edge weights from root. Efficiency is O(v<sup>3</sup>).

- *Bellman–Ford's Algorithm* finds the shortest path in weighted graph with possible negative edge weights from particular given vertex. Efficiency is O(v + e).

- *Kadane's Algorithm* constructs subarray with biggest sum within from array of numbers by placing maximum subarray endings at each index. Efficiency is O(n).

- *Lee's Algorithm* finds shortest path from given coordinates to another in a maze that is represented as matrix with ways as ones and walls as zeroes. Efficiency
is O(a * b), where *a* and *b* are matrix dimensions.

- *Flood Fill Algorithm* finds the biggest connected area of same values in matrix by using BFS. Efficiency is O(a * b).

- *Floyd's Cycle Algorithm* detects cycle in a linked list by hashing and grouping nodes. Efficiency is O(n).

- *Topological Sort* constructs topological flattened sequence of nodes from weighted Directed Acycled Graph (DAG). Efficiency is O(v + e).
