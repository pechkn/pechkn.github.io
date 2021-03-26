---
title: Misc dev tools
---

# Misc dev tools

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
