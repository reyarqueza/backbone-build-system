var _ = require("underscore");
var Backbone = require("backbone");

module.exports = function initBackboneRoutes(router) {
  console.log("initBackboneRoutes");
  console.log(document.querySelectorAll("[data-backbone-route]").length);
  _.each(document.querySelectorAll("[data-backbone-route]"), function (anchor) {
    anchor.addEventListener("click", function (event) {
      console.log("about to preventDefault");
      event.preventDefault();
      console.log(
        'init route this.getAttribute("href")',
        this.getAttribute("href")
      );
      router.navigate(this.getAttribute("href").replace("/", ""), {
        trigger: true,
      });
    });
  });
};
