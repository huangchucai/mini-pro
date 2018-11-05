//logs.js
Page({
    data: {
        logs: []
    },
    onLoad() {
        setTimeout(() => {
            this.data.logs = [{
                name: 'hcc',
            }, {
                name: 'yx'
            }, {
                name: 'hhhhhhhh'
            }]
            this.changeLogs()
        }, 1000);
    },
    changeLogs() {
        this.data.logs = this.data.logs.map(item => item.name+'hhhhh');
        this.setData({
            logs: this.data.logs
        })
    }
})