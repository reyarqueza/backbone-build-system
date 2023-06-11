var _ = require("underscore");
var Backbone = require("backbone");

module.exports = function initBackboneRoutes() {
  _.each(document.querySelectorAll("[data-backbone-route]"), function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      Backbone.history.navigate(this.getAttribute("href"));
    });
  });
};
