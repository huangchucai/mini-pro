// pages/book-detail/book-detail.js
import { BookModel } from '../../modules/book/bookModel'
import { Like } from '../../modules/classic/like'
import { CommentModel } from '../../modules/book/comment'
const commentModel = new CommentModel()
const likeModel = new Like()
const bookModel = new BookModel()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        book: null,
        comments: [],
        count: 0,
        isShowPost: false,
        noComment: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options = {}) {
        const { id } = options
        const detailPromiseInstance = bookModel.getBookDetail(id)
        const likeInfoPromiseInstance = bookModel.getBookLikeInfo(id)
        const shortCommmentPromiseInstance = bookModel.getBookShortComment(id)
        Promise.all([detailPromiseInstance, likeInfoPromiseInstance, shortCommmentPromiseInstance]).then((res) => {
          const [book, count, comments] = res
            this.setData({
                book,
                comments: comments.comments,
                count,
                noComment: !comments.comments.length
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    onLike(event) {
        const likeOrCancel = event.detail.behavior
        likeModel.operateLike(likeOrCancel, this.data.book.id, 400)
    },
    showPost() {
        this.setData({
            isShowPost: true
        })
    },
    onCancel() {
        this.setData({
            isShowPost: false
        })
    },
    onPost(event) {
        let value = event.detail.value || event.detail.content ||''
        if(!value) return
        if (value.length > 12) {
            wx.showToast({
                icon: 'none',
                title: '短评最多12个字',
            })
            return
        }
        commentModel.addComment({
            data: {
                book_id: this.data.book.id,
                content: value
            }
        }).then(() => {
            const comments = this.data.comments
            comments.unshift({ content: value, nums: 1 })
            this.setData({
              comments,
              isShowPost: false,
              noComment: false
            })
            wx.showToast({
              icon:'none',
              title: '评论成功'
            })
        })
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})