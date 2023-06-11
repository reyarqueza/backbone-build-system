var Backbone = require("backbone");
var LibraryModel = Backbone.Model.extend({
  id: null,
  symbol: null,
  platform: {},
});
var LibraryCollection = Backbone.Collection.extend({
  model: LibraryModel,
  url: "/json/library-list.json",
});

module.exports = LibraryCollection;
