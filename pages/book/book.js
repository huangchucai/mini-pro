import { BookModel } from '../../modules/book/bookModel'
const bookModel = new BookModel()
Page({
    data: {
        books: []
    },
    onLoad() {
        bookModel.getBooks().then(res => {
            this.setData({
                books: res
            })
        })
    }
})