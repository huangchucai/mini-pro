import {Http} from '../../utils/http'
class ClassicModle extends Http {
    prefix = 'classic'
    constructor() {
        super()
    }
    getClassicLatest(callback) {
        this.request({
            url: `${this.prefix}/latest`,
            success: (data) => {
                this._saveLatestIndex(data.index)
                callback(data)
            },
            // todo: 错误的处理
            error: (data) => {
                console.log(data);
            }
        })
    }
    /**
     *
     * @param {number} index 期刊
     * @param {string} preOrNext previous/next
     * @param {function} success 成功回调
     */
    getClassic(index, preOrNext = 'next', success) {
        const url = `classic/${index}/${preOrNext}`
        this.request({
            url,
            success
        })
    }
    isFirst(index) {
        return !!(index === 1)
    }
    isLatest(index) {
        return !!(index === this._getLatestIndex())
    }
    _saveLatestIndex(index) {
        wx.setStorageSync('latest', index)
    }
    _getLatestIndex() {
        return wx.getStorageSync('latest')
    }
}
export { ClassicModle }