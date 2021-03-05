# JavaScript, algorithms & more

**JavaScript (JS)** is high-level, dynamic-types, just-in-time compiled and multi-paradigm scripting programming language.
It is one of the core components of web, and mainly used to make websites interactive and non-static. 
As an example, even this website uses JS **site generator** Jekyll to render Markdown as HTML. List of JS-based technologies
is literally endless and frontend considered the fastest growing programming branch.

Syntax is Java-like with heavy usage of curly brackets and nowadays optional semicolons. E. g., variables can be created as
`var text = 'Hello world!'`, whereas functions as `function(text){ text = '' }`. Most language methods can be accessed via 
built-in standart objects, such as Math, Date, JSON, Intl, console and others, e. g. `console.log(text)`. JS is not strictly-typed
and has multiple value properties, *Infinity, NaN, undefined, globalThis* and fundamental objects, *Object, Function, Boolean, Symbol*.

JS has **strict mode** which shouldn't be confused with strict typing. It only turns off backward compatibility, changing scripts
behaviour slightly, and using it is considered to be a good practice. Strict mode can be activated on particular function or whole
JS file by adding `'use strict'` before the required part of the code.

Language is not **object-oriented** but still has some OOP features, such as some semblance of encapsulation, **scopes**. 
Keyword `var` creates a global scope variable that is accessible from anywhere in the script, while `let` creates local
scope variable, inaccessible from anywhere except for it's parent function or context. Executing a function that has global
scope variables in it makes them available to all functions. This called **hoisting**. Another JS feature, **closures**, 
allows to create private methods in a form of recursive functions which share same lexical environment of parent function.

**Arrow functions** simplify and shorten JS code via *=>* syntax, e. g. `function (a) { return a + 2}` can be turned into `a => a + 2`. 
They are assumed to return a value and by default return *undefined*, as well as any regular function. Arrow functions, however,
lack own bindings to this or super, arguments, new.target keywords; yield, call, apply and bind methods; and can't be used a constructors.

**Destructuring** is a convenient way to unpack values from arrays or properties from objects, as well as **spread** operator - *...*.
Variables can be assigned first, last values, e. g. `[a, b] = [1, 2]`, or the rest of them - `[a, ...rest] = [1, 2, 3, 4]`. 
Spread operator is also often used to make array copy and modify it, e. g. add new element like this: `array = [...array, a]`.

JS files are **modules** that can be exported or imported to another modules via *export* and *import* directives, respectively. 
It's possible to import entire file or its individual exported fields, in the latter case the required fields are imported from
the file in curly braces, e. g. `import Module from 'module'` and `import { a, b } from 'module'`.

Main purpose of JS is **DOM manipulation**, programmatically creating, deleting, changing elements' properties and styles, e. g. 
`document.querySelector('article').textContent = 'text'` changes contents of article tag, and 
`document.querySelector('article').style.color = 'red'` makes text color red.

**Asynchronous JavaScript And XML (AJAX)** technique and it's JavaScript implementation, **Fetch** API, allows for making HTTP 
requests directly from scripts. E. g., `var xhttp = new XMLHttpRequest(); xhttp.open("GET", "index.html", true); xhttp.send();`,
`fetch('http://example.com/data.json').then(response => response.json())`.

