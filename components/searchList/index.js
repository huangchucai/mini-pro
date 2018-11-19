// components/searchList/index.js
import { SearchModel } from '../../modules/searchList/searchModel';
import { pagination } from '../../modules/pagination'
const searchModel = new SearchModel();

Component({
    /**
     * 组件的属性列表
     */
    behaviors: [pagination],
    properties: {
        hotKeys: Array,
        more: {
            type: String,
            observer: 'loadMore'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        keyword: '',
        historyList: [],
        searchFinished: false,
        loadingCenter: false,
        start: 0,
    },
    attached() {
        const historyList = searchModel.getSearchHistory();
        this.setData({
            historyList
        });
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 清除输入的内容
        onDelete() {
            this.initOriginData();
            this._closeResult()
        },
        // 返回书籍列表
        onCancel() {
            this.initOriginData();
            this.triggerEvent('onCancel', {});
        },
        onConfirm(e) {
            let value = e.detail.value || e.detail.content;
            if (!value) return;
            this._showResult()
            this._showLoadingCenter()
            this.setData({
                keyword: value,
            });
            searchModel.setSearchHistory(value);
            searchModel.searchBook({
                q: value
            }).then(res => {
                this.setMoreData(res.books)
                this.setTotal(res.total)
                this._hideLoadingCenter()
            }, () => {
                this.setData({
                    empty: true,
                    loadingCenter: false,
                })
            });
        },
        // TODO 加载更多的数据
        loadMore(newVal) {
            if (!this.hasMore()) {
                return
            }
            if (this.isLocked()) {
                return
            }
            this.locked()
            searchModel.searchBook({
                q: this.data.keyword,
                start: this.getCurrentLength()
            }).then(res => {
                this.setMoreData(res.books)
                this.unLocked()
            }, () => {
                this.unLocked()
            })
        },
        _showResult() {
            this.setData({
                searchFinished: true
            })
        },
        _closeResult() {
            this.setData({
                searchFinished: false,
                keyword: ''
            })
        },
        _showLoadingCenter() {
            this.setData({
                loadingCenter: true
            })
        },
        _hideLoadingCenter() {
            this.setData({
                loadingCenter: false
            })
        }
    }
});