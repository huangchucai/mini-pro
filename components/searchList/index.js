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
        empty: false
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
            this.setData({
                keyword: '',
                searchFinished: false
            });
        },
        // 返回书籍列表
        onCancel() {
            this.triggerEvent('onCancel', {});
        },
        onConfirm(e) {
            let value = e.detail.value || e.detail.content;
            if (!value) return;
            this._showResult()
            this.initOriginData();
            searchModel.setSearchHistory(value);
            searchModel.searchBook({
                q: value
            }).then(res => {
                this.setMoreData(res.books)
                this.setTotal(res.total)
                this.setData({
                    keyword: value,
                    loadingCenter: false,
                });
            });
        },
        // TODO 加载更多的数据
        loadMore(newVal) {
            if (!this.hasMore()) {
                return
            }
            if (this.data.loading) {
                return
            }
            this.setData({
                loading: true
            })
            searchModel.searchBook({
                q: this.data.keyword,
                start: this.getCurrentLength()
            }).then(res => {
                this.setMoreData(res.books)
                this.setData({
                    loading: false
                })
            })
        },
        _showResult() {
            this.setData({
                searchFinished: true,
                loadingCenter: true
            })
        }
    }
});