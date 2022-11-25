class NewsView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNews() {
    const newsRaw = this.model.getNews();
    const data = newsRaw.response.results;

    data.forEach((article) => {
      const link = document.createElement("a");
      const mainHeader = document.createElement("h2");
      mainHeader.textContent = article.webTitle;
      link.appendChild(mainHeader);
      link.href = article.webUrl;

      const subHeader = document.createElement("h3");
      subHeader.textContent = article.sectionName;

      const thumbnail = document.createElement("img");
      thumbnail.src = article.fields.thumbnail;

      const newDiv = document.createElement("div");
      newDiv.className = "news";
      newDiv.appendChild(link);
      newDiv.appendChild(subHeader);
      newDiv.appendChild(thumbnail);

      this.mainContainerEl.append(newDiv);
    });
  }
}

module.exports = NewsView;
