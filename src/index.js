var HeaderView = require("./components/header");
var CardsView = require("./components/cards");
var CoinListCollection = require("./models/coins/coin-list");

var headerView = new HeaderView();

var coinList = new CoinListCollection();
var cardsView = new CardsView({ collection: coinList });

headerView.render();
cardsView.render();
