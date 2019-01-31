// pages/phone/phone.js
const util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '获取验证码',
    disabled: true,
    loading: false,
    iptdis: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  watchtelnum: function (event) {
    console.log(event.detail.value.length)
    if (event.detail.value.length < 11) {
      this.setData({ disabled: true });
      this.data.mobile = event.detail.value
      return event.detail.value
    }
    else {
      this.data.mobile = event.detail.value
      this.setData({ mobile: event.detail.value });
      this.setData({ disabled: false });
    }
  },
  watchtelcode: function (event) {
    this.setData({ code: event.detail.value });
  },
  tryget: function (e) {
    var that = this;
    that.setData({
      loading: true,
      disabled: true,
      iptdis: true,
      text: 60
    });
    that.Countdown(that.data.text);
  },
  Countdown: function (num) {
    let that = this;
    let toint = parseInt(num);
    this.setData({
      timer: setInterval(function () {
        toint--;
        that.setData({
          text: toint
        });
        if (toint <= 0) {
          clearInterval(that.data.timer);
            that.setData({
              loading: false,
              disabled: false,
              iptdis: false,
              text: '重新获取'
            });    
        }
      }, 1000)
    })
  },
})