var Backbone = require("backbone");
var Coin = Backbone.Model.extend({
  id: null,
  symbol: null,
  platform: {},
});
var CoinList = Backbone.Collection.extend({
  model: Coin,
  url: "/json/coinlist.json", //https://api.coingecko.com/api/v3/coins/list?include_platform=true",
});

module.exports = CoinList;
