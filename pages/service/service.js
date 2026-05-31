// pages/service/service.js
const app = getApp()

Page({
  data: {
    categories: [
      { name: '车辆应急包', price: 36 },
      { name: '高原氧气包', price: 36 },
      { name: '应急食品包', price: 36 },
      { name: '医疗急救包', price: 36 },
      { name: '户外烤全羊包', price: 36 }
    ],
    activeCategory: 0,
    services: [],
    filteredServices: [],
    searchKeyword: ''
  },

  onLoad() {
    this.setData({
      services: app.globalData.services
    })
    this.filterServices()
  },

  filterServices() {
    const { services, activeCategory, categories } = this.data
    const category = categories[activeCategory].name
    const filtered = services.filter(s => s.category === category)
    this.setData({ filteredServices: filtered })
  },

  onCategoryTap(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeCategory: index })
    this.filterServices()
  },

  onServiceTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/service-detail/service-detail?id=${id}`
    })
  }
})
