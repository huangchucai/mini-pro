import { Http } from '../../utils/http'
class Like extends Http {
    constructor() {
        super()
    }
    getClassicLikeStatus(type, id, success) {
        const params = {
            url: `classic/${type}/${id}/favor`,
        }
        return this.request(params)
    }
    /**
     *
     * @param {String} likeOrCancel  点赞或取消点赞
     * @param {Number} art_id         点赞对象
     * @param {Number} type           点赞类型（100：电影  200： 音乐， 300 句子， 400 书籍）
     */
    operateLike(likeOrCancel, art_id, type) {
        const url = likeOrCancel === 'cancel' ? 'like' : 'like/cancel';
        const params = {
            url,
            method: 'POST',
            data: {
                art_id,
                type
            }
        }
        this.request(params)
    }

}
export {Like}