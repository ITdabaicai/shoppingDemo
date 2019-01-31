// pages/feedback/feedback.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '功能异常:功能故障或不可用',
        checked: true,
        value: '0'
      },
      {
        name: '产品建议:我觉得这样优化比较好',
        checked: false,
        value: '1',
      },
      {
        name: '其他问题',
        checked: false,
        value: '2',
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