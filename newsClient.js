const apiKey = require("./apiKeys");
const url = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=all`;

class NewsClient {
  constructor() {}

  async getNewsFromApi() {
    const response = await fetch(url);
    const data = await response.json()
    return data
  }
}
module.exports = NewsClient
