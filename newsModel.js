class NewsModel {
  constructor() {
    this.news = [];
  }

  setNews(news) {
    this.news = news
  }

  getNews() {
    return this.news
  }
}

module.exports = NewsModel;
