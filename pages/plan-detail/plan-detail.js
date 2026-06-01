// pages/plan-detail/plan-detail.js
const app = getApp()

Page({
  data: {
    plan: null,
    isExpanded: false,
    currentSwiper: 0,
    currentTab: 0,
    totalPrice: 23250,

    // 日期相关
    startDate: '08月15日',
    endDate: '08月20日',
    startWeek: '周四 10:00',
    endWeek: '周二 10:00',
    totalDays: 5,
    city: '喀什',
    pickupPoint: '喀什机场T1航站楼',

    // 人数
    adultCount: 1,
    childCount: 0,
    pricePerPerson: 5980,

    // 轮播图
    swiperList: [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ],

    // 车辆信息 (丰田普拉多)
    vehicle: {
      id: 1,
      name: '丰田普拉多 2025款',
      specs: '8挡手自一体 | 2.4T 双擎 | 4门5座',
      features: '全时四驱 | 360°全景影像 | 可放4个28寸行李箱',
      price: 598,
      unit: '车/日',
      quantity: 1
    },

    // 服务信息 (高原氧气包)
    service: {
      id: 2,
      name: '高原氧气包',
      edition: '标准版',
      forCount: '4人',
      items: '急救箱(车载) | 便携氧气瓶 | 血氧仪 | 血压计 | 急救毯/保温毯 | 口服补液盐 | 速效救心丸',
      price: 58,
      unit: '包/日',
      quantity: 1
    },

    // 日程安排 (DAY-1 ~ DAY-5)
    itinerary: [
      { day: 1, title: '喀喇昆仑山口', desc: '穿越雪山，感受自然的壮美', icon: '🏔️', color: '#4ecdc4' },
      { day: 2, title: '帕米尔高原', desc: '探访世界屋脊上的村落', icon: '⛰️', color: '#ffd93d' },
      { day: 3, title: '塔什库尔干县', desc: '体验当地民俗文化', icon: '🏛️', color: '#ff6b6b' },
      { day: 4, title: '红其拉甫口岸', desc: '徒步边境线，领略异域风情', icon: '🚩', color: '#a78bfa' },
      { day: 5, title: '返程', desc: '满载回忆，踏上归途', icon: '🏠', color: '#8e8e9a' }
    ],

    // 路线节点
    routePoints: [
      { name: '亚洲屋脊', icon: '🏔️', note: '海拔5,715米' },
      { name: '塔里木盆地', icon: '🏜️', note: '沙漠腹地' },
      { name: '帕米尔高原', icon: '⛰️', note: '高原明珠' },
      { name: '红其拉甫口岸', icon: '🚩', note: '海拔4,733米' },
      { name: '喀喇昆仑山口', icon: '🏔️', note: '世界屋脊' }
    ],

    // 活动亮点
    highlights: [
      { name: '徒步古道', desc: '穿越千年丝路遗迹', icon: '🥾' },
      { name: '观星露营', desc: '仰望璀璨银河星空', icon: '⭐' },
      { name: '高原湖泊', desc: '碧波荡漾的高原明珠', icon: '🏞️' },
      { name: '星空摄影', desc: '记录最美星空时刻', icon: '📷' }
    ],

    // 底部信息
    footerInfo: {
      time: '5.15–9.10',
      note: '*本行程为参考行程，实际行程可能根据天气、路况等因素调整。',
      includes: ['交通', '住宿', '餐饮', '保险', '签证']
    }
  },

  onLoad(options) {
    const id = parseInt(options.id) || 1
    const plans = app.globalData.plans
    const plan = plans.find(p => p.id === id) || plans[0]
    // 获取状态栏高度
    const sysInfo = wx.getSystemInfoSync()
    const statusBarHeight = sysInfo.statusBarHeight || 44
    const navBarHeight = 44
    this.setData({ plan, statusBarHeight, navBarHeight })
  },

  onSwiperChange(e) {
    this.setData({ currentSwiper: e.detail.current })
  },

  onToggleExpand() {
    this.setData({ isExpanded: !this.data.isExpanded })
  },

  // 人数操作
  onAdultMinus() {
    if (this.data.adultCount > 1) {
      this.setData({ adultCount: this.data.adultCount - 1 })
    }
  },
  onAdultPlus() {
    this.setData({ adultCount: this.data.adultCount + 1 })
  },
  onChildMinus() {
    if (this.data.childCount > 0) {
      this.setData({ childCount: this.data.childCount - 1 })
    }
  },
  onChildPlus() {
    this.setData({ childCount: this.data.childCount + 1 })
  },

  // 车辆数量操作
  onVehicleMinus() {
    if (this.data.vehicle.quantity > 1) {
      this.setData({ 'vehicle.quantity': this.data.vehicle.quantity - 1 })
    }
  },
  onVehiclePlus() {
    this.setData({ 'vehicle.quantity': this.data.vehicle.quantity + 1 })
  },

  // 服务数量操作
  onServiceMinus() {
    if (this.data.service.quantity > 1) {
      this.setData({ 'service.quantity': this.data.service.quantity - 1 })
    }
  },
  onServicePlus() {
    this.setData({ 'service.quantity': this.data.service.quantity + 1 })
  },

  // 标签页切换
  onTabChange(e) {
    this.setData({ currentTab: e.currentTarget.dataset.index })
  },

  // 修改车辆
  onModifyVehicle() {
    wx.navigateTo({ url: '/pages/vehicle/vehicle' })
  },
  // 修改服务
  onModifyService() {
    wx.navigateTo({ url: '/pages/service/service' })
  },
  // 添加额外服务
  onAddExtra() {
    wx.navigateTo({ url: '/pages/service/service' })
  },

  // 预订
  onBookTrip() {
    wx.navigateTo({
      url: `/pages/contract/contract?planId=${this.data.plan.id}`
    })
  },
  // 联系我们
  onContactUs() {
    wx.makePhoneCall({ phoneNumber: '4001234567' })
  },
  // free 三亚计划
  onFreePlan() {
    wx.navigateTo({
      url: `/pages/contract/contract?planId=${this.data.plan.id}&free=true`
    })
  },
  // 日期选择
  onStartDatePicker() {},
  onEndDatePicker() {},
  // 城市选择
  onCityChange() {},
  onPickupChange() {},

  // 返回上一页
  onNavBack() {
    wx.navigateBack({ delta: 1 })
  }
})
