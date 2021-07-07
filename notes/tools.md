# React, Redux, Mobx

**React** is the most popular open-source front-end JS library for building user interfaces and their components. React follows **JS-first** approach, so DOM tree is
built without using html. Instead, HTML-like syntax that is transpiled to JS, **jsx**, is used. On the contrary, **HTML-first** frameworks such as _Vue_ are based on
JS that wraps around HTML markup. In jsx, elements look just like tags, with _< >_ on sides. They are cheap to create plain objects, and React takes care of updating
the DOM to match them. Logic code is separated from layout by _{ }_, e. g. `const element = <h1>2 + 2 is {2 + 2}</h1>`. Elements can be inserted in root DOM like this:
`ReactDOM.render(element, document.getElementById('root'))`.

React divides everything into **components**, functions or classes that take arguments called **props**, return jsx layout in the format of single element, and can be
nested inside each other. In this case, props are passed as HTML-like attributes. E. g.,
`const Component = (props) => (<div>{props.text}</div>)`, `class ComponentB extends React.Component { render(){ return(<p> <Component text='Hello world'/> </p>)}`.
Input tags' values are controlled via corresponding prop, e. g. `<input value={'text'}/>`.

**Events** in React are the same as in HTML, but named using camelCase, rather than lowercase, and take function instead of string as argument, e. g.  
`<button onClick={handleClick}>`. Sometimes they are called on context using _this_ keyword or given as return of other function, e. g. `this.handleClick`,
`() => handleClick()`. For operations outside of the typical dataflow such as managing focus, text selection, or media playback, **refs** are used like this:
`const ref = React.createRef(); <div ref={ref} />`.

Component can have some reactive data within called **state** and rerender when it changes. In class it's done via necessary method called **constructor**, e. g.
`constructor (props) { super (props); this.state = { text } }`, whereas in function via **hook**, e. g. `const [text, setText] = useState('Hello world')`. To manage
components rendering in classes more presicely, react offers **lifecycle** methods:

- _setState_ changes component state and re-renders it and its' children with updated state

- _forceUpdate_ forces re-render of component even if nothing is changed

- _componentDidMount_ is invoked immediately after a component is inserted into the DOM

- _componentWillUnmount_ is invoked immediately before a component is removed from the DOM

- _componentDidUpdate_ is invoked when component gets re-rendered

- _getDerivedStateFromProps_ is invoked each time right before calling the render method

- _getSnapshotBeforeUpdate_ is invoked right before the changes are committed to the DOM

- _shouldComponentUpdate_ controls which changes in state or props trigger re-render

- _getDerivedStateFromError_ is invoked after an error has been thrown by a component

- _componentDidCatch_ is invoked after an error has been processed by a component

Functional components for this purpose rely on, once again, hooks. There are also multiple types of them with a variety of features:

- _useState_ returns a state value and a function to update it

- _useEffect_ asynchronously runs imperative, possibly effectful code after component is rendered

- _useContext_ accepts a context object and returns it's current value

- _useReducer_ returns a state paired with a dispatch method which can modify it indirectly
- _useCallback_ accepts an callback and an array of dependencies and returns it if they change

- _useMemo_ accepts an function and an array of dependencies and recomputes it if they change

- _useRef_ returns a mutable ref object initialised with the passed argument

- _useImperativeHandle_ customizes handler is exposed to parent components when using refs

- _useLayoutEffect_ is identical to useEffect, but also runs after all DOM mutations

- _useDebugValue_ can be used to display a label for custom hooks in React DevTools

**Redux** is a immutable state container, often used with React. Global state of app represents an single object tree called **store**, and is created by
combining **reducers**. Reducer is a function that takes store and some **action**, object with _type_ string field, on input and transforms store accordingly. This
interaction called **dispatch**. E. g. `function reducer(state, action) { action.type === 'change' && return { ...state, a: 1 } }; let store = createStore(reducer)`.
Program usually has some kind of initial state and multiple small reducers instead of big one for the sake of simplicity.

