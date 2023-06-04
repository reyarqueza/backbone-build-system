var _ = require("underscore");
var headerTmpl = require("./header.tmpl");
var Backbone = require("backbone");
Backbone.NativeView = require("backbone.nativeview");

module.exports = Backbone.NativeView.extend({
  el: "#header",
  initialize: function () {
    console.log("initialized");
  },
  template: headerTmpl,
  render: function () {
    this.el.textContent = "";
    this.el.insertAdjacentHTML(
      "beforeend",
      this.template({ test: "Hello World" })
    );
  },
});
