// pages/service/service.js
const app = getApp()

Page({
  data: {
    categories: [
      { name: '车辆应急包', price: 38 },
      { name: '高原氧气包', price: 38 },
      { name: '应急食品', price: 36 },
      { name: '医疗急救包', price: 36 },
      { name: '户外烤全羊包', price: 38 }
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
    const { services, activeCategory, categories, searchKeyword } = this.data
    const category = categories[activeCategory].name
    let filtered = services.filter(s => s.category === category)
    if (searchKeyword) {
      filtered = filtered.filter(s => s.name.includes(searchKeyword))
    }
    this.setData({ filteredServices: filtered })
  },

  onCategoryTap(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeCategory: index })
    this.filterServices()
  },

  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value })
    this.filterServices()
  },

  onMoreMenu() {},

  onServiceTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/service-detail/service-detail?id=${id}`
    })
  }
})
