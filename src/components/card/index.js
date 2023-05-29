var _ = require("underscore");
var cardTmpl = require("./card.tmpl");
var Backbone = require("backbone");
Backbone.NativeView = require("backbone.nativeview");

module.exports = Backbone.NativeView.extend({
  el: "#card",
  initialize: function () {
    console.log("initialized");
  },
  template: cardTmpl,
  render: function () {
    this.el.insertAdjacentHTML(
      "beforeend",
      this.template({ title: "The Card Title" })
    );
  },
});