**Mobx** is another, less popular state managing tool. It's main difference of redux is mutable state, that can be changed on-the-fly. Mobx is, in general,
singnificantly simpler, - it just provides data straightforward reactivity via different **observers**, e. g. `let a = Observable(0)`, and an interface to react on it
with functions. Mobx also has built-in type system. Store with all fields and actions looks like this:
`const Store = types.model({ a: types.number }).actions((self) => ({ changeState() { self.a = 1 }})`.

# Vue, Vuex, Nuxt

**Vue** is a modular progressive framework for building user interfaces. That means that it includes all neccessary parts for web app
development, on the contrary to React, which is just a library. Vue file looks as normal HTML document with 3 tags: _template_,
_style_ and _script_. First one holds HTML layout, second - stylesheets, and third actually initializes vue itself by exporting object
with all fields, e. g. `export default { data() { return variable } }`. Vue follows **HTML-first** and it's core feature is inserting
data declaratively in the HTML DOM via _{{ }}_ syntax, e. g. `<div>{{ variable }}</div>`. Such data can also be **filtered** by some method, e. g. `{{ variable | capitalize }}`.

Vue app is inserted in DOM like this: `new Vue({ render: h => h(App), }).$mount('#app')`, and creating of multiple **components** in a single file is simple too: `Vue.component('Component', { })`. To make it reusable across app **global component**, it should also be exported from parent component. Aside from some options, like
**slots**, ability to dynamically pass content to component, e. g. `<div>Appended text</div>`, HTML code in file is pretty much standart.
Vue component is essentially an object with pre-defined fields:

- _data_ holds variables used in component

- _watch_ observes particular data piece and executes on change

- _template_ contains HTML layout

- _props_ stands for **props**, array of input data

- _created_ and other simmilar methods control **lifecycle** of app

- _methods_ holds differect functions used in component

- _computed_ is equal to _methods_ but caches data

- _mixins_ hold array of **mixins**, objects that can be inserted in any component to add their functionality

Conditional operators, loops, **events** and other manipulations are done via
**directives** which look like HTML attributes, e. g. `<div v-if="variable">`, `<button v-on:click='function()'>`,
`<div v-for="item in items">`. _v-model_ directive is notable for making two-way binding between inputs and app state and making Vue
completely **reactive**. It should have same name as
corresponding field in Vue instance's data, e. g. `<input v-model="variable">`.

Some directives have **modifiers** which, obvously,
modify their behavior, e. g. prevent reloading of page like that: `<form v-on:submit.prevent="function()">`,
`<div v-on:click.ctrl.exact="onCtrlClick">`. Directives can be quite long, so **shorthands** come into play, e. g. _v-bind_ is
shorthanded to _:_, _v-on_ - to _@_ etc. Standart HTML attributes also have Vue bindings, e. g. `<div :class="{ active: isActive }">`,
`<div :style="{ color: activeColor }">`.

Child component can emit an event on itself to **callback** the method of parent component by calling _$emit_ method and passing the name
of the event: `<div v-on:click="$emit('function()')">`. Also, parent's methods can be accessed directly via _$parent_ context, e. g. `$parent.function()`.

**Transition** components allows to add entering/leaving transitions for any component, e. g.
`<transition name="fade"><div>Text</div></transition>`. To make it work there should be CSS classes with corresponding transition name
and 5 suffixes: _-enter_, _-enter-active_, _-enter-to_ _-leave_ _-leave-active_, _-leave-to_. State changes also can be animated by
simultaneously using transitions and watchers.

Vue functionality can be extended via **plugins**, which are connected by calling _use_ method before creating main app object, e. g.
`Vue.use(plugin)`.

**Routing** in Vue is done by simply importing _vue-router_ module and creating routes object, where key is address and value is
component, e. g. `const routes = {'/': Home}`, and then inserting _<router-view>_ tag in component.

**Vuex** is the official library for state management in Vue. It is very similar to Mobx and partly to Redux, and consists of three main
concepts: **state**, a global storage of all data, **mutations**, methods that alter the state, and **views**, components that access it.
Store with state and mutations can be created by connecting corresponding plugin and creating Vuex object:
`Vue.use(Vuex); const store = new Vuex.Store({ state: { }, mutations: { } })`. Views access store data via _$store_ context, e. g.
`{{ $store.state.variable }}`. To call mutation, component should declare method that does corresponding _commit_ to state, e. g.
`getVariable() { this.$store.commit('getVariable') }`. Asynchronous mutations are called **actions** and are executed by _dispatch_
method, e. g. `this.$store.dispatch('getVaribale')`. Vuex store can also be separated on multiple modules, smaller Vuex objects, and then inserted into main object with _modules_ field, e. g. ` modules: { a: moduleA, b: moduleB }`.

