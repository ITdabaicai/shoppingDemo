// pages/myord/myord.js
var sliderWidth = 10;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["全部", "待支付", "待发货", "待收货", "待评价"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    list:[
      {
        src:'/pages/images/qianbao.png',
        title:'内墙除醛漆专用腻子',
        type:'容量：1L 颜色：天蓝',
        num:'2',
        price:'156',
        state:'已完成',
        allnum:'2',
        allpay:'312'
      },
      {
        src: '/pages/images/qianbao.png',
        title: '内墙除醛漆专用腻子',
        type: '容量：1L 颜色：天蓝',
        num: '2',
        price: '156',
        state: '已完成',
        allnum: '2',
        allpay: '312'
      },
      {
        src: '/pages/images/qianbao.png',
        title: '内墙除醛漆专用腻子',
        type: '容量：1L 颜色：天蓝',
        num: '2',
        price: '156',
        state: '待支付',
        allnum: '2',
        allpay: '312'
      }, {
        src: '/pages/images/qianbao.png',
        title: '内墙除醛漆专用腻子',
        type: '容量：1L 颜色：天蓝',
        num: '2',
        price: '156',
        state: '待发货',
        allnum: '2',
        allpay: '312'
      }, {
        src: '/pages/images/qianbao.png',
        title: '内墙除醛漆专用腻子',
        type: '容量：1L 颜色：天蓝',
        num: '2',
        price: '156',
        state: '待验收',
        allnum: '2',
        allpay: '312'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth)
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 5,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
   
    });
    console.log(that.data.tabs)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})