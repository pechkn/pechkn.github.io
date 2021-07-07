# Programming basics

**Declarative programming** is a paradigm of building programs by expressing the logic of element's without describing their control flow. One type of declarative
programming is **Functional programming (FP)**. It assumes constructing programs by applying and composing functions, mainly **pure** ones. Pure function, firstly,
doesn't have side-effects and, secondly, always gives same output with same input.

On the contrary, **imperative programming** assumes implementing algorithms in exact explicit steps, impure **procedures**. The main implementation of it,
**Object-Oriented Programming (OOP)**, is based on the concept of objects which can contain data in form of fields and code, in the form of methods. 4 principles of
OOP are:

- _Encapsulation_, ability to change access scope of field

- _Abstraction_, separating identical properties of different objects into another

- _Inheritance_, ability to create objects by extending existing ones

- _Polymorphism_, different method behaviour depending on type and amount of input

**SOLID** is an OOP acronym for a group of five good principles in programming that allows to write easy to understand and change code. It stands for 5 principles:

- _Single responsibility_ states that class does one and only one thing

- _Open/closed_ assumes that class to be open or closed to be used by others
- _Liskov's substitution_ states that class can be replaced by any of its children
- _Interface segregation_ assumes that classes' interfaces should be separated into many small promises for simpler interaction

- _Dependency inversion_ assumes that classes shouldn't expect each other to never change, should use promises and could change as long as they allow

The objects of all manipulations in programming are **data structures**:

- _Array_ consists of a collection of elements, each identified by index

- _Stack_ is a collection of elements with two main principal operations - _push_ and _pop_ in _last in, first out (LIFO)_ order

- _Queue_ is a collection of entities that can be modified by addition and removal of entities in _first in, first out (FIFO)_ order

- _Linked list_ is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next

- _Graph_ represents relations or connections between nodes. Graph can be _directed_ or _undirected_, _weighted_ or _non-weighted_

- _Tree_ is a graph that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes

- _Hash table_ implements an associative array that can map keys to values

Very important part of computer science is **algorithms**:

- _Binary Search_ finds index of target number in sorted array of other numbers by dividing it on two halves on each iteration. Efficiency is O(log(n)),
  where _n_ is array length.

- _Insertion Sort_ sorts array of numbers by comparing and ordering them one by one. Efficiency is from O(n) to O(n<sup>2</sup>).

- _Selection Sort_ sorts array by finding and selecting next the smallest number across array one after another. Efficiency is O(n).

- _Merge Sort_ sorts array by dividing it on two halves based on index on each iteration and sorting each half. Efficiency is O(n \* log(n)).

- _Quick Sort_ sorts array by dividing it on two halves based on some median value called pivot and sorting each half. Efficiency is from O(n \* log(n)) to
  O(n<sup>2</sup>).

- _Heap Sort_ sorts array by dividing it on sorted and unsorted parts and finding and selecting next the smallest number across unsorted part one after another.
  Efficincy is O(n \* log(n)).

- _Counting Sort_ sorts array of values in specific range by counting value's number of appearances in array one by one. Efficiency is O(n + k), where _k_ is
  values range.

- _Breadth-First Search (BFS)_ searches tree or graph data structure by checking neighbours of nodes level by level. Efficiency is O(v + e), where _v_ and _e_ are
  amounts of graph vertices and edges respectively. Any graph algorithm is considered _inorder_, if it discovers left child node earlier than right and _reverse_ if vice
  versa.

- _Depth-first Search (DFS)_ searches tree or graph data structure by checking node branches as far as possible one by one. Efficiency is O(v + e).

- _Kruskal’s Algorithm_ constructs tree of edges with minimum weight out of undirected connected graph. Efficiency is O(n<sup>2</sup>).

- _Dijkstra’s Algorithm_ finds the shortest path in weighted graph with non-negative edge weights from root. Efficiency is O(e \* log(v)).

- _Floyd Warshall's Algorithm_ finds the shortest path in weighted graph with possible negative edge weights from root. Efficiency is O(v<sup>3</sup>).

