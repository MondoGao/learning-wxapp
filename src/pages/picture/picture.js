Page({
  data: {
    pics: [
      {
        id: 1,
        src: '/assets/cover@2x.png',
        desc: '我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿',
        date: '2014-05-20',
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
    
    this.setData({
      swiperCurrent: index
    })
  }
})