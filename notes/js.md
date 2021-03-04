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

Main purpose of JS is **DOM manipulation**, programmatically changing elements' properties and styles, e. g. 
`document.querySelector('article').textContent = 'text'` changes contents of article tag, and 
`document.querySelector('article').style.color = 'red'` makes text color red.
