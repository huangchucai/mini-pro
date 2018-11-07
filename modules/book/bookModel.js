import { Http } from '../../utils/http'
class BookModel extends Http {
    prefix = 'book/'
    constructor() {
        super()
    }
    getBooks() {
        const params = {
            url: this.prefix + 'hot_list'
        }
        return this.request(params)
    }
    getBookDetail(id) {
        const params = {
            url: this.prefix + `${id}/detail`
        }
        return this.request(params)
    }
    getBookLikeInfo(id) {
        const params = {
            url: this.prefix + `${id}/favor`
        }
        return this.request(params)
    }
    getBookShortComment(id) {
        const params = {
            url: this.prefix + `${id}/short_comment`
        }
        return this.request(params)
    }
}
export { BookModel }