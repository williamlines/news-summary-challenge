const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
// const apiMock = require("./__mocks__/apiMock");

const model = new NewsModel();
const client = new NewsClient();
const view = new NewsView(model, client);


// model.setNews(apiMock);
view.displayNewsFromApi();

