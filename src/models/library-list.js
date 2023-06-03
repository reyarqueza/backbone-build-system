var Backbone = require("backbone");
var Library = Backbone.Model.extend({
  id: null,
  symbol: null,
  platform: {},
});
var LibraryList = Backbone.Collection.extend({
  model: Library,
  url: "/json/library-list.json",
});

module.exports = LibraryList;
