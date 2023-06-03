var Backbone = require("backbone");
var LibraryDetails = Backbone.Model.extend({
  project_name: null,
  local_url: null,
  logo: null,
});
var LibraryDetailsList = Backbone.Collection.extend({
  model: LibraryDetails,
  url: "/json/library-details-list.json",
});

module.exports = LibraryDetailsList;
