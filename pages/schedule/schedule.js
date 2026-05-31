Page({
  data: {
    user: {
      name: '老刁',
      id: '123546578'
    },
    plans: [
      {
        id: 1,
        title: '塔吉克荒原之眼探秘',
        cover: '/images/邀请长图（新疆自驾） 1.png',
        price: '计划全程约 ¥5370',
        tags: ['6天5晚', '950KM'],
        bookDate: '2026.06.11',
        startDate: '2026.07.11',
        endDate: '2026.09.15',
        departure: '喀什',
        vehicle: '无'
      },
      {
        id: 2,
        title: '塔吉克荒原之眼探秘',
        cover: '/images/邀请长图（新疆自驾） 1.png',
        price: '计划全程约 ¥5370',
        tags: ['6天5晚', '950KM'],
        bookDate: '2026.06.11',
        startDate: '2026.07.11',
        endDate: '2026.09.15',
        departure: '无',
        vehicle: '无'
      }
    ]
  },

  onContactUs() {
    wx.makePhoneCall({
      phoneNumber: '4001234567'
    })
  },

  onPlanTap(e) {
    this.onViewPlan(e)
  },

  onViewPlan(e) {
    const id = e.currentTarget.dataset.id || 1
    wx.navigateTo({
      url: `/pages/plan-detail/plan-detail?id=${id}`
    })
  },

  onViewContract(e) {
    const id = e.currentTarget.dataset.id || 1
    wx.navigateTo({
      url: `/pages/contract/contract?planId=${id}`
    })
  },

  onBookNow(e) {
    const id = e.currentTarget.dataset.id || 1
    wx.navigateTo({
      url: `/pages/plan-detail/plan-detail?id=${id}`
    })
  }
})