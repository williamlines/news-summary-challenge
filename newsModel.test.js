const NewsModel = require("./newsModel.js");

describe("The News Model class", () => {
  it("constructs", () => {
    model = new NewsModel();

    model.setNews([
      { content: "some content" },
      { content: "some more content" },
    ]);

    expect(model.getNews()).toEqual([
      { content: "some content" },
      { content: "some more content" },
    ]);
  });
});
