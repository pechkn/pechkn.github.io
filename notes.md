**Declarative programming** - paradigm of building programs by expressing the logic of elements without describing their control flow

**Functional programming**  - type of declarative programming that - constructing programs by applying and composing pure functions

**Pure function** - function that doesn't have side-effects and always gives same output with same input

**Procedure** - impure function

**Imperative programming** - paradigm of building programs by implementing algorithms in exact explicit steps

**Object-Oriented Programming (OOP)** - type of imperative programming based on the concept of classes - objects that can contain data and includes:

- **Encapsulation** - ability to change access scope of field

- **Abstraction** - separating identical properties of different objects into another

- **Inheritance** - ability to create objects by extending existing ones

- **Polymorphism** - different method behaviour depending on type and amount of input

**SOLID** - OOP acronym that stands for 5 principles:

- **Single responsibility** - class does only one thing

- **Open/closed** - class can be opened or closed for others to use

- **Liskov's substitution** - class can be replaced by any of its children

- **Interface segregation** - classes' interfaces should be separated into many small promises for simpler interaction

- **Dependency inversion** - classes shouldn't expect each other to never change, should use promises and could change as long as they allow

**Data structure** - object of any manipulation in programming, such as:

- **Array** - collection of elements, each identified by index

- **Stack** - collection of elements that is modified in **last in, first out (LIFO)** order

- **Queue** - collection of entities that is modified in **first in, first out (FIFO)** order

- **Linked list** - collection of entities whose order is controlled by each element pointing to the next regardless of their location in memory

- **Graph** - representation of connections that can be directed between nodes that can be weighted

- **Tree** - hierarchical graph with root value and subtrees of children

- **Hash table** - associative array that maps keys to values

**Algorithm** - set of rules to be followed by a computer, such as:

- **Binary Search** finds index of target number in sorted array by dividing it on two halves on each iteration, efficiency is O(log(n)), where n -rray length

- **Insertion Sort** sorts array of numbers by comparing and ordering them one by one, efficiency is from O(n) to O(n<sup>2</sup>)

- **Selection Sort** sorts array by finding and selecting next smallest number across array one after another, efficiency is O(n)

- **Merge Sort** sorts array by dividing it on two halves based on index on each iteration and sorting each half, efficiency is O(n \* log(n))

- **Quick Sort** sorts array by dividing it on two halves based on some median value called pivot and sorting each half, efficiency is from O(n \* log(n)) to O(n<sup>2</sup>)

- **Heap Sort** sorts array by dividing it on sorted and unsorted parts and finding and selecting next the smallest number across unsorted part one after another, efficincy is O(n \* log(n))

- **Counting Sort** sorts array of values in specific range by counting value's number of appearances in array one by one, efficiency is O(n + k), where k is range of values

- **Breadth-First Search (BFS)** searches tree or graph data structure by checking neighbours of nodes level by level, efficiency is O(v + e), where v and e are amounts of graph vertices and edges; and becomes **inorder** if discovers left child node earlier than right and **reverse** if not

- **Depth-first Search (DFS)** searches tree or graph data structure by checking node branches as far as possible one by one, efficiency is O(v + e)

- **Kruskal’s Algorithm** constructs tree of edges with minimum weight out of undirected connected graph, efficiency is O(n<sup>2</sup>)

- **Dijkstra’s Algorithm** finds the shortest path in weighted graph with non-negative edge weights from root, efficiency is O(e \* log(v))

- **Floyd Warshall's Algorithm** finds the shortest path in weighted graph with possible negative edge weights from root, efficiency is O(v<sup>3</sup>)

- **Bellman–Ford's Algorithm** finds the shortest path in weighted graph with possible negative edge weights from particular given vertex, efficiency is O(v + e)

- **Kadane's Algorithm** constructs subarray with biggest sum within from array of numbers by placing maximum subarray endings at each index, efficiency is O(n)

