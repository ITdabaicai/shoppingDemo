var app = getApp()

// 登录状态判断
function istoken(){
  if (wx.getStorageSync("token")==0){
    wx.showModal({
      title: '',
      content: "请先登录",
      showCancel: false,
      confirmText: "好的",
      confirmColor: '#00ce9f'
    });
    return false;
  }
}
// 提示框
function getmodal(title, content, showCancel, confirmText, successFun){
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    confirmText: confirmText,
    confirmColor: '#00ce9f',
    success: function (res) {
      typeof successFun == 'function' && successFun(res)
    },
  });
}
// 电话拨打
function callnum(num){
  wx.makePhoneCall({
    phoneNumber: num 
  })
}
// 页面跳转
function gonext(add){
    wx.navigateTo({
      url: '/pages/'+add+'/'+add,
    })
}
// 吐司
function tusi(title,successFun){
  wx.showToast({
    title: title,
    icon: 'succes',
    duration: 2000,
    mask: true,
    success: function (res) {
      typeof successFun == 'function' && successFun(res)
    },
  })
}
// 接口请求封装
function Getdata(url, methods, data, successFun) {
  wx.request({
    url: app.baseUrl.Url + url,
    method: methods,
    header:
      {
        'content-type': 'application/x-www-form-urlencoded',
        'token': wx.getStorageSync("retoken")
      },
    data: data,
    success: function (res) {
      if (res.statusCode == 401) {
        getmodal('提示', res.data.msg, false, '好的', function (res) {
          if (res.confirm == true) {
            wx.clearStorage()
            wx.switchTab({
              url: '/pages/myself/myself'
            })
          }
        })
      } else if (res.statusCode == 200) {
        typeof successFun == 'function' && successFun(res)
      } else {
        getmodal('提示', res.data.msg, false, '好的')
      }
    }
  })
}
module.exports = {
  istoken:istoken,
  getmodal: getmodal,
  callnum: callnum,
  gonext: gonext,
  tusi: tusi,
  Getdata: Getdata
}
