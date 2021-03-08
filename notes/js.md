# JavaScript, algorithms & more

**JavaScript (JS)** is high-level, dynamic-types, just-in-time compiled and multi-paradigm scripting programming language. It is one of the core components of web,
and mainly used to make websites interactive and non-static. As an example, even this website uses JS **site generator** Jekyll to render Markdown as HTML. List of
JS-based technologies is literally endless and frontend considered the fastest growing programming branch.

Syntax is Java-like with heavy usage of curly brackets and nowadays optional semicolons. E. g., variables can be created as `var text = 'Hello world!'`, whereas
functions as `function (text) { text = '' }`. Most language methods can be accessed via built-in standart objects, such as Math, Date, JSON, Intl, console and others,
e. g. `console.log(text)`. JS is not strictly-typed and has multiple value properties, *Infinity, NaN, undefined, globalThis* and fundamental objects, *Object,
Function, Boolean, Symbol*.

Most JS objects - functions, classes - are instances of Object **prototype** and share much in common. Instead of adding functionality to some object, it can be
added in object's prototype and reused across many child objects, e. g. `function.prototype.a = 1`. Then, all inherited from this function objects will have *a* field.

Language is not **object-oriented** but still has some OOP features, such as some semblance of encapsulation, **scopes**. Keyword `var` creates a global scope variable
that is accessible from anywhere in the script, while `let` creates local scope variable, inaccessible from anywhere except for it's parent function or context.
Executing a function that has global scope variables in it makes them available to all functions. This called **hoisting**, changing contexts. Another JS feature,
**closures**, allows to create private methods in a form of recursive functions which share same lexical environment of parent function.

**Class** is special function, template for creating objects, that encapsulate some data with code to work on that data. Class has it's own context which can't be
hoisted and **constructor** - special method for creating and initializing an object created with a class. One class can extend another with *export* directive. 
In this case class inherits fields of parent class, e. g. `class Dog extends Animal { }`. **Super** keyword is used to access functions of parent, e. g. 
`Dog { super.walk }`.

**Arrow functions** simplify and shorten JS code via *=>* syntax, e. g. `function (a) { return a + 2 }` can be turned into `a => a + 2`. They are assumed to return
a value and by default return *undefined*, as well as any regular function. Arrow functions, however, lack own bindings to this or super, arguments, new.target 
keywords; *yield*, *call*, *apply* and *bind* function methods; and can't be used as constructors. There are also **Immediately-invoked Function Expressions (IIFE)**
that execute themselves as soon as they are created and are used to avoid polluting module object, e. g. `( function (a) { return a + 2 } ) ()` or `( a => a + 2 ) ()`.

**Destructuring** is a convenient way to unpack values from arrays or properties from objects, as well as **spread** operator - *...*. Variables can be assigned first,
last values, e. g. `[a, b] = [1, 2]`, or the rest of them - `[a, ...rest] = [1, 2, 3, 4]`.  Spread operator is also often used to make array copy and modify it, e. g.
add new element like this: `array = [...array, a]`.

JS has **strict mode** which shouldn't be confused with strict typing. It only turns off backward compatibility, changing scripts' behaviour slightly, and using it
is considered to be a good practice. Strict mode can be activated on particular function or whole JS file by adding `'use strict'` line before the required part of 
code.

JS files are **modules** that can be exported or imported to another modules via *export* and *import* directives, respectively. It's possible to import entire file
or its individual exported fields. In the latter case the required fields are imported fromthe file in curly braces. E. g. `import Module from 'module'` and 
`import { a, b } from 'module'`.

Error handling in JS is done via **Try-Catch** statement. Firstly, JS tries to execute code, then, if it doesn't succeed, catches possible error and,
finally, runs some code regardless of result, e. g. `try { a() } catch (e) { console.log(e) }  finally { console.log('done') }`. Such statements can be nested and
conditional.

JavaScript synchronously executes code in a single thread, so second line of code won't execute until first line does. However, it's possible to make code
**asynchronous**, e. g. `async function () {}`. That means that function won't block execution of next lines of code. Async function returns **promise** object with
unique methods like *then*, *catch* etc to notify that it's execution is completed. It also possible to **await** until promise is returned, e. g. 
`var result = await new Promise(); console.log( result )`. This way result will be logged after it is returned.

**Asynchronous JavaScript And XML (AJAX)** technique and it's JS implementation, **Fetch** API, allows for making HTTP requests directly from scripts. E. g., 
`var xhttp = new XMLHttpRequest(); xhttp.open("GET", "index.html", true); xhttp.send()`, `fetch('http://example.com/data.json').then(response => response.json())`.

Main purpose of JS is **DOM manipulation**, programmatically creating, deleting, changing elements' properties and styles, e. g. 
`document.querySelector('article').textContent = 'text'` changes contents of article tag, and `document.querySelector('article').style.color = 'red'` makes text red.

Any user action on site results in **event** that can be handled by JS. To detect if some action was executed on DOM nested branch of element, event **capturing** is
used. But more often code is executed on the contrary - from deepest element to all of it's parents recursively, this called event **bubbling**. When an event happens
on an element, it first runs the handlers on it then all the way up on other ancestors. To stop script execution until some event occurs and gets handled, event
**loop** is used, e. g. `while (queue.waitForResponse()) { queue.processResponse() }`.

DOM trees can be separated from other, hidden and appended to other parts of DOM. **Shadow DOM** API makes use of this and provides *attachShadow* function. Shadow DOM
trees can be accessed from outer JS code, if they are attached in *open mode*, and can't be if in *close mode*. E. g. 
`var shadow = element.attachShadow({mode: 'open'})`.
