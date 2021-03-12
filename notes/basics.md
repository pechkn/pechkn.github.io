# Dev basics

**Declarative programming** is a paradigm of building programs by expressing the logic of element's without describing their control flow. One type of declarative
programming is **Functional programming (FP)**. It assumes constructing programs by applying and composing functions, mainly **pure** ones. Pure function, firstly,
doesn't have side-effects and, secondly, always gives same output with same input. 

On the contrary, **imperative programming** assumes implementing algorithms in exact explicit steps, impure **procedures**. The main implementation of it, 
**Object-Oriented Programming (OOP)**, is based on the concept of objects which can contain data in form of fields and code, in the form of methods. 4 principles of
OOP are:
- *Encapsulation*, ability to change access scope of field

- *Abstraction*, separating identical properties of different objects into another

- *Inheritance*, ability to create objects by extending existing ones

- *Polymorphism*, different method behaviour depending on type and amount of input
 
**SOLID** is an OOP acronym for a group of five good principles in programming that allows to write easy to understand and change code. It stands for 5 principles:
- *Single responsibility* states that class does one and only one thing

- *Open/closed* assumes that class to be open or closed to be used by others
    
- *Liskov's substitution* states that class can be replaced by any of its children
    
- *Interface segregation* assumes that classes' interfaces should be separated into many small promises for simpler interaction

- *Dependency inversion* assumes that classes shouldn't expect each other to never change, should use promises and could change as long as they allow

The objects of all manipulations in programming are **data structures**:
- *Array* consists of a collection of elements, each identified by index

- *Stack* is a collection of elements with two main principal operations - *push* and *pop* in *last in, first out (LIFO)* order

- *Queue* is a collection of entities that can be modified by addition and removal of entities in *first in, first out (FIFO)* order

- *Linked list* is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next

- *Graph* represents relations or connections between nodes. Graph can be *directed* or *undirected*, *weighted* or *non-weighted*

- *Tree* is a graph that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes

- *Hash table* implements an associative array that can map keys to values

Very important part of computer science is **algorithms**:
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

**Patterns** are general, reusable solutions to a commonly occurring problems in software development:
- *Factory Method* assumes that superclass with interface for creating objects allows child classes to alter their type

- *Abstract Factory* assumes the possibility of creating families of related objects without specifying their concrete classes

- *Builder* assumes constructing complex objects step by step with ability to produce different types of it on different stages

- *Prototype* is an abstract instance with non-unique code that can be shared across multiple objects

- *Singleton* is a class that strictly has only one instance and provides a global access point to itself

- *Adapter* is something that allows objects with incompatible interfaces to interact

- *Bridge* assumes splitting large class or closely related classes into abstraction and implementation which can be developed independently

- *Composite* is an object that can be recursive child and parent of other objects while still normally acting as individual object

- *Decorator* is a wrapper that can attach new behaviors to objects by placing them inside itself

- *Facade* is a simplified interface to a library, a framework, or any other complex set of classes

- *Flyweight* assumes fitting more objects into the available amount of memory by sharing common parts in multiple objects

- *Proxy* is a placeholder of another object that allows to access the object and perform something before or after it

And, finally, all code, good or bad, should be covered with different **tests**:
- *Unit testing* ensures that any part of the code delivers expected output

- *Component testing* verifies the functionality and/or usability of single complex object

- *Smoke testing* verifies the basic functionality of program at earlier stages of development

- *Integration testing* finds out how individual components function together

- *Regression testing* makes sure that codebase change hasn’t broken the existing functionality

- *Sanity testing* determines that the minor modifications have fixed the issues and haven't introduced new ones

- *System testing* evaluates complete, integrated system's compliance with the specified requirements at final stages

- *User acceptance testing* verifies that software can handle actual users' required tasks in real-world scenarios*

**Test-driven development (TDD)** is a software development process relying on software requirements being tested before release and tracking all development by
repeatedly testing software against all cases.

Abstracting from code, development is a labor process that obviously should be optimized. For this reason multiple process control techniques are used in IT.
**Agile** is collective name of various methods and approaches to management. It's main points are:

- Focus on the needs and goals of customers for all employees of the company

- Maximum simplification of the organizational structure, rules, processes etc

- Working in short iterative loops with intermediate results

- Active systematic use of feedback and retrospective

- Increasing the authority, independence, responsibility of employees

**Scrum** is an agile framework for developing, delivering, and sustaining complex products with focus on a software development. In scrum process, teams of ten or
fewer members break their work into goals that can be completed within iterations called sprints in time intervals of 2-3 weeks. The team tracks progress in 
15-minute daily meetings, called scrums. At the end of the sprint, team reviews sprint, demonstrates what's done, and investigate their mistakes to improve 
continuously.

**Kanban** is a lean method of managing and improving work across humans. This approach aims to balance demands with available capacity and improve handling of 
production process bottlenecks. Work is visualized to give participants a view of progress and process from start to finish via so-called Kanban board, and tasks are 
pulled as capacity permits. The goal is to provide a visual process management system which helps decision-making about what, when, and how much to do. Kanban
is commonly used in software development in combination with other methods such as Scrum.
