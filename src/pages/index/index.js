Page({
  data: {
    swiperCurrent: 0,
    albums: [
      {
        title: '风景',
        desc: '华科景甚好 只是将离别',
        picNum: 100,
        coverSrc: '/assets/cover@2x.png',
        lunar: '宜行房'
      },
      {
        title: '风景',
        desc: '华科景甚好 只是将离别',
        picNum: 100,
        coverSrc: '/assets/cover@2x.png',
        lunar: '宜行房'
      }
    ]
  },
  handleSwiperChange(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  }
})