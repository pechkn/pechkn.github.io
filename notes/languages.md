# HTML

**HTML** is markup language designed to be displayed in browser. Everything in HTML document is represented in **tags** - short strings in angle
brackets. **Nesting** tags can contain others, while **self-closing** tags can't. Any tag ends with slash symbol inside, e. g.
`<p> <a> </a> </p>` or `<img />`. Most of the tags are **semantic**. That means they have some meaning and are used to describe and distinguish
contents more accurately and clearly, e. g. `<article>`, while technically they aren't any different from non-semantic tags such as `<div>`.

**Accessibility** is important trend in web-development which opens up opportunities of browsing websites for people with disabilities. It
includes mainly making HTML semantic, declaring site language, correct using of tags, especially headings, creating meaningful links and adding
alternative texts or placeholders where possible.

**Form** tags can take some input from user and then **validate** and/or **process** it, both using tag attributes. An example, `<input>` tag can
be required to fill, or have minimum or maximum length, specific type of data etc, and after submitting form it's contents are sent to server.

**Search Engine Optimization (SEO)** is widely used to increase the number of site visits. Rational HTML structure of a website can raise it in search results. As
**site indexation** is made by search engine bots, there are some requirements for it's best course. Not only good texts and relevant words can help, but also reasonable
page size and contents, correct headings structure and anchor links with popular webpages.

Shadow DOM with HTML **templates** makes up a set of technologies called **Web components**. Elements in `<template>` and `<slot>` tags aren't displayed on the page
by default and imply JS manipulation. Web components are reusable, versatile and very customizable, and most JS libraries and frameworks such as _React_, _Vue_
or _Angular_ nowadays implement them.

# CSS

**Cascading Style Sheets (CSS)** is language used to style HTML, XML,
SVG and other documents. It's syntax consists of **selectors** and
**rules**, applied to every selected element on the page. Selectors are
strings representing HTML tags, ids, classes, pseudoclasses etc. Rules are
pairs of property and value, divided with `:` and ended with `;`. Every element is positioned on page by rules of one of
different **layouts**.

- **Normal flow** is the default layout, where elements are placed one
  after another, depending on their size and value of
  `display` value, e. g. `block`, `inline`, `inline-block` or other.

- **Floats** can align elements to different sides of parent containers.
  In combination of **margins** and **paddings**, they are powerful
  enough to create quite complex layouts.

- **Positioning** allows to take elements out of normal layout flow and
  place them independently of other elements.

- Css **flexbox** is single-dimensional layout method which can be used
  to create very complex row or column layouts.

- **Grid** is the most complicated and full-featured way to position HTML
  elements nowadays. It's two-dimensional and packed with a lot of
  properties allowing precisely predefine elements' place on the webpage.

Important trend in web development is **responsiveness**. Responsive
design is set of practices aimed on reacting and giving feedback to the
user of site.

Considering the prevalence of mobile devices with different screen sizes,
web also becomes **adaptive**. According to adaptibe design, pages
should be easily adoptable to any screen size. Adaptiveness is mainly
achieved by **media queries**, sentences beginning with `@` and allowing
to change CSS rules of page depending on screen size, feature support and more.

Common problem of writing layouts is **scope leaking** of styles. Than
means situation where changing styles of one element can suddenly change
styles of another one. It occurs mainly because of similar classnames or
selectors. **Block, Element, Modifier (BEM)** model of writing HTML
classnames is created to prevent such errors. According to BEM, everything
on the page can be described with three categories: _block_, an
independent and re-usable part, _element_, an inseparable part of
block, and _modifier_, specific set of properties of particular
element. Block, element and modifier in classname are placed one after
another and separated by `__` and `_` accordingly.

**CSS frameworks** are another tools to make creating layouts easier.
They offer a lot of preset styles, which are usually applied to elements as HTML classes,
e. g. `<img class='m-auto'/>` is equal to `<img style='margin: auto;'/>`;
or as customized tags in modern front-end frameworks, e.g. `<Pagination>`,
especially with raising popularity of **CSS-in-JS** approach such as **Styled components**
or **CSS modules** that make stylesheets modular and sometimes even imply writing them directly into JavaScript files,
sometimes in a form of reusable objects with styles, e.g. `style = { margin: 'auto' }`
Examples of CSS frameworks are Bootstrap, Materialize, Ant Design, Tailwind.

As sites become bigger and more complicated, the need for system to
simplify writing CSS grows. Those systems called **preprocessors**. The
most popular ones are **Syntactically Awesome Style Sheets (SASS)** and
**PostCSS**. Both share common features, such as references, imports,
conditional operators and even functions. Preprocessors change the way
stylesheets are written and then compile them to normal CSS so browser can
understand it. Main features of them include:

- _Variables_, pieces of information reusable across stylesheet, e. g. `$color: #000`

- _Nesting_, ability to recursively place selectors inside of their bodies, e. g. `ul { li { } }`

- _Mixins_, groups of properties, e. g. `@mixin box { margin: 0; padding: 0 }`

- _Inheritance_, ability to extend existing styles, e. g. `.child { @extend %parent; }`

# JavaScript

**JavaScript (JS)** is high-level, dynamic-types, just-in-time compiled and multi-paradigm scripting programming language. It is one of the core components of web,
and mainly used to make websites interactive and non-static. As an example, even this website uses JS **site generator** Jekyll to render Markdown as HTML. List of
JS-based technologies is literally endless and front-end considered the fastest growing programming branch.