- _Bellman–Ford's Algorithm_ finds the shortest path in weighted graph with possible negative edge weights from particular given vertex. Efficiency is O(v + e).

- _Kadane's Algorithm_ constructs subarray with biggest sum within from array of numbers by placing maximum subarray endings at each index. Efficiency is O(n).

- _Lee's Algorithm_ finds shortest path from given coordinates to another in a maze that is represented as matrix with ways as ones and walls as zeroes. Efficiency
  is O(a * b), where *a* and *b\* are matrix dimensions.

- _Flood Fill Algorithm_ finds the biggest connected area of same values in matrix by using BFS. Efficiency is O(a \* b).

- _Floyd's Cycle Algorithm_ detects cycle in a linked list by hashing and grouping nodes. Efficiency is O(n).

- _Topological Sort_ constructs topological flattened sequence of nodes from weighted Directed Acycled Graph (DAG). Efficiency is O(v + e).

**Patterns** are general, reusable solutions to a commonly occurring problems in software development:

- _Factory Method_ assumes that superclass with interface for creating objects allows child classes to alter their type

- _Abstract Factory_ assumes the possibility of creating families of related objects without specifying their concrete classes

- _Builder_ assumes constructing complex objects step by step with ability to produce different types of it on different stages

- _Prototype_ is an abstract instance with non-unique code that can be shared across multiple objects

- _Singleton_ is a class that strictly has only one instance and provides a global access point to itself

- _Adapter_ is something that allows objects with incompatible interfaces to interact

- _Bridge_ assumes splitting large class or closely related classes into abstraction and implementation which can be developed independently

- _Composite_ is an object that can be recursive child and parent of other objects while still normally acting as individual object

- _Decorator_ is a wrapper that can attach new behaviors to objects by placing them inside itself

- _Facade_ is a simplified interface to a library, a framework, or any other complex set of classes

- _Flyweight_ assumes fitting more objects into the available amount of memory by sharing common parts in multiple objects

- _Proxy_ is a placeholder of another object that allows to access the object and perform something before or after it

And, finally, all code, good or bad, should be covered with different **tests**:

- _Unit testing_ ensures that any part of the code delivers expected output

- _Component testing_ verifies the functionality and/or usability of single complex object

- _Smoke testing_ verifies the basic functionality of program at earlier stages of development

- _Integration testing_ finds out how individual components function together

- _Regression testing_ makes sure that codebase change hasn’t broken the existing functionality

- _Sanity testing_ determines that the minor modifications have fixed the issues and haven't introduced new ones

- _System testing_ evaluates complete, integrated system's compliance with the specified requirements at final stages

- _User acceptance testing_ verifies that software can handle actual users' required tasks in real-world scenarios\*

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

# Web basics

_Internet_ is the global system of connected computer networks. Basically, it can be put another way: computers of global network are servers, and files they hold
are websites.

**Server**, or **Hosting** is the computer that has access to network and can share data to other computers. In fact, almost any computer can be server. Some
companies provide **hosting services** - they share their computer resources with anyone to place data there for some cost.

Any computer with internet access has unique **Internet Protocol (IP) address** to communicate with other devices in network. Any device in the same network can
be accessed by IP address. IPs can be static or dynamic (change periodically).

One computer can perform many internet-related tasks, e. g. act as multiple servers, and thus has multiple **ports**. Port is a number written with a colon after
IP address. Any connection with IP accesses it through some port.

**Hypertext Transfer Protocol (HTTP)** is what allows data sharing. It represents international standart of accessing websites. By default, port _80_ is used to
access webpage. HTTP shares **Create, read, update and delete (CRUD)** interface convention and has multiple request types respectively to CRUD:

- _POST_ is used to submit data to the specified resource

- _GET_ requests and retrieves data of the specified resource

- _PUT_ replaces all data of the target resource with the request payload

- _DELETE_ deletes the specified data

- _HEAD_ asks for a response identical to that of a GET request, but without the response body

