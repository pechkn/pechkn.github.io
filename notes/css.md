---
title: CSS and related
---

# CSS and related

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
