import { getRandomFromArr } from '../../utils/helpers/getRandomFromArr.helpers'

export class QuoteService {
  static _url = `${process.env.PUBLIC_URL}/api/quotes.json`

  static async getAll() {
    return await fetch(this._url)
      .then(res => res.json())
      .then(json => json.quotes)
  }

  static async getRandom() {
    return await this.getAll().then(quotes => getRandomFromArr(quotes))
  }
}
