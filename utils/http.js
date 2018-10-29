import {config} from '../config';
class Http {
  request(params = {}) {
    let {url, data, header = {}, method = 'GET', success, error, fail} = params
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
        if(strCode.startsWith('2')) {
          success && success(res.data)
        } else {
          error && error(res)
        }
      },
      fail: (res) => {
        fail && fail(res)
      }
    })
  }
}
export {Http}