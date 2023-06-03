var HeaderView = require("./views/components/header");
var CardsView = require("./views/components/cards");
var CoinListCollection = require("./models/library-list");

var headerView = new HeaderView();

var coinList = new CoinListCollection();
var cardsView = new CardsView({ collection: coinList });

headerView.render();
cardsView.render();
