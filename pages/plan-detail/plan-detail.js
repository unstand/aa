// pages/plan-detail/plan-detail.js
const app = getApp()

Page({
  data: {
    plan: null,
    vehicleItems: [],
    serviceItems: [],
    isExpanded: false,
    itinerary: [
      { day: 1, title: '行车+营地休整', color: '#ffd93d' },
      { day: 2, title: '探访古道遗迹', color: '#4ecdc4' },
      { day: 3, title: '大峡谷徒步+观星露营', color: '#ff6b6b' },
      { day: 4, title: '草原骑行+篝火晚会', color: '#a78bfa' },
      { day: 5, title: '草原晨曦+返程准备', color: '#4ecdc4' }
    ],
    highlights: [
      { name: '喀纳斯湖畔', icon: '🏔️', desc: '碧波荡漾的高山湖泊' },
      { name: '戈壁滩骑行', icon: '🏜️', desc: '穿越壮美戈壁荒漠' },
      { name: '星空露营', icon: '⭐', desc: '仰望璀璨银河星空' }
    ],
    routePoints: [
      { name: '起点', icon: '📍' },
      { name: '喀纳斯湖', icon: '🏔️' },
      { name: '戈壁滩', icon: '🏜️' },
      { name: '星空露营', icon: '⭐' },
      { name: '终点', icon: '🏁' }
    ],
    totalPrice: 23230
  },

  onLoad(options) {
    const id = parseInt(options.id) || 1
    const plans = app.globalData.plans
    const plan = plans.find(p => p.id === id) || plans[0]
    const vehicleItems = app.globalData.vehicles.slice(0, 2)
    const serviceItems = app.globalData.services.slice(0, 2)

    this.setData({
      plan,
      vehicleItems,
      serviceItems
    })
  },

  onToggleExpand() {
    this.setData({ isExpanded: !this.data.isExpanded })
  },

  onVehicleTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/vehicle-detail/vehicle-detail?id=${id}`
    })
  },

  onServiceTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/service-detail/service-detail?id=${id}`
    })
  },

  onBookVehicle(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/vehicle-detail/vehicle-detail?id=${id}`
    })
  },

  onContactUs() {
    wx.makePhoneCall({
      phoneNumber: '4001234567'
    })
  },

  onGeneratePlan() {
    wx.navigateTo({
      url: `/pages/contract/contract?planId=${this.data.plan.id}`
    })
  }
})
