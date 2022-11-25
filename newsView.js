class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNews() {
    const newsRaw = this.model.getNews();
    // console.log(newsRaw)
    const data = newsRaw.response.results;
    let i = 1;
    data.forEach((article) => {
      const mainHeader = document.createElement("h2");
      mainHeader.className = "accordion-header";
      mainHeader.id = `heading${i}`;

      const button = document.createElement("button");
      button.className = "accordion-button collapsed";
      button.type = "button";
      button.setAttribute("data-bs-toggle", "collapse");
      button.setAttribute("data-bs-target", `#collapse${i}`);
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", `#collapse${i}`);
      button.textContent = article.webTitle;

      mainHeader.appendChild(button);

      const collapse = document.createElement("div");
      collapse.id = `collapse${i}`;
      collapse.className = "accordion-collapse collapse";
      collapse.setAttribute("aria-labelledby", `heading${i}`);
      collapse.setAttribute("data-bs-parent", "#main-container");

      const collapseBody = document.createElement("div");
      collapseBody.className = "accordion-body";

      const link = document.createElement("a");
      const linkText = document.createElement("h3");
      linkText.textContent = "Click here for full article on The Guardian.";
      link.appendChild(linkText);
      link.href = article.webUrl;

      const subHeader = document.createElement("h3");
      subHeader.textContent = article.sectionName;

      const thumbnail = document.createElement("img");
      thumbnail.className = "img-fluid";
      thumbnail.src = article.fields.thumbnail;

      const newAccord = document.createElement("div");
      newAccord.className = "accordion";

      const accordItem = document.createElement("div");
      accordItem.className = "accordion-item";

      accordItem.appendChild(mainHeader);
      accordItem.appendChild(collapse);

      collapseBody.appendChild(subHeader);
      collapseBody.appendChild(thumbnail);
      collapseBody.appendChild(link);

      collapse.appendChild(collapseBody);

      this.mainContainerEl.append(accordItem);
      i++;
    });
  }

  async displayNewsFromApi() {
    const data = await this.client.getNewsFromApi();
    this.model.setNews(data);
    // console.log(this.model.getNews())
    this.displayNews();
  }
}

module.exports = NewsView;
