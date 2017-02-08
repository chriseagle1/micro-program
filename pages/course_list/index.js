// pages/course_list/index.js
Page({
  data:{
    normalList:[],
    normalTotal:0,
    courseType:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var courseType = options.type, typeName;
    if(courseType == 'normal-course') {
        typeName = '普通锻炼';
    } else if(courseType == 'neck-relax'){
        typeName = '颈肩放松';
    } else {
        typeName = '测试';
    }
    
    wx.setNavigationBarTitle({
      title: typeName
    });
    var th = this;
    th.setData({
      courseType:courseType
    });
    this.ajaxRequest(
      'https://sunshinetp.applinzi.com/program/list', 
      {type:courseType}, 
      function(res){
        if(res.data.code == 1) {
          th.setData({
            normalList: res.data.list,
            normalTotal:res.data.list.length
          });
        }
    });
    
  },
  addRecord:function(e) {
    var cType = this.data.courseType,
        th = this;
    th.ajaxRequest(
      'https://sunshinetp.applinzi.com/program/index',
      {type:cType},
      function(res) {
        if(res.data.code == 1) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          });
          th.ajaxRequest(
            'https://sunshinetp.applinzi.com/program/list', 
            {type:cType}, 
            function(res){
              if(res.data.code == 1) {
                th.setData({
                  normalList: res.data.list,
                  normalTotal:res.data.list.length
                });
              }
            }
          );
        } else {
          wx.showModal({
            title: '失败',
            content: res.data.msg,
            showCancel:false,
            success: function(r) {
            }
          });
        }
      }
    )
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  ajaxRequest:function(reqUrl, reqData, callback) {
    wx.request({
      url: reqUrl,
      data: reqData,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // 设置请求的 header
      header: {
        'content-type':'application/x-www-form-urlencoded'
      }, 
      success: function(res){
        callback(res);
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