var _ = require("underscore");
var cardTmpl = require("./cards.tmpl");
var Backbone = require("backbone");
Backbone.NativeView = require("backbone.nativeview");
Backbone.ajax = require("backbone.nativeajax");

module.exports = Backbone.NativeView.extend({
  el: "#card",
  initialize: function () {
    this.collection.fetch();
    this.listenTo(this.collection, "sync change", this.render);
  },
  template: cardTmpl,
  render: function () {
    // console.log(this.collection.toJSON());
    this.el.insertAdjacentHTML(
      "beforeend",
      this.template({ coinList: this.collection.toJSON() })
    );
  },
});