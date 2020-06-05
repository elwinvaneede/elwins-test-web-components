![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Elwins Test Web Components

Some test Web Components build with Stencil.

# Stencil

[Stencil](https://stenciljs.com/) is a simple compiler for generating Web Components and progressive web apps (PWA). Stencil was built by the [Ionic Framework](http://ionicframework.com/) team for its next generation of performant mobile and desktop Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. It takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run on both [modern browsers and legacy browsers](#browser-support) back to Internet Explorer 11.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

_Note: Stencil and [Ionic](https://ionicframework.com/) are completely independent projects. Stencil does not prescribe any specific UI framework, but Ionic is the largest user of Stencil (today!)_

## Using these components

### Script tag

- Put a script tag similar to this in the head of your index.html:
  ```html
  <script src="https://unpkg.com/elwins-test-web-components@latest/dist/elwins-test-web-components.js"></script>
  ```
- Then you can use the elements anywhere in your template, JSX, html etc.
- For example:
  ```html
  <eve-button href="https://elwinvaneede.com">Website</eve-button>
  ```

### Node Modules

- Run:
  ```shell
  npm install elwins-test-web-components --save
  ```
- Put a script tag similar to this in the head of your index.html:
  ```html
  <script src="node_modules/elwins-test-web-components/dist/elwins-test-web-components.js"></script>
  ```
- Then you can use the elements anywhere in your template, JSX, html etc
- For example:
  ```html
  <eve-button href="https://elwinvaneede.com/newsletter">Newsletter</eve-button>
  ```

### Vue

_Bindings to make this process easier will come in the future._

- Run:
  ```shell
  npm install elwins-test-web-components --save
  ```
- Import the components into your `main.js` file by:

  - importing the node module
  - telling Vue to ignore the custom element tags (see https://vuejs.org/v2/api/#ignoredElements)
  - binding the Stenciljs component code to the window object
  - ```js
    import Vue from "vue";
    import App from "./App.vue";

    import {
      applyPolyfills,
      defineCustomElements,
    } from "elwins-test-web-components/loader";

    Vue.config.productionTip = false;

    // Tell Vue to ignore all components defined in the elwins-test-web-components
    // package. The regex assumes all components names are prefixed
    // 'eve'
    Vue.config.ignoredElements = [/eve-\w*/];

    // Bind the custom elements to the window object
    applyPolyfills().then(() => {
      defineCustomElements();
    });

    new Vue({
      render: (h) => h(App),
    }).$mount("#app");
    ```

- The components should then be available in any of the Vue components:
  ```js
  render() {
    return (
      <div>
        <eve-button href="https://elwinvaneede.com/newsletter">Newsletter</eve-introduction>
      </div>
    )
  }
  ```
- Vue provides several different ways to install and use the framework in an application. The above technique for integrating a Stencil custom element library has been tested on a Vue application that was created using the vue-cli with ES2015 and WebPack as primary options. A similar technique should work if the application was generated using other options.

### React

Use the bindings in https://github.com/elwinvaneede/elwins-test-web-components-react and follow the instructions there.

### Angular

Bindings not yet created, but possible. Contact me if you need them.

## Development

To start building the components using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/elwinvaneede/elwins-test-web-components.git elwins-test-web-components
cd elwins-test-web-components
```

and run:

```bash
npm install
npm start
```

To build the components for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```