- **Lee's Algorithm** finds shortest path from given coordinates to another in a maze that is represented as matrix with ways as ones and walls as zeroes, efficiency is O(a * b), where a and b are matrix dimensions

- **Flood Fill Algorithm** finds the biggest connected area of same values in matrix by using BFS, efficiency is O(a \* b)

- **Floyd's Cycle Algorithm** detects cycle in a linked list by hashing and grouping nodes, efficiency is O(n)

- **Topological Sort** constructs topological flattened sequence of nodes from weighted Directed Acycled Graph (DAG), efficiency is O(v + e)

**Patterns** - general solutions for common problems in software development:

- **Factory Method** - superclass with interface for creating objects allows child classes to alter their type

- **Abstract Factory** - possibility of creating families of related objects without specifying their concrete classes

- **Builder** - constructing complex objects step by step with ability to produce different types of it on different stages

- **Prototype** - abstract instance with non-unique code that can be shared across multiple objects

- **Singleton** - class that strictly has only one instance and provides a global access point to itself

- **Adapter** - something that allows objects with incompatible interfaces to interact

- **Bridge** - split of complex classes into abstraction and implementation that can be developed independently

- **Composite** - object can be recursive child and parent of other objects while still normally acting as individual object

- **Decorator** - wrapper that can attach new behaviors to objects by placing them inside itself

- **Facade** - simplified interface to a library or any other complex set of classes

- **Flyweight** - fitting more objects into the available amount of memory by sharing common parts in multiple objects

- **Proxy** - placeholder of another object that allows to access the object and perform something before or after it

**Test** - technique of executing a program to find failures, such as:

- **Unit testing** ensures that any part of the code delivers expected output

- **Component testing** verifies the functionality and/or usability of single complex object

- **Smoke testing** verifies the basic functionality of program at earlier stages of development

- **Integration testing** finds out how individual components function together

- **Regression testing** makes sure that codebase change hasn’t broken the existing functionality

- **Sanity testing** determines that the minor modifications have fixed the issues and haven't introduced new ones

- **System testing** evaluates complete, integrated system's compliance with the specified requirements at final stages

- **Acceptance testing** verifies that software can handle actual users' required tasks in real-world scenarios

**Test-driven development (TDD)** - software development process relying on software features being tested before release

**Agile** - set of various methods and approaches to management, inludes:

- Focus on customers for all employees of the company

- Simplification of organizational structure, rules, processes

- Short iterative loops with intermediate results

- Retrospective and feedback usage

- Independence and responsibility of employees

**Scrum** - implementation of agile that includes 2-3 weeks iteration of work, 15-minutes daily meetings to track progress, demonstrating and analyzing of what's done

**Kanban** - set of various methods and approaches to management, includes:

- Balancing demands with capacity of available human resource

- Handling of bottlenecks of production process

- Kanban board visualization of work to give an understanding of what, when, and how much to do

**Internet** - global system of connected computer networks

**Hosting** - remote place of website's data

**Server** - computer with permanent access to network and ability to share data with other computers

**Hosting** - service that share computer resources with anyone to place data there for some cost

**Internet Protocol (IP) address** - unique address to communicate with other devices in network that can be **dynamic** if changes periodically of **static** if not

**Port** -  logical construct that identifies a process of network service, written with a colon after and used to access any IP address 

**Hypertext Transfer Protocol (HTTP)** - international standart of accessing websites with default port 80 that offers different types of requests:

- **POST** submits data to the specified resource

- **GET** requests and retrieves data of the specified resource

- **PUT** replaces all data of the target resource with the request payload

- **DELETE** deletes the specified data

- **HEAD** asks for a response identical to that of a GET request, but without the response body

- **CONNECT** establishes a tunnel to the server identified by the target resource

- **OPTIONS** used to describe the communication options for the target resource

- **TRACE** performs a message loop-back test along the path to the target resource

- **PATCH** used to apply partial modifications to data

**Create, read, update and delete (CRUD)** - interface convention shared by HTTP with methods post, get, put and delete

