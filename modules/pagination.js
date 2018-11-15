const pagination = Behavior({
    data: {
        dataList: [],
        total: null,
        loading: false,
    },
    methods: {
        setMoreData(dataArray) {
            const tempArray = this.data.dataList.concat(dataArray)
            this.setData({
                dataList: tempArray
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
        },
        isLocked() {
            return
        },
        initOriginData() {
            this.data.total = null
            this.setData({
                dataList: [],
            });
        }
    }
})

export { pagination }