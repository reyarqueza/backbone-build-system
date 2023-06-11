var Backbone = require("backbone");
var LibraryDetailsModel = Backbone.Model.extend({
  project_name: null,
  local_url: null,
  logo: null,
});
var LibraryDetailsCollection = Backbone.Collection.extend({
  model: LibraryDetailsModel,
  url: "/json/library-details-list.json",
});

module.exports = LibraryDetailsCollection;
