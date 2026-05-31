// pages/home/home.js
const app = getApp()

Page({
  data: {
    plans: [],
    centralAsiaPlans: [],
    searchKeyword: '',
    showLoginModal: false
  },

  onLoad() {
    this.setData({
      plans: app.globalData.plans,
      centralAsiaPlans: [
        {
          id: 3,
          title: '中亚五国探秘之旅',
          subtitle: '一带一路·文明交汇',
          description: '与众不同的新疆人文之旅，认识了很苦热情有趣的人们，特别是在塔克拉玛干沙漠沙暴的体验，绝对称得上人生之旅！',
          price: 10828,
          unit: '人',
          days: 10,
          nights: 9,
          tags: ['高端商务', '一带一路', '车辆应急', '高原氧气', '户外摄影', '紧急通讯', '烤全羊包', '户外露营'],
          rating: 9.5,
          needLogin: true
        }
      ]
    })
  },

  onShow() {
    // 检查登录状态
    const isLoggedIn = app.globalData.isLoggedIn
    this.setData({ isLoggedIn })
  },

  onSearchInput(e) {
    this.setData({
      searchKeyword: e.detail.value
    })
  },

  onPlanTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/plan-detail/plan-detail?id=${id}`
    })
  },

  onCentralAsiaTap(e) {
    const isLoggedIn = app.globalData.isLoggedIn
    if (!isLoggedIn) {
      this.setData({ showLoginModal: true })
      return
    }
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/plan-detail/plan-detail?id=${id}`
    })
  },

  onCloseLoginModal() {
    this.setData({ showLoginModal: false })
  },

  onGoLogin() {
    this.setData({ showLoginModal: false })
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  onGoDIY() {
    wx.showToast({
      title: 'DIY定制功能开发中',
      icon: 'none'
    })
  },

  onMoreMenu() {
    // 更多菜单
  }
})
