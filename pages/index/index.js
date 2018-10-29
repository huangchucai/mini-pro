import { ClassicModle } from '../../modules/classic/indexModel';
import { Like } from '../../modules/classic/like'
const classicModel = new ClassicModle()
const like = new Like()
Page({
    data: {
        classic: null
    },
    onLoad() {
        classicModel.getClassicLatest((res) => {
            console.log(res);
            this.setData({
                classic: res
            })
        })
    },
    onLike(e) {
        const likeOrCancel = e.detail.behavior;
        like.operateLike(likeOrCancel, this.data.classic.id, this.data.classic.type)
    }
})