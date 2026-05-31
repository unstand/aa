// pages/vehicle/vehicle.js
const app = getApp()

Page({
  data: {
    categories: [
      { name: 'SUV', price: 356 },
      { name: '新能源', price: 199 },
      { name: '商务车', price: 399 },
      { name: '经济型', price: 199 },
      { name: '豪华型', price: 699 }
    ],
    activeCategory: 0,
    vehicles: [],
    filteredVehicles: [],
    searchKeyword: ''
  },

  onLoad() {
    this.setData({
      vehicles: app.globalData.vehicles
    })
    this.filterVehicles()
  },

  filterVehicles() {
    const { vehicles, activeCategory, categories, searchKeyword } = this.data
    const category = categories[activeCategory].name
    let filtered = vehicles.filter(v => v.category === category)
    if (searchKeyword) {
      filtered = filtered.filter(v => v.name.includes(searchKeyword))
    }
    this.setData({ filteredVehicles: filtered })
  },

  onCategoryTap(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeCategory: index })
    this.filterVehicles()
  },

  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value })
    this.filterVehicles()
  },

  onVehicleTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/vehicle-detail/vehicle-detail?id=${id}`
    })
  }
})
