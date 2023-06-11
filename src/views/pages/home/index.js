var homeTmpl = require("./home.tmpl");
var initBackboneRoutes = require("../../../helpers");
var Backbone = require("backbone");
Backbone.NativeView = require("backbone.nativeview");
Backbone.ajax = require("backbone.nativeajax");

module.exports = Backbone.NativeView.extend({
  el: "main",
  initialize: function () {
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
    initBackboneRoutes();
  },
});
