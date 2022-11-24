const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
const apiMock = require("./__mocks__/apiMock");

const model = new NewsModel();
const view = new NewsView(model);

model.setNews(apiMock);
view.displayNews();
