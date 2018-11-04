import { ClassicModle } from '../../modules/classic/indexModel';
import { Like } from '../../modules/classic/like'
const classicModel = new ClassicModle()
const like = new Like()
Page({
    data: {
        classic: null,
        first: false,
        latest: true
    },
    onLoad() {
        classicModel.getClassicLatest().then(res => {
            this._getClassicLikeInfo(res.type, res.id)
            this.setData({
                classic: res
            })
        })
    },
    onLike(e) {
        const likeOrCancel = e.detail.behavior;
        like.operateLike(likeOrCancel, this.data.classic.id, this.data.classic.type)
    },
    goToPreClassic() {
        this._getClassic('previous')
    },
    goToNextClassic() {
        this._getClassic('next')
    },
    _getClassic(type = 'previous') {
        classicModel.getClassic(this.data.classic.index, type).then(res => {
            const latest = classicModel.isLatest(res.index)
            const first = classicModel.isFirst(res.index)
            this._getClassicLikeInfo(res.type, res.id)
            this.setData({
                classic: res,
                latest,
                first
            })
        })
    },
    _getClassicLikeInfo(type, id) {
        like.getClassicLikeStatus(type, id).then(res => {
            const { fav_nums, like_status } = res
            this.setData({
                fav_nums,
                like_status
            })
        })
    }
})