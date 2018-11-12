import {BookModel} from '../../modules/book/bookModel';
import {randomString} from '../../utils/util';

const bookModel = new BookModel();
Page({
    data: {
        books: [],
        showSearchPanel: false,
        more: null
    },
    onLoad() {
        const booksPromiseInstance = bookModel.getBooks();
        const searchHotKeyPromiseInstance = bookModel.getHotKeys();
        Promise.all([booksPromiseInstance, searchHotKeyPromiseInstance]).then(resArr => {
            const [books, searchHotKey] = resArr;
            this.setData({
                books,
                searchHotKey: searchHotKey.hot
            });
        });
    },
    onActivateSearch() {
        this.setData({
            showSearchPanel: true
        });
    },
    onCancel() {
        this.setData({
            showSearchPanel: false
        });
    },
    // 触底
    onReachBottom() {
        this.setData({
            more: randomString(15)
        });
    }
});
