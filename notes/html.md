# HTML basics
**HTML** is markup language designed to be displayed in browser. Everything in HTML document is represented in **tags** - short strings in angle brackets. **Nesting**
tags can contain others, while **self-closing** tags can't. Any tag ends with slash symbol inside, e. g. `<p> <a> </a> </p>` or `<img />`. Most of the tags are **semantic**. That means they have some meaning and are used to describe and distinguish contents more accurately and clearly, e. g. `<article>`, while technically they aren't any different from non-semantic tags such as `<div>`.

**Accessibility** is important trend in web-development which opens up opportunities of browsing websites for people with disabilities. It includes mainly making HTML
semantic, declaring site language, correct using of tags, especially headings, creating meaningful links and adding alternative texts or placeholders where possible.

**Form** tags can take some input from user and then **validate** and/or **process** it, both using tag attributes. An example, `<input>` tag can be required to fill,
or have minimum or maximum length, specific type of data etc, and after submitting form it's contents are sent to server.

**Search Engine Optimization (SEO)** is widely used to increase the number of site visits. Rational HTML structure of a website can raise it in search results. As
**site indexation** is made by search engine bots, there are some requirements for it's best course. Not only good texts and relevant words can help, but also reasonable
page size and contents, correct headings structure and anchor links with popular webpages.

Shadow DOM with HTML **templates** makes up a set of technologies called **Web components**. Elements in `<template>` and `<slot>` tags aren't displayed on the page
by default and imply JS manipulation. Web components are reusable, versatile and very customizable, and most JS libraries and frameworks such as *React*, *Vue*
or *Angular* nowadays implement them.
