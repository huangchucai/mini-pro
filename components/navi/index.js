// components/navi/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: String,
        latest: {
            type: Boolean,
            value: true
        },
        first: {
            type: Boolean,
            value: false
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        leftIcon: '/images/navi/triangle@left.png',
        disLeftIcon: '/images/navi/triangle.dis@left.png',
        rightIcon: '/images/navi/triangle@right.png',
        disRightIcon: '/images/navi/triangle.dis@right.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        goToPreClassic() {
          !this.data.first && this.triggerEvent('goToPreClassic', {})
        },
        goToNextClassic() {
          !this.data.latest && this.triggerEvent('goToNextClassic', {})
        }
    }
})