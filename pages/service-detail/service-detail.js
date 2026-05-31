// pages/service-detail/service-detail.js
const app = getApp()

Page({
  data: {
    service: null,
    quantity: 1,
    startDate: '08月15日 周四 10:00',
    endDate: '08月20日 周二 10:00',
    totalDays: 5,
    city: '喀什',
    pickupPoint: '喀什机场T1航站楼',
    packageOptions: [
      { id: 'standard', name: '标准包', priceAdd: 0, selected: true },
      { id: 'upgrade', name: '升级包', priceAdd: 15, selected: false }
    ],
    selectedPackage: 'standard',
    totalPrice: 0
  },

  onLoad(options) {
    const id = parseInt(options.id) || 1
    const services = app.globalData.services
    const service = services.find(s => s.id === id) || services[0]
    this.setData({ service })
    this.calculateTotal()
  },

  onQuantityMinus() {
    if (this.data.quantity > 1) {
      this.setData({ quantity: this.data.quantity - 1 })
      this.calculateTotal()
    }
  },

  onQuantityPlus() {
    this.setData({ quantity: this.data.quantity + 1 })
    this.calculateTotal()
  },

  onSelectPackage(e) {
    const id = e.currentTarget.dataset.id
    this.setData({
      selectedPackage: id,
      packageOptions: this.data.packageOptions.map(p => ({
        ...p,
        selected: p.id === id
      }))
    })
    this.calculateTotal()
  },

  onContactUs() {
    wx.makePhoneCall({
      phoneNumber: '4001234567'
    })
  },

  onGeneratePlan() {
    wx.showToast({
      title: '已加入行程计划',
      icon: 'success'
    })
  },

  calculateTotal() {
    const { service, quantity, totalDays, packageOptions, selectedPackage } = this.data
    const pkg = packageOptions.find(p => p.id === selectedPackage)
    const basePrice = service ? service.price : 0
    const total = (basePrice + pkg.priceAdd) * quantity * totalDays
    this.setData({ totalPrice: total })
  }
})
