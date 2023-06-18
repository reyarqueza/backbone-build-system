var _ = require("underscore");
var Backbone = require("backbone");

// common component views
var HeaderView = require("./views/components/header");
var FooterView = require("./views/components/footer");

// pageType views
var HomePageView = require("./views/pages/home");
var AboutPageView = require("./views/pages/about");

// models
var LibraryCollection = require("./models/library-collection");
var LibraryDetailsModel = require("./models/library-details-model");

// router
var Router = Backbone.Router.extend({
  routes: {
    "about/:name": "library",
    "": "home",
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
  var homePageView = new HomePageView({
    collection: libraryList,
    router: router,
  });

  homePageView.render();
});

router.on("route:library", function (name) {
  var libraryDetails = new LibraryDetailsModel();
  var aboutPageView = new AboutPageView({
    model: libraryDetails,
    router: router,
  });

  libraryDetails.fetch({
    url: "/json/details/" + name + ".json",
    success: function (json) {
      aboutPageView.render(json);
    },
    error: function (err) {
      console.log(err);
    },
  });
});

Backbone.history.start({ pushState: true, root: "" });
