var Backbone = require("backbone");
var LibraryModel = Backbone.Model.extend({
  project_name: null,
  local_url: null,
  logo: null,
});
var LibraryCollection = Backbone.Collection.extend({
  model: LibraryModel,
  url: "/json/library-collection.json",
});

module.exports = LibraryCollection;
