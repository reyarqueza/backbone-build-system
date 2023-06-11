var _ = require("underscore");
var Backbone = require("backbone");

module.exports = function initBackboneRoutes() {
  console.log("about to start binding...");
  var links = document.querySelectorAll("[data-backbone-route]");
  console.log("links", links);
  _.each(document.querySelectorAll("[data-backbone-route]"), function (a) {
    console.log("a", a);
    a.addEventListener("click", function (event) {
      console.log("click this.href", this.href);
      event.preventDefault();
      Backbone.history.navigate(this.href);
    });
    console.log(a);
    console.log("------------------");
  });
};