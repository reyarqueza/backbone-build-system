var homeTmpl = require("./home.tmpl");
var Backbone = require("backbone");

// helper
var initBackboneRoutes = require("../../../helpers");

Backbone.NativeView = require("backbone.nativeview");
Backbone.ajax = require("backbone.nativeajax");

module.exports = Backbone.NativeView.extend({
  el: "main",
  initialize: function (options) {
    this.router = options.router;
    this.collection.fetch();
    this.listenTo(this.collection, "sync change", this.render);
  },
  template: homeTmpl,
  render: function () {
    this.el.textContent = "";
    this.el.insertAdjacentHTML(
      "beforeend",
      this.template({ projectList: this.collection.toJSON() })
    );
    initBackboneRoutes(this.router);
  },
});