- _CONNECT_ establishes a tunnel to the server identified by the target resource

- _OPTIONS_ is used to describe the communication options for the target resource

- _TRACE_ performs a message loop-back test along the path to the target resource

- _PATCH_ is used to apply partial modifications to data

HTTP responses of target server are grouped in five classes:

- _Informational_ responses (100–199)

- _Successful_ responses (200–299)

- _Redirects_ (300–399)

- _Client_ errors (400–499)

- _Server_ errors (500–599)

**Hypertext Transfer Protocol Secure (HTTPS)** is more prevalent today. That's basically encrypted and more secure version of HTTP, which also uses port 443 instead
of 80.

**Representational state transfer (REST)** is a messaging protocol which uses a subset of HTTP and **JavaScript Object Notation (JSON)** and is used to create Web
services called _RESTful_. Such service must provide it's resources as text and allow them to be read and modified with a stateless protocol and a predefined set
of operations. This approach allows interoperability between the computer systems that provide these services. REST assumes creation of **endpoints**,
address-interface exposed by server, like _GET /articles/_ for getting news articles, _POST /articles/_ for adding a new article or _DELETE /articles/:id_ to delete
an existing article with the given ID. Another, older and less popular protocol is **Simple Object Access Protocol (SOAP)**. It's purpose is to provide extensibility,
neutrality, verbosity and independence via usage of **Extensible Markup Language (XML)** and relying on application layer protocols, usually HTTP.

**Website** is some set of files, primarily document written in **HyperText Markup Language (HTML)**. It can be placed on computer with Internet access or without one.

**Domain** is, simply taken, website address. It is unique string that can be used as server address without relying on it’s IP. Domains are formed by **Domain
Naming System (DNS)** rules and consist of multiple parts, at least two - some string and **Top Level Domain (TLD)**. TLDs aren’t random and can only be obtained
from special organizations providing **domain registration services** for some cost.

**Browser** is a software for retrieving websites from servers and displaying them to user. Web browser consists of **Uniform Resource Locator (URL)** handler,
which is responsible for finding specific servers and connecting to them, and **rendering engine**, which converts HTML document to acceptable view.

**Cross-Origin Resource Sharing (CORS)** is an HTTP-header based mechanism that allows a server to indicate it' own domains from which browser is allowed to load
resources. This mechanism makes possible secure cross-origin requests and data transfers between browsers and servers, and is implemented via preliminary request
that checks if connection is possible.

**Socket** is a software structure within a network node of a computer network that serves as an endpoint for sending and receiving data continuously in real time.
The structure and properties of a socket are defined by an **Application Programming Interface (API)** for the networking architecture. Sockets are created only during
the lifetime of a process of an application running in the node. It's externally identified to other hosts by socket address.

To improve network speed and efficiency, **Content distribution network (CDN)** is used. It's a geographically distributed network of proxy servers and their data
centers. The goal is to provide high availability and performance by distributing the content from the closest server to user. Also it can help with handling of
**Denial-of-service (DoS)** attacks, when servers are flooded with superfluous requests in attempt to overload systems and prevent legitimate requests from being
fulfilled.

As web apps increase in size and complexity, they begin to replace traditional mobile or even desktop apps. This approach is called **Progressive Web App (PWA)** and
such apps must implement following features: HTTPS, **service worker** and a **manifest**. Service worker is a script that controls handling network requests and
asset caching. It can make web page faster and even work offline. Manifest is JSON file that controls how app appears to the user: describes the name of the app,
the start URL, icons etc, much like mobile app's manifest.

Web-component-based client-side frameworks have problems with search engines indexation because all code on page is essentially JavaScript, not HTML. **Server-side Rendering (SSR)** solves them by rendering a client-side SPA on the server and then sending complete page to the client. This allows for dynamic components to be served as static HTML markup.

Important to note the **Open Web Application Security Project (OWASP)**, nonprofit foundation that works to improve the security of software. It monitors possible
vulnerabilities in web and publishes their summaries regularly. OWASP is very useful information resource for web-developers.
