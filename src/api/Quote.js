export class Quote {
  constructor() {
    this._url = './api/quotes.json'
  }

  async getAllQuotes() {
    return await fetch(this._url)
      .then(res => res.json())
  }

  async getRandomQuote() {
    return await this.getAllQuotes()
      .then(quotes => quotes[Math.floor(Math.random() * quotes.length)])
  }
}
