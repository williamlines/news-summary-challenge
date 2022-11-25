/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const NewsModel = require('./newsModel')
const NewsView = require('./newsView')
const apiMock = require('./__mocks__/apiMock')
require("jest-fetch-mock");

describe("The Notes View class", () => {
  it("can display the current news stored in model on the page", async () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NewsModel
    model.setNews(apiMock)
    
    const view = new NewsView(model)

    view.displayNews()

    const news = document.querySelectorAll("div.accordion")
    expect(news.length).toEqual(11)
  })
})