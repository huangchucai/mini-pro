// components/searchList/index.js
import {SearchModel} from '../../modules/searchList/searchModel';
const searchModel = new SearchModel();

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        hotKeys: Array,
        more: {
            type: String,
            observer: '_loadMore'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        keyword: '',
        historyList: [],
        searchList: [],
        searchFinished: false,
        loading: false,
        loadingCenter: false,
        start: 0
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
            this.initOriginData();
            this.setData({
                keyword: value,
                searchFinished: true,
                loadingCenter: true
            });
            searchModel.setSearchHistory(value);
            searchModel.searchBook({
                q: value
            }).then(res => {
                this.setData({
                    loadingCenter: false,
                    searchList: res.books
                });
            });
        },
        initOriginData() {
            this.data.start = 0;
            this.data.searchList = [];
            this.setData({
                searchList: []
            });
        },
        // TODO 加载更多的数据
        _loadMore(newVal) {
            console.log(newVal);
        }
    }
});
