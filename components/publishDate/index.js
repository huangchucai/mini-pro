// components/publishDate/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        index: {
            type: Number,
            observer(newVal) {
                let _index = newVal > 10 ? newVal : `0${newVal}`;
                this.setData({
                    _index
                })
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})