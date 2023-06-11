var _ = require("underscore");
var Backbone = require("backbone");

// views
var HeaderView = require("./views/components/header");
var CardsView = require("./views/components/cards");

// models
var LibraryCollection = require("./models/library-collection");

// router
var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "about/:name": "library",
  },
});

var router = new Router();

router.on("route:home", function () {
  var headerView = new HeaderView();
  var libraryList = new LibraryCollection();
  var cardsView = new CardsView({ collection: libraryList });

  headerView.render();
  cardsView.render();
  console.log("DEBUG at home");
});

router.on("route:library", function (name) {
  console.log("name", name);
});

router.on("route:default", function () {
  console.log("default ");
});

Backbone.history.start({ pushState: true });
