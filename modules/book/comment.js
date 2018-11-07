import { Http } from '../../utils/http'
class CommentModel extends Http {
    constructor() { super() }
    addComment(params) {
        return this.request({
            ...params,
            url: 'book/add/short_comment',
            method: 'POST'
        })
    }
}

export { CommentModel }