**Responses** of target server are grouped in five classes:

- Informational responses (100–199)

- Successful responses (200–299)

- Redirects (300–399)

- Client errors (400–499)

- Server errors (500–599)

**Extensible Markup Language (XML)** - data storage format in a form of nested tags

**Simple Object Access Protocol (SOAP)** - messaging protocol that uses XML and, usually, HTTP

**JavaScript Object Notation (JSON)** - data storage format in a form of compact objects

**Endpoint** - address-interface exposed by server, like **GET /articles/** for getting news articles or **DELETE /articles/:id** for deleting an article with given ID

**Representational State Transfer (REST)** - messaging protocol that uses JSON and, usually, HTTP and used for web services called RESTful that operate only text resources and share endpoints

**HyperText Markup Language (HTML)** - markup language designed to be displayed in browser, where everything is represented in tags

**Tag** - keyword in angle brackets that is **nesting** if it may contain others and **self-closing** if not, e. g. `<p> <a> </a> </p>` or `<img />`, **semantic**, if has meaning and is used to describe contents more clearly, e. g. `<article>`, and **template** if is designed to be only shown on the page programmatically, e. g. `<template>` and `<slot>`

**Website** - set files of processed by browser, at least document written in HTML

**Domain** - any string that is used as website/server address

**Top Level Domain (TLD)** - unique predefined string, website address extension

**Domain registration service** - special organization that offers and registers TLDs 

**Domain Naming System (DNS)** - software that binds IPs of servers to domains

**Browser** - software for retrieving websites from servers and displaying them to user, that consists of 2 parts:

- **Uniform Resource Locator (URL)** - handler
that is responsible for finding specific servers and connecting to them

- **Rendering engine** - HTML document converter in an acceptable view

**Cross-Origin Resource Sharing (CORS)** - HTTP-header and preliminary request based mechanism that control which domains and IPs are allowed to load server's resources

**Application Programming Interface (API)** - middleware that allows interactions between two programs

**Socket** - software structure within a network node of a computer network that serves as an endpoint for manipulating data continuously and is created only during the lifetime of a application

**Content distribution network (CDN)** - geographically distributed network of proxy servers and their data
centers that provides better performance by manipulating with the content from the closest server to user.

**Denial-of-service (DoS)** - attack when servers are flooded with superfluous requests in attempt to overload systems

**Progressive Web App (PWA)** - modern application development approach with 3 main points:

- **HyperText Transfer Protocol Secure (HTTPS)** - encrypted and more secure version of HTTP with default port 443

- **Service worker** - script that controls network requests handling,
asset caching, can make web page faster and even work offline 

- **Manifest** - JSON file that describes how app appears to the user

**Server-Side Rendering (SSR)** - technique of rendering a client-side SPA on the server and then sending complete page to the client that solves search engines indexation problems of PWAs

**Open Web Application Security Project (OWASP)** - nonprofit foundation that  monitors possible vulnerabilities in web and publishes their summaries regularly

**Accessibility** - web-development approach that makes browsing websites possible for people with disabilities and includes:

- Semantic HTML

- Declaring language of site

- Meaningful links

- Placeholders and alternative texts

**Form** - tag that can take some input from user and then **validate** and/or **process** it, both using tag attributes

**Site indexation** - process by which search engines organise information before a search to enable fast responses to queries

**Search Engine Optimization (SEO)** - set of practices to raise it in search results and increase amount of site visits:

- Rational HTML structure

- Relevant words and texts

- Small webpage size

- Correct headings

- Links with popular webpages

**Web component** - set of technologies that aims on creating reusable custom elements with their functionality encapsulated away from the rest of code

**Shadow DOM** - part of HTML DOM with HTML **templates** that isn't displayed on the page
by default and imply JS manipulation

**Selector** - string representing HTML tag, id, class, pseudoclass etc

**Rule** - pair of property and value, divided with `:` and ended with `;`

**Cascading Style Sheets (CSS)** - language used to style HTML that consists of selectors and rules

**Layout** - set of CSS rules that positions elements on the page, such as:

- **Normal flow** - layout where elements are placed one after another depending on their size and value of `display` value, e. g. `block`

- **Floats** - layout where elements can be aligned to different sides of parent containers

- **Positioning** - layout where elements can be taken out of normal layout flow and placed independently of others

- **Flexbox** - single-dimensional layout that can be used to create very complex row or column layouts

- **Grid** - two-dimensional and packed with a lot of properties layout that allows precisely predefine elements' place on the webpage

**Responsive design** - set of practices aimed on reacting and giving feedback to the user of site

**Media query** - sentence beginning with `@` that changes CSS rules of page depending on screen size, feature support

**Adaptive design** - ruleset that states that pages should be easily adoptable to any screen size and relies heavily on media queries

**Scope leaking** - common problem of styling, situation, where styles of one element suddenly change another, and occurs mainly because of similar classnames or selectors

**Block, Element, Modifier (BEM)** - model of writing HTML classnames, where everything on the page can be described with three categories whose are placed one after another and separated by ```` and ``` accordingly:

- **Block** - independent and re-usable part

- **Element** - an inseparable part of block

- **Modifier** - specific set of properties of particular
element 

**CSS frameworks** - collections of often used preset styles, that are applied to elements as HTML classes,
e. g. `<img class='m-auto'/>`

**CSS modules** - approach of separating styles to multiple files

**CSS-in-JS** - approach of writing CSS styles as JS objects, e.g. `style = { margin: 'auto' }`

**Preprocessor** - program that changes the way
stylesheets are written and then compiles them to normal CSS so browser can
understand it, e. g. **Syntactically Awesome Style Sheets (SASS)** and
**PostCSS**, main features of them include:

- **Variable** - piece of information reusable across stylesheet, e. g. `$color: #000`

- **Nesting** - ability to recursively place selectors inside of their bodies, e. g. `ul { li { } }`

- **Mixin** - group of properties, e. g. `@mixin box { margin: 0; padding: 0 }`

- **Inheritance** - ability to extend existing styles, e. g. `.child { @extend %parent; }`

**JavaScript (JS)** - high-level, dynamically typed, just-in-time compiled and multi-paradigm scripting programming language

**Objects** include: 

- Boolean

- Number

- String

- Dates 

- Math

- RegExp

- Arrays 

- Function

- Objects 

- Error

- BigInt

- Map

- Set

- WeakMap

- WeakSet

- JSON

- promise

- generator

- proxy

- intl

**Primitives** inclide:

- string

- number

- boolean

- null

- undefined

**Values** include:

- Infinity

- NaN

- undefined

- globalThis

**Prototype** - object that can be used to store functionality and reuse it across many child components, e. g. `function.prototype.a = 1`

**Scope** - some semblance of encapsulation, property of objects and variables that controls their accessibility from anywhere in the script

**Hoisting** - making function's inner global variables available to all functions by executing it

**Closure** - technique of making contexts private in a form of recursive functions that share same lexical environment of parent function

**Debouncing** - programming practice used to ensure that function does not execute too often

**Throttling** - programming practice used to ensure that function executes regularly but at most once in a specified time period

**Currying** - technique that separates functions by input data and get partials that implement only part of their functionality, e. g. 
`function curry(f) { return function(a) { return function(b) { return f(a, b) } } } `

**Class** - special function, template for creating objects that encapsulate data with code to work on that data

- **Constructor** - special method for creating and initializing an object created with a class

- **Superclass** - parent class that child extends and functions of which can be accessed via `super` keyword, e. g. `Dog { super.walk }`

**Arrow function** - function that simplifies and shortens JS code via `=>` syntax, but lack `this`, `super`, `new.target`
keywords, `yield`, `call`, `apply` and `bind` methods and can't be constructors, e. g. `function (a) { return a + 2 }` can be turned into `a => a + 2`

**Immediately-invoked Function Expressions (IIFE)** - functions that execute as soon as they are created, e. g. `( function (a) { return a + 2 } ) ()` or `( a => a + 2 ) ()`

**Destructuring** - convenient way to unpack values from arrays or properties from objects using spread operator `...`, e. g. `[a, b] = [1, 2]`, `[a, ...rest] = [1, 2, 3, 4]`, `array = [...array, a]`

**Strict mode** - JS feature that is activated by adding `'use strict'` line before the required part of code, which disables backward compatibility and changes script's behavior slighly: 

- Turns some JS silent errors to throw errors

- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations

- Prohibits some syntax likely to be removed in future versions of languages

**Module** - JS file or it's part that can be exported or imported to another modules via `export` and `import` directives, respectively, e. g. `import Module from 'module'` and `import { a, b } from 'module'`

**Try-Catch** - mechanism of error handling in JS, when it tries to execute code, then, if it doesn't succeed, catches possible error and,
finally, runs some code, e. g. `try { a() } catch (e) { console.log(e) } finally { console.log('done') }`

**Asynchronous** - type of code that won't block execution of next lines of code, e. g. `async function () {}`.

**Promise** - object with unique methods like `then`, `catch` that is returned by async function and is used to notify that it's execution is completed

**Await** - mechanism that executed code after some promise by async function is returned, e. g. `var result = await new Promise()`

**Asynchronous JavaScript And XML (AJAX)** - technique that allows making HTTP requests directly from scripts. e. g. `fetch('http://example.com/data.json').then(response => response.json())`

**DOM manipulation** - programmatically creating, deleting, changing elements' properties and styles, e. g. `document.querySelector('article').textContent = 'text'`

**Event capturing** - programmatical detection of actions on DOM element, made by user 

**Bubbling** - principle in JS, where events are captured from deepest element to all of it's parents recursively

**React** - JS library for building user interfaces in which DOM tree is built with jsx - HTML-like syntax that is transpiled to JS, without html itself, and logic code is separated from layout by `{ }`, e. g. `const element = <h1>2 + 2 is {2 + 2}</h1>`.

**Component** - function or class that returns jsx layout as DOM element and can be nested inside each other, e. g. `const Component = (props) => (<div>{props.text}</div>)`, `class ComponentB extends React.Component { render(){ return(<p> <Component text='Hello world'/> </p>)}`

**Prop** - input data field that is passed to component in a form of function argument or tag attribute

**Ref** - object to access DOM nodes or React elements created in the render method. e. g. `const ref = React.createRef(); <div ref={ref} />`

**Constructor** - method that initializes local state by assigning an object to this.state in class component

**Hook** - function that lets modify React state and lifecycle features in function component, such as:

- `useState` returns a state value and a function to update it

- `useEffect` asynchronously runs imperative, possibly effectful code after component is rendered

- `useContext` accepts a context object and returns it's current value

- `useReducer` returns a state paired with a dispatch method that can modify it indirectly
- `useCallback` accepts an callback and an array of dependencies and returns it if they change

- `useMemo` accepts an function and an array of dependencies and recomputes it if they change

- `useRef` returns a mutable ref object initialised with the passed argument

- `useImperativeHandle` customizes handler is exposed to parent components when using refs

- `useLayoutEffect` is identical to useEffect, but also runs after all DOM mutations

- `useDebugValue` can be used to display a label for custom hooks in React DevTools

**State** - reactive data that is created via constructor or hook, e. g.
`constructor (props) { super (props); this.state = { text } }`, `const [text, setText] = useState('Hello world')`.

**Lifecycle** - set of stages a program undergoes, from initial creation to execution, and React offers multiple lifecycle methods:

- `setState` changes component state and re-renders it and its' children with updated state

- `forceUpdate` forces re-render of component even if nothing is changed

- `componentDidMount` is invoked immediately after a component is inserted into the DOM

- `componentWillUnmount` is invoked immediately before a component is removed from the DOM

- `componentDidUpdate` is invoked when component gets re-rendered

- `getDerivedStateFromProps` is invoked each time right before calling the render method

- `getSnapshotBeforeUpdate` is invoked right before the changes are committed to the DOM

- `shouldComponentUpdate` controls that changes in state or props trigger re-render

- `getDerivedStateFromError` is invoked after an error has been thrown by a component

- `componentDidCatch` is invoked after an error has been processed by a component

**Store** - global reactive state of app that includes data and functions that change it

**Redux** - immutable state container, where global state of app is an single object tree called store. e. g. `function reducer(state, action) { action.type === 'change' && return { ...state, a: 1 } }; let store = createStore(reducer)`

- **Action** - object with `type` field that modifies global app store

- **Reducer** - function that takes action as input and transforms store accordingly 

- **Dispatch** - operation of assigning an action to a reducer

**Mobx** - simple mutable state container, where data as store is directly provided to components by observers

- **Observer** - wrapper function that makes components reactive

**Vue** - JS framework for building user interfaces which includes all neccessary parts for web app development, in which DOM tree consists of HTML tags, separated from code by `{{ }}` syntax, e. g. `<div>{{ variable }}</div>`, and is initialized via exporting object with all fields such as:

- `data` holds variables used in component

- `watch` observes particular data piece and executes on change

- `template` contains HTML layout

- `props` hold array of input data

- `created` and other similar methods control lifecycle of app

- `methods` holds differect functions used in component

- `computed` is equal to `methods` but caches data

- `mixins` hold array of objects that can be inserted in any component to add their functionality

**Directive** - HTML-attribute-alike string that is used for any modification of element in vue, e. g. `<div v-if="variable">`

**Modifier** - field of directive that modifies it's behavior, e. g. `<form v-on:submit.prevent="function()">`, `<div v-on:click.ctrl.exact="onCtrlClick">`

**Shorthand** - shorter symbol version of directive, e. g. `v-bind` is
shorthanded to `:`

**Emitting** - calling method of a parent, e. g. `<div v-on:click="$emit('function()')">`

**Vuex** - mutable Vue state container, where global state of app consists of a global storage of all data, methods that alter that storage via `commit` to `$store` context, and components that access it, and can be created by connecting corresponding plugin and creating Vuex object:
`Vue.use(Vuex); const store = new Vuex.Store({ state: { }, mutations: { } })`

**Nuxt.js** - framework to build server-side rendered sites, a wrapper for Vue components with lots of middleware options that is compiled to HTML and forces to strictly follow lifecycle and use anchor links correctly

- Layout - custom set of CSS and script rules that can be applied to
multiple components that is represented as `.vue` file in `layouts/` folder 

**Node.js** - CLI JavaScript runtime based on Chromium engine that allows to run scripts without browser

**Node Package Manager (NPM)** - software library and Node.js helper that creates packages, resolves dependencies and much more

 **Yet another resource negotiator (Yarn)** - Facebook's alternative to NPM with some differences and additional functionality

**Git** - version control system (VCS) made for trackingchanges of files in directory, managing repositories and branches with different versions of project codebase

**Jest** - JS framework that ensures correctness of any codebase with focus on simplicity, it assumes that on each module there should be file module.test.js with code such as `test('1 + 2 is equal 3', () => { expect(sum(1, 2)).toBe(3) })`

**Webpack** - JS bundler that transforms front-end assets such as HTML, CSS, and images and is configured via JS module with exports and rules for sources, e. g. `const cssRegex = /\.css$/`,
`mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development'`

**TypeScript** - strict syntactical compiler of JS that adds static typing to the language and is designed for the development of large applications and inludes multiple features:

- **Interface** - custom type, e. g. `interface Props { a : number }`\

- **Generic** - polymorphic function, e. g.
`function (a: number): number { }`

- **Abstraction** - class that is only meant to be extended from can be created as following: `abstract class Class { abstract method(): void }`