// pages/myself/myself.js

const util = require('../../utils/util.js')
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */  
  data: {
    hidden:true,
    hasget:0,
    list:[
      {
        title:'收货地址',
        icon:'add'
      },
      {
        title: '联系客服',
        icon: 'kefu'
      }, 
      {
        title: '意见反馈',
        icon: 'yijian'
      }
    ],
    list2: [
      {
        title: '收货地址',
        icon: 'add'
      },
      {
        title: '我的钱包',
        icon: 'qianbao'
      },
      {
        title: '邀请油漆工',
        icon: 'youqigong'
      },
      {
        title: '联系客服',
        icon: 'kefu'
      },
      {
        title: '意见反馈',
        icon: 'yijian'
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
    console.log(wx.getStorageSync("retoken")=='')
    if (wx.getStorageSync("retoken") == '') {
      wx.setStorageSync("token", 0);
      this.setData({
        token: 0,
      })
    }else{
      this.setData({
        name: wx.getStorageSync('name'),
        avatarUrl: wx.getStorageSync('avatarUrl'),
        token: 1,
        hidden: true
      })
    }
    if(this.data.hasget==0){
      this.setData({
        liexiang:this.data.list
      })
    }else{
      this.setData({
        liexiang: this.data.list2
      })
    }
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
  goewm:function(){
    util.gonext('personmsg')
  },
  click:function(e){
    util.gonext(e.currentTarget.dataset.index)
  },
  getUserInfoFun: function () {
    let that = this;
    that.setData({
      hidden: false
    })
    wx.login({
      success: function (res) {
        let code = res.code
        wx.getUserInfo({
          lang: 'zh_CN',
          success: function (res) {
            let iv = res.iv;
            let rawData = res.rawData;
            let signature = res.signature;
            let encryptedData = res.encryptedData;
            let headerdata = {};
            if (wx.getStorageSync("type") == 'pay') {
              headerdata = {
                'content-type': 'application/json',
                'Businesses_Id': '15418283701854577',
                'key': wx.getStorageSync('oid'),
                'channel': wx.getStorageSync('channel')
              }
            } else {
              headerdata = {
                  'content-type': 'application/json',
                  'Businesses_Id': '15418283701854577'
                }
            }  
            wx.request({
              url: app.baseUrl.Url + 'user/wxuser/login',
              data: {
                  'code': code,
                  'encryptedData': encryptedData,
                  'iv': iv,
                  'rawData': rawData,
                  'signature': signature
              },
              method: 'POST',
              header: headerdata,
              success: function (res) {
                wx.setStorageSync('retoken', res.data.token)
                wx.setStorageSync('name', res.data.user.nickname)
                wx.setStorageSync('avatarUrl', res.data.user.avatarUrl)
                wx.setStorageSync('openId', res.data.user.wxOpenid)
                wx.setStorageSync('token', 1)
                that.setData({
                  name: wx.getStorageSync('name'),
                  avatarUrl: wx.getStorageSync('avatarUrl'),
                  token:1,
                  hidden: true
                })
                util.tusi('登录成功')
                that.onShow();
              }
            })
          }
        })
      }
    })
  },
})