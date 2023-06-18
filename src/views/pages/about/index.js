var aboutTmpl = require("./about.tmpl");
var Backbone = require("backbone");
Backbone.NativeView = require("backbone.nativeview");
Backbone.ajax = require("backbone.nativeajax");

module.exports = Backbone.NativeView.extend({
  el: "main",
  initialize: function (id) {
    //this.model.fetch(id);
    this.listenTo(this.model, "sync change", this.render);
  },
  template: aboutTmpl,
  render: function () {
    console.log("about - this.model.toJSON()", this.model.toJSON());
    this.el.textContent = "";
    this.el.insertAdjacentHTML(
      "beforeend",
      this.template({ details: this.model.toJSON() })
    );
    console.log("in the about view");
  },
});
