// pages/verifyperson/verifyperson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "1999-01-01",
    tipimglist: [
      { src: '/pages/images/idcardtip1.png' },
      { src: '/pages/images/idcardtip2.png' },
      { src: '/pages/images/idcardtip3.png' },
      { src: '/pages/images/idcardtip4.png' }
    ],
    tipwordlist:[
      { src: '/pages/images/idcardtipr.png',
        word:'标准'
       },
      { src: '/pages/images/idcardtipw.png',
        word: '边框缺失'
       },
      { src: '/pages/images/idcardtipw.png',
        word: '照片模糊'
       },
      { src: '/pages/images/idcardtipw.png',
        word: '闪光强烈'
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
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
})