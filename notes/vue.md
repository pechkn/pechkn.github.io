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
of the event: `<div v-on:click="$emit('function()')">`. Also, parent's methods can be accessed directly via *$parent* context, e. g. `$parent.function()`.

**Transition** components allows to add entering/leaving transitions for any component, e. g.
`<transition name="fade"><div>Text</div></transition>`. To make it work there should be CSS classes with corresponding transition name
and 5 suffixes: _-enter_, _-enter-active_, _-enter-to_ _-leave_ _-leave-active_, _-leave-to_. State changes also can be animated by
simultaneously using transitions and watchers.

Vue functionality can be extended via **plugins**, which are connected by calling _use_ method before creating main app object, e. g.
`Vue.use(plugin)`.

**Routing** in Vue is done by simply importing *vue-router* module and creating routes object, where key is address and value is component, e. g. `const routes = {'/': Home}`, and then inserting *<router-view>* tag in component.

**Vuex**

**Nuxt**