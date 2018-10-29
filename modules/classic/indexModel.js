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
                callback(data)
            },
            // todo: 错误的处理
            error: (data) => {
                console.log(data);
            }
        })
    }
}
export { ClassicModle }