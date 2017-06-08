Page({
  data: {
    pic: {
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
    }
  },
  
  onLoad(query) {
    console.log(query)
  }
})