# Webcomponents framework

Build component-oriented webapps using Custom Elements with separate HTML CSS and script files and no configuration.
With a bit of inspiration from Angular.

More about Web components & custom elements:
* [javascript.info](https://javascript.info/web-components)
* [MDN](https://developer.mozilla.org/fr/docs/Web/Web_Components/Using_custom_elements)

## About

This project is the continuation of my [webcomponents boilerplate](https://github.com/GregoryAlbouy/webcomponents-boilerplate) in vanilla JavaScript.

>Web components allow to create natively custom tags having their own template, style and behaviour. The ability to customize, encapsulate in the Shadow DOM and reuse them makes it a powerful feature.
>But it comes with two drawbacks:
>
> * Every component require the same repetitive configuration
> * HTML, CSS & JavaScript are mixed in the same js file
>
> The present boilerplate is a pattern I created that intent to solve these issues [...]

Very light and simple solution, but at the cost of performance: without a bundler to manage the separate assets, they had to be **fetched live**, and you generally don't want to waste time loading your own templates.

This version, however, takes full benefit of Webpack by gathering source files on compilation time. No more fetching!

### Tech stack

It comes with prepared configurations of:

* Webpack
* TypeScript
* Sass
* Babel
* PostCSS


## Get started

### Installation
```shell
git clone https://github.com/GregoryAlbouy/webcomponents-framework.git
```

In project directory:
```shell
npm i
```

### Main commands

* `npm start` runs the dev-server in development mode with HMR on `localhost:9999`. Default port can be changed in `/.config/webpack.dev.js`
* `npm test` runs the dev-server with `index.test.ts` as entry point on `localhost:9998`. Default port can be changed in `/.config/webpack.test.js`
* `npm run watch` watches files in development and compiles the output into `/dist/` directory
* `npm run dev` compiles files once in development mode into `/dist/` directory
* `npm run prod` compiles the files once in production mode into `/dist/` directory

### Create new component

Sorry, no `ng generate` here!

* Use the placeholder-component as a model and rename it and its files to the desired tag-name (must contain a hyphen `-`). Also, do **not** remove the `.c` extension in component files.
* Update references to the files:
    * in the former `placeholder-component.ts`: template imports, tagname and the name of the class
    * in `components.ts`: import and export
    
That's it! The component is ready to use.

### Use a component

To use a component, just import it in the current script file and use it as any Element:

```typescript
import { MyComponent } from '../components'
```
and
```typescript
xxx.appendChild(new MyComponent())
```
or
```html
<my-component></my-component>
```

### Setup a component

#### HTML & CSS

* Build the template in the `.c.html` file
* Elaborate styles in the `.c.scss` file. Since they're encapsulated in the shadow DOM, there's no need for complex class names sur as BEM convention

#### Logics

The logics remains in the component's `.ts` file.
* The shadow root is accessible through `this.root` property
* All components come with some handy functions inherited from `BaseComponent`
    * `this.select(query)` shortcut to `this.root.querySelector(query)`
    * `this.select(query, true)` shortcut to `this.querySelector(query)`
    * `this.selectAll(query)` shortcut to `this.root.querySelectorAll(query)`
    * `this.selectAll(query, true)` shortcut to `this.querySelectorAll(query)`
    * ... and more to come!


## Todo

* Implement a custom html parser (in progress)
* Gather internal dependencies in a npm package
* Allow various configurations (no-ts, no-css, ...)
* Allow components without shadow root