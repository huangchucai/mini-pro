import {Http} from '../../utils/http';
import {arrFilter} from '../../utils/util';

class SearchModel extends Http {
    historyKey = 'k'
    length = 8
    constructor() { super() }
    setSearchHistory(keyword) {
        let historyList = this.getSearchHistory() || [];
        if (historyList.includes(keyword)) {
            // 如果存在，删除已经存在的，并放入开头
            historyList = arrFilter(historyList, keyword);
        }
        if (historyList.length > this.length) {
            historyList.pop();
        }
        historyList.unshift(keyword);
        wx.setStorageSync(this.historyKey, historyList);
    }

    getSearchHistory() {
        return wx.getStorageSync(this.historyKey);
    }

    /** /
     * start: 开始记录数，默认为0
     count: 记录条数，默认为20,超过依然按照20条计算
     summary: 返回完整或简介,默认为0,0为完整内容,1为简介
     q:搜索内容,比如你想搜索python相关书籍,则输入python
     */
    searchBook(data) {
        return this.request({
            url: '/book/search',
            data: {
                summary: 1,
                count: 20,
                start: 0,
                ...data
            }
        })
    }
}

export {SearchModel};
