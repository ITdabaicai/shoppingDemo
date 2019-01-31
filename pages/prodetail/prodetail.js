// pages/prodetail/prodetail.js
var util = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    promsg:[],
    imgUrls: [ ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
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
    let that =this;
    util.Getdata('products/' + wx.getStorageSync("proid"),'GET','',function(res){
        that.setData({
          promsg:res.data,
          imgUrls: res.data.portrail.split(','),
          hidden:true
        }) 
     })
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
  imgYu:function(e){
    wx.previewImage({
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
  }
})