import { config } from '../config';
class Http {
    request(params = {}) {
        let { url, data, header = {}, method = 'GET' } = params
        return new Promise((resolve, reject) => {
            wx.request({
                url: `${config.api_blink_url}${url}`,
                data,
                header: {
                    'content-type': 'application/json',
                    'appkey': config.appkey,
                    ...header
                },
                method,
                success: (res) => {
                    const strCode = res.statusCode.toString();
                    if (strCode.startsWith('2')) {
                        resolve && resolve(res.data)
                    } else {
                        reject()
                        wx.showToast({
                            title: '网络异常',
                            icon: 'none'
                        })
                    }
                },
                fail: (res) => {
                    reject()
                    // fail && fail(res)
                }
            })
        })
    }
}
export { Http }
