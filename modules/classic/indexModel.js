import { Http } from '../../utils/http'
class ClassicModle extends Http {
    prefix = 'classic'
    constructor() {
        super()
    }
    getClassicLatest() {
        return this.request({
            url: `${this.prefix}/latest`,
        }).then(res => {
            this._saveLatestIndex(res.index)
            const key = this._setStorageKey(res.index)
            wx.setStorageSync(key, res)
            return Promise.resolve(res)
        })
    }
    /**
     *
     * @param {number} index 期刊
     * @param {string} preOrNext previous/next
     * @param {function} success 成功回调
     */
    getClassic(index, preOrNext = 'next') {
        const key = preOrNext === 'next' ? this._setStorageKey(index + 1) : this._setStorageKey(index - 1)
        const url = `classic/${index}/${preOrNext}`
        const classic = wx.getStorageSync(key)
        if (classic) {
            return Promise.resolve(classic)
        } else {
            return this.request({
                url,
            }).then(res => {
                wx.setStorageSync(key, res)
                return Promise.resolve(res)
            })
        }
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
    _setStorageKey(index) {
        return `classic-${index}`
    }
}
export { ClassicModle }