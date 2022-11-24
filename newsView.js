class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNews() {
    const newsRaw = this.model.getNews();
    const data = newsRaw.response.results;

    data.forEach((article) => {
      const newDiv = document.createElement("div");
      newDiv.textContent = article.webTitle;
      newDiv.className = "news";
      this.mainContainerEl.append(newDiv);
    });
  }
}

module.exports = NewsView;
