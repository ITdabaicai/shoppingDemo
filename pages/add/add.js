// pages/add/add.js
const util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add:1,
    list:[
      {
        name:'li',
        tel:'13366558844',
        add:'厦门湖里XXXXXXXXXX',
        checked:true,
        value:'0'
      },
      {
        name: 'li2',
        tel: '12266558844',
        add: '厦门湖里XXXXXXXXXX',
        checked: false,
        value:'1',
      }
    ]
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
  addnew(){
    util.gonext('addnew')
  },
  getindex(e){
    e.currentTarget.dataset.index
  },
  radioChange: function (e) {
    var list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      list[i].checked = list[i].value == e.detail.value;
    }
    this.setData({
      list: list
    });
  },
})