Syntax is Java-like with heavy usage of curly brackets and nowadays optional semicolons. E. g., variables can be created as `var text = 'Hello world!'`, whereas
functions as `function (text) { text = '' }`. Most language methods can be accessed via built-in standart objects, such as Math, Date, JSON, Intl, console and others,
e. g. `console.log(text)`. JS is not strictly-typed and has multiple value properties, _Infinity, NaN, undefined, globalThis_ and fundamental objects, _Object,
Function, Boolean, Symbol_.

Most JS objects - functions, classes - are instances of Object **prototype** and share much in common. Instead of adding functionality to some object, it can be
added in object's prototype and reused across many child objects, e. g. `function.prototype.a = 1`. Then, all inherited from this function objects will have _a_ field.

Language is not **object-oriented** but still has some OOP features, such as some semblance of encapsulation, **scopes**. Keyword `var` creates a global scope variable
that is accessible from anywhere in the script, while `let` creates local scope variable, inaccessible from anywhere except for it's parent function or context.
Executing a function that has global scope variables in it makes them available to all functions. This called **hoisting**, changing contexts. Another JS feature,
**closures**, allows to create private methods in a form of recursive functions which share same lexical environment of parent function.

**Class** is special function, template for creating objects, that encapsulate some data with code to work on that data. Class has it's own context which can't be
hoisted and **constructor** - special method for creating and initializing an object created with a class. One class can extend another with _export_ directive.
In this case class inherits fields of parent class, e. g. `class Dog extends Animal { }`. **Super** keyword is used to access functions of parent, e. g.
`Dog { super.walk }`.

**Arrow functions** simplify and shorten JS code via _=>_ syntax, e. g. `function (a) { return a + 2 }` can be turned into `a => a + 2`. They are assumed to return
a value and by default return _undefined_, as well as any regular function. Arrow functions, however, lack own bindings to this or super, arguments, new.target
keywords; _yield_, _call_, _apply_ and _bind_ function methods; and can't be used as constructors. There are also **Immediately-invoked Function Expressions (IIFE)**
that execute themselves as soon as they are created and are used to avoid polluting module object, e. g. `( function (a) { return a + 2 } ) ()` or `( a => a + 2 ) ()`.

**Destructuring** is a convenient way to unpack values from arrays or properties from objects, as well as **spread** operator - _..._. Variables can be assigned first,
last values, e. g. `[a, b] = [1, 2]`, or the rest of them - `[a, ...rest] = [1, 2, 3, 4]`. Spread operator is also often used to make array copy and modify it, e. g.
add new element like this: `array = [...array, a]`.

JS has **strict mode** which shouldn't be confused with strict typing. It only turns off backward compatibility, changing scripts' behaviour slightly, and using it
is considered to be a good practice. Strict mode can be activated on particular function or whole JS file by adding `'use strict'` line before the required part of
code.

JS files are **modules** that can be exported or imported to another modules via _export_ and _import_ directives, respectively. It's possible to import entire file
or its individual exported fields. In the latter case the required fields are imported fromthe file in curly braces. E. g. `import Module from 'module'` and
`import { a, b } from 'module'`.

Error handling in JS is done via **Try-Catch** statement. Firstly, JS tries to execute code, then, if it doesn't succeed, catches possible error and,
finally, runs some code regardless of result, e. g. `try { a() } catch (e) { console.log(e) } finally { console.log('done') }`. Such statements can be nested and
conditional.

JavaScript synchronously executes code in a single thread, so second line of code won't execute until first line does. However, it's possible to make code
**asynchronous**, e. g. `async function () {}`. That means that function won't block execution of next lines of code. Async function returns **promise** object with
unique methods like _then_, _catch_ etc to notify that it's execution is completed. It also possible to **await** until promise is returned, e. g.
`var result = await new Promise(); console.log( result )`. This way result will be logged after it is returned.

**Asynchronous JavaScript And XML (AJAX)** technique and it's JS implementation, **Fetch** API, allows for making HTTP requests directly from scripts. E. g.,
`var xhttp = new XMLHttpRequest(); xhttp.open("GET", "index.html", true); xhttp.send()`, `fetch('http://example.com/data.json').then(response => response.json())`.

Main purpose of JS is **DOM manipulation**, programmatically creating, deleting, changing elements' properties and styles, e. g.
`document.querySelector('article').textContent = 'text'` changes contents of article tag, and `document.querySelector('article').style.color = 'red'` makes text red.

Any user action on site results in **event** that can be handled by JS. To detect if some action was executed on DOM nested branch of element, event **capturing** is
used. But more often code is executed on the contrary - from deepest element to all of it's parents recursively, this called event **bubbling**. When an event happens
on an element, it first runs the handlers on it then all the way up on other ancestors. To stop script execution until some event occurs and gets handled, event
**loop** is used, e. g. `while (queue.waitForResponse()) { queue.processResponse() }`.

DOM trees can be separated from other, hidden and appended to other parts of DOM. **Shadow DOM** API makes use of this and provides _attachShadow_ function. Shadow DOM
trees can be accessed from outer JS code, if they are attached in _open mode_, and can't be if in _close mode_. E. g.
`var shadow = element.attachShadow({mode: 'open'})`.

**Currying** is an advanced technique that transforms a function from callable with multiple arguments, e. g. `function(a, b)`
to multiple sequential calls, e. g. `function(a)(b)`. It is used to separate functions by input data and get partials that
implement only part of their functionality and is done via recursive wrapper function, e. g. 
`function curry(f) { return function(a) { return function(b) { return f(a, b) } } } `.