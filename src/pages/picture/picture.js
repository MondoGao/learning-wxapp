Page({
  data: {
    isShowCommentForm: false,
    pics: [
      {
        id: 1,
        src: '/assets/cover@2x.png',
        desc: '我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿',
        date: '2014-05-20',
        isLiked: false,
        user: {
          id: 1,
          nickname: 'SHINAN'
        },
        comments: [
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          }
        ]
      },
      {
        id: 2,
        src: '/assets/cover@2x.png',
        desc: '我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿',
        date: '2014-05-20',
        isLiked: true,
        user: {
          id: 1,
          nickname: 'SHINAN'
        },
        comments: [
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          },
          {
            user: {
              id: 2,
              nickname: '麦冬',
            },
            content: '还是本人比较帅'
          }
        ]
      },
    ],
    swiperCurrent: 0
  },
  
  onLoad(query) {
    let index = 0
    for (; index < this.data.pics.length; index++) {
      if (this.data.pics[index].id == query.id) {
        break
      }
    }
    if (index === this.data.pics.length) {
      index--
    }
    
    this.setData({
      swiperCurrent: index,
      query
    })
  },
  onShareAppMessage() {
    return {
      title: '华中大相册',
      path: `${this.route}?id=${this.data.query.id}&$albumId=${this.data.query.albumId}`
    }
  },
  
  handleSwiperChange(e) {
    wx.updateShareMenu({
      path: `${this.route}?id=${this.data.pics[e.detail.current].id}&$albumId=${this.data.query.albumId}`
    })
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  handlePicTap(e) {
    wx.previewImage({
      current: e.target.dataset.src,
      urls: this.data.pics.map(pic => pic.src)
    })
  },
  handleShareTap(e) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  handleBtnCommentTap(e) {
    this.setData({
      isShowCommentForm: true
    })
  },
  handleCommentFormBlur(e) {
    this.setData({
      isShowCommentForm: false
    })
  }
})