// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 0
    },
    isLike: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    yes_imageSrc: 'images/like.png',
    no_imageSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike() {
      const count = this.data.isLike ? this.data.count - 1 : this.data.count + 1;
      this.setData({
        isLike: !this.data.isLike,
        count
      });
      this.triggerEvent('like', {
        behavior: this.data.isLike ? 'cancel' : 'like'
      })
    }
  }
});
