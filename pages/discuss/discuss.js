// pages/discuss/discuss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        value:'1',
        checked:false
      },
      {
        value: '2',
        checked: false
      }, {
        value: '3',
        checked: false
      },
       {
         value: '4',
         checked: false
      }, 
      {
        value: '5',
        checked: false
      }
    ],
    result:'暂无'
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
  star: function (e) {
    let k = e.currentTarget.dataset.index;
    let list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if(i<k){
        list[i].checked = true;  
      }else{
        list[i].checked = false;
      }
    }
    let result = ['很差', '差', '一般', '好', '很好'];
    this.setData({
      list: list,
      result: result[k - 1]
    });
  },
})