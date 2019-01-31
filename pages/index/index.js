// pages/product/product.js

var util = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftindex:0,
    leftdata:0,
    rightdata:[],
    imgUrls: [
      '../images/store.png',
      '../images/store.png',
      '../images/store.png'
    ],
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
    util.Getdata('product/user/product/series/slist','GET','',function(res){
      that.setData({
        leftdata: res.data,
      })
      that.datachange(that.data.leftdata[that.data.leftindex].id)
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
  changeindex:function(e){
    let that =this;
    if (that.data.leftindex == e.target.dataset.index){
      return;
    }else{
      that.setData({
        leftindex: e.target.dataset.index,
        hidden: false
      })
      wx.setStorageSync("leftindex",e.target.dataset.index)
      that.datachange(e.target.dataset.id)
    }
  },
  // 左侧点击
  datachange:function(leftid){
    let that =this;
    util.Getdata('product/user/product/list', 'GET', { 'parent': leftid}, function (res) {
      that.setData({
        rightdata: res.data,
        hidden:true
      })
    })
  },
  // 产品详情
  prodetail:function(e){
    wx.setStorageSync("goodid", e.currentTarget.dataset.id);
    util.gonext('gooddetail')
  },
  watchPassWord:function(e){
    let that=this;
    util.Getdata('products/series/' + that.data.leftdata[that.data.leftindex].id, 'GET', { 'name': e.detail.value}, function(res){
      that.setData({
        hidden: false,
        rightdata: res.data  
      })
      that.data.setInter = setInterval(function () {
        that.setData({
          hidden: true
        })
        that.endSetInter();
      }, 2000)

    })
  },
  endSetInter: function () {
    var that = this;
    clearInterval(that.data.setInter)
  },
})