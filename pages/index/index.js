//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  addRecord:function(e) {
    var addType = e.currentTarget.dataset.type;
    
    wx.navigateTo({
      url: '../course_list/index?type=' + addType
    })
  },
  recordSwim:function(e) {
    wx.navigateTo({
      url: '../swim/list'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
