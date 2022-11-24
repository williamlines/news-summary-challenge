class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNews() {
    const newsRaw = this.model.getNews();
    const data = newsRaw.response.results;

    data.forEach((article) => {
      const mainHeader = document.createElement("h2");
      mainHeader.textContent = article.webTitle;

      const subHeader = document.createElement("h3");
      subHeader.textContent = article.sectionName;

      const newDiv = document.createElement("div");
      newDiv.className = "news";
      newDiv.appendChild(mainHeader);
      newDiv.appendChild(subHeader);

      this.mainContainerEl.append(newDiv);
    });
  }
}

module.exports = NewsView;
