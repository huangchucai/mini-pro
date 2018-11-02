import { classicBehavior } from '../behaviors/classic_behavior'
const wxPlayInterance = wx.getBackgroundAudioManager()
Component({
    behaviors: [classicBehavior],
    properties: {
        src: String,
        title: String
    },
    attached() {
        this._recoverPlayStatus()
        this._operateNativePlay() // 监听原生的点击按钮的事件
    },
    data: {
        playStatus: false,
        playImg: '/images/music/player@playing.png',
        pauseImg: '/images/music/player@pausing.png'
    },
    methods: {
        onPlay() {
            if (!this.data.playStatus) {
                this.setData({
                    playStatus: true
                })
                if (wxPlayInterance.src === this.properties.src) {
                    wxPlayInterance.play()
                } else {
                    wxPlayInterance.src = this.properties.src;
                }
                wxPlayInterance.title = this.properties.title;
            } else {
                wxPlayInterance.pause()
                this.setData({
                    playStatus: false
                })
            }
        },
        _recoverPlayStatus() {
            if (wxPlayInterance.paused) {
                this.setData({
                    playStatus: false
                })
                return
            }
            if (wxPlayInterance.src === this.properties.src) {
                this.setData({
                    playStatus: true
                })
            }
        },
        _operateNativePlay() {
            wxPlayInterance.onPlay(() => {
                this._recoverPlayStatus()
            })
            wxPlayInterance.onPause(() => {
                this._recoverPlayStatus()
            })
            wxPlayInterance.onEnded(() => {
                this._recoverPlayStatus()
            })
            wxPlayInterance.onStop(() => {
                this._recoverPlayStatus()
            })
        }
    }
})