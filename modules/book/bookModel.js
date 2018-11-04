import { Http } from '../../utils/http'
class BookModel extends Http {
    prefix = '/book/'
    constructor() {
        super()
    }
    getBooks(params = {}) {
        params.url = this.prefix + params.url
        return this.request(params)
    }
}
export { BookModel }