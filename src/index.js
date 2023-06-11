var _ = require("underscore");
var Backbone = require("backbone");

// common component views
var HeaderView = require("./views/components/header");
var FooterView = require("./views/components/footer");

// pageType views
var HomePageView = require("./views/pages/home");

// models
var LibraryCollection = require("./models/library-collection");

// router
var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "about/:name": "library",
  },
});

// instantiate common component views
var headerView = new HeaderView();
var footerView = new FooterView();

// instantiate router
var router = new Router();

// render common component views
headerView.render();
footerView.render();

// setup the router
router.on("route:home", function () {
  var libraryList = new LibraryCollection();
  var homePageView = new HomePageView({ collection: libraryList });

  homePageView.render();
});

router.on("route:library", function (name) {
  console.log("name", name);
});

router.on("route:default", function () {
  console.log("default ");
});

Backbone.history.start({ pushState: true });
