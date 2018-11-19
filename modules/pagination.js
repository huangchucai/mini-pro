const pagination = Behavior({
    data: {
        dataList: [],
        total: null,
        loading: false,
        empty: false
    },
    methods: {
        setMoreData(dataArray) {
            const tempArray = this.data.dataList.concat(dataArray)
            this.setData({
                dataList: tempArray,
            })
        },
        getCurrentLength() {
            return this.data.dataList.length
        },
        hasMore() {
            return !!(this.data.dataList.length < this.data.total)
        },
        setTotal(total) {
            this.data.total = total
            if (total == 0) {
                this.setData({
                    empty: true
                })
            }
        },
        isLocked() {
            return
        },
        initOriginData() {
            this.data.total = null
            this.setData({
                dataList: [],
                empty: false
            });
        },
        isLocked() {
            return !!this.data.loading
        },
        locked() {
            this.setData({
                loading: true
            })
        },
        unLocked() {
            this.setData({
                loading: false
            })
        }
    }
})

export { pagination }