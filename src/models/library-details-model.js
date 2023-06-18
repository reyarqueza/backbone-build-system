var Backbone = require("backbone");
var LibraryDetailsModel = Backbone.Model.extend({
  defaults: {
    project_name: null,
    project_type: null,
    description: null,
    repository_url: null,
    homepage: null,
    author: null,
    avatar: null,
    logo: null,
  },
  url: "/json/details",
});

module.exports = LibraryDetailsModel;