As Vue is less fundamentally different from normal static JS sites than React, server-side rendering is widely applied to it.
**Nuxt.js** is a framework to build such SSR sites. It represents a wrapper for Vue components with lots of middleware options such as
meta tags and is compiled to HTML. Nuxt allows for creation of **document** file that consists of standart HTML code including head and applied to entire app. One of the features is **layouts**, custom sets of CSS and script rules that can be applied to
multiple components to customize their looks. Layout is a _.vue_ file in _layouts/_ folder of project that has _<template>_ tag inside.
SSR requires Nuxt to be running on Node server and app's components to match criterias, such as strictly following lifecycle, correct usage of anchor links and navigating between pages with _<NuxtLink>_ component.

# Other tools

These days almost no front-end development is done without **Node.js**, CLI JavaScript runtime based on Chromium engine. It allows to run scripts without browser and even
create servers based on JS completely. **Node Package Manager (NPM)** is the biggest software library in the world and at the same time a helper tool for Node users.
NPM's packages are open source and made by users from all over the world, as well as NPM itself. Aside from hosting JS code, NPM helps with package creation, dependencies
resolution etc. **Yet another resource negotiator (Yarn)** is Facebook's alternative to NPM with some differences and additional functionality.

No code can be written without proper IDE or, at least, text editor. **Visual Studio Code** is partly open source and very popular among front-end developers code editor
with dedicated functionality that can be extended by addons. On of them is code analyser for identifying problematic patterns called **ESLint**. **Prettier** is another
famous extension that formats code and makes it look more consistent and readable.

Essential software for any programmer is **version control system (VCS)**, and **Git** is the most popular one. Git is open source and it's main purpose is tracking
changes of files in directory, managing repositories and branches with different versions of project codebase. Another popular VCSes are Mercurial and Subversion.
To preserve and backup all VCS information, it is often hosted on servers. **GitHub** is the most widely used free hosting for Git repositories, as well as Gitlab and
Bitbucket. Both offline and online Git tools are neccessary for any developer's career.

There are many different **testing** and **deployment** tools like **Jest**. It is a JS framework for writing tests with focus on
simplicity to ensure correctness of any codebase. For example, to test any _module_, there should be file called _module.test.js_,
and the simplest expectation test uses _expect_ and _toBe_ keywords and looks like this: 
`test('1 + 2 is equal 3', () => { expect(sum(1, 2)).toBe(3) })`.

**Webpack** is an open-source JS module bundler that transforms front-end assets such as HTML, CSS, and images if the corresponding loaders are included and generates
static assets representing those modules with dependencies. It's config represents JS module with exports and rules for sources, e. g. `const cssRegex = /\.css$/`,
`mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development'`. Most web apps nowadays use webpack to compress and control included resources.

**TypeScript** is a strict syntactical superset and compiler of JS that adds static typing to the language and is designed for the development of large applications and
avoiding common type conversion errors. In typscript, any variable has exact type that is one of the _Boolean_, _String_, _Number_, _Array_, _Tuple_, array with fixed
amount but not type of input, _Enum_, set of numeric values, e. g. `enum Color { Red = 1, Green, Blue }`, _Unknown_, _Void_, _Never_, exception or undefined return,
_Object_, _Null_ or _Undefined_ and _Any_. Any type is written with _:_ or **type assertion**, _<>_, e. g. `let a : number` or `let object = <Object>{ }`. TS also has
ways to create custom types via **interfaces**, e. g. `interface Props { a : number }`. Another TS feature, **Generics**, are functions that can imply polymorphism, e. g.
`function (a: number): number { }`. TS allows to create **abstract** classes, that only meant to be extended from, and that certain fields need to be filled to create an
instance, e. g. `abstract class Class { abstract method(): void }`.
