/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");
const apiMock = require("./__mocks__/apiMock");
const NewsClient = require("./newsClient");
require("jest-fetch-mock");

describe("The Notes View class", () => {
  it("can display the current news stored in model on the page", async () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NewsModel();
    const client = new NewsClient();
    model.setNews(apiMock);

    const view = new NewsView(model, client);

    view.displayNews();

    const news = document.querySelectorAll("div.accordion");
    expect(news.length).toEqual(1);
  });

  it("can display news from the api", async () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NewsModel();
    const client = new NewsClient();
    const view = new NewsView(model, client);

    await view.displayNewsFromApi();

    const news = document.querySelectorAll("div.accordion");
    expect(news.length).toEqual(1);
  });
});
