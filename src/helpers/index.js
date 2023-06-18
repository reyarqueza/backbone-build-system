var _ = require("underscore");

module.exports = function initBackboneRoutes(router) {
  _.each(document.querySelectorAll("[data-backbone-route]"), function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      router.navigate(this.getAttribute("href").replace("/", ""), {
        trigger: true,
      });
    });
  });
};
