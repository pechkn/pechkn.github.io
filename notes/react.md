---
title: React, Redux, Mobx
---

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
