var app = getApp();

Page({
  data: {
    pages:[]
  },
  onLoad: function () {
    
  },
  onReady:function() {
    this.setData({
        // pages: getCurrentPages()
      })
  },
  addRecord:function(e) {
    var addType = e.currentTarget.dataset.type;
    wx.request({
      url: 'https://sunshinetp.applinzi.com/program/index',
      data: {
        type:'debug'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // 设置请求的 header
      header: {
        'content-type':'application/x-www-form-urlencoded'
      }, 
      success: function(res){
        if(res.data.code == 1) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          });
        } else {
          wx.showModal({
            title: '失败',
            content: res.data.msg,
            showCancel:false,
            success: function(r) {
            }
          });
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})