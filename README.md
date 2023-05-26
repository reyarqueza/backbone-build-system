# Backbone Build System

The backbone build system provides a development environment to build backbone apps so that you don't have to build your own system. It can do the following:

1. Provide the capability of using CommonJS for your modules, minifying your JavaScript into a single bundle, and provide tiny production bundles (with [browserify](https://browserify.org/) and its plugins [tinyify](https://www.npmjs.com/package/tinyify) and [watchify](https://www.npmjs.com/package/watchify)).
2. Mouse free browser refresh on file save (with [browsersync](https://browsersync.io/)).
3. Serve gzip bundles so you can test your bundles in a simulated production environment (with [http-server](https://www.npmjs.com/package/http-server) and gzip);

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
