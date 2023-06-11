var _ = require("underscore");
var footerTmpl = require("./footer.tmpl");
var Backbone = require("backbone");
Backbone.NativeView = require("backbone.nativeview");

module.exports = Backbone.NativeView.extend({
  el: "footer",
  initialize: function () {
    this.render();
  },
  template: footerTmpl,
  render: function () {
    this.el.textContent = "";
    this.el.insertAdjacentHTML(
      "beforeend",
      this.template({ test: "Hello World" })
    );
  },
});
