Page({
  data: {
    swiperCurrent: 0,
    albums: [
      {
        id: 1,
        title: '风景',
        desc: '华科景甚好 只是将离别',
        picNum: 100,
        coverSrc: '/assets/cover@2x.png',
        lunar: '宜跳舞'
      },
      {
        id: 2,
        title: '人物',
        desc: '石男私房照',
        picNum: 98,
        coverSrc: '/assets/cover@2x.png',
        lunar: '宜行房'
      }
    ],
    date: {
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    }
  },
  handleSwiperChange(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  }
})