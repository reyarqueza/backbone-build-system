# Backbone Build System

The backbone build system provides a development environment to build backbone apps so that you don't have to build your own system. It can do the following:

1. Provide the capability of using CommonJS for your modules, minifying your JavaScript into a single bundle on save, and provide tiny production bundles (with [browserify](https://browserify.org/) and its plugins [tinyify](https://www.npmjs.com/package/tinyify) and [watchify](https://www.npmjs.com/package/watchify)).
1. Browserify transform for \_.template to support stand alone \*.tmpl files with [node-underscorify](https://www.npmjs.com/package/node-underscorify).
1. Use backbone [without jQuery](https://github.com/jashkenas/backbone/wiki/Using-Backbone-without-jQuery#without-jquery). Use [Backbone.NativeView](https://github.com/akre54/Backbone.NativeView) in place of Backbone.View.
1. Mouse free browser refresh on file save (with [browsersync](https://browsersync.io/)).
1. Serve gzip bundles so you can test your bundles in a simulated production environment (with [http-server](https://www.npmjs.com/package/http-server) and gzip). This can be useful when running Lighthouse.

## Setup

```bash
$ npm install
```

## Development

While editing and saving files, these two commands provide you with the following during development.

**Open 2 terminals:**

Terminal 1 - Start the dev web server, which refreshes the browser(s) on file save.

```bash
$ npm start
```

Terminal 2 - Start the dev environment which builds a dev bundle on file save.

```bash
$ npm run dev
```

## Production Testing

This is useful for building your production bundles.

### Build your bundle for production

```bash
$ npm run build
```

### Start a production level webserver (gzip is already setup)

```bash
$ npm start-prod
```

---

## VS Code

Colorize your underscore templates with [Underscore Template Colorizer](https://marketplace.visualstudio.com/items?itemName=Shinworks.tmplcolorizer).

---

## Backbone, The Primer

I found this introductory helpful for those new to backbone.js or those in need of a refresher: [Backbone, The Primer](https://github.com/jashkenas/backbone/wiki/Backbone%2C-The-Primer)

---

## Official backbone.js sources

- [Backbone.js Wiki](https://github.com/jashkenas/backbone/wiki)
- [backbonejs.org](https://backbonejs.org/)
