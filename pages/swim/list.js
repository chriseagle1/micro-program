// list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconItem:'waiting',
    iconSize:30,
    balance:5000.00.toFixed(2),
    list:[
      {
        costItem: '游泳、洗澡、抚触',
        cost: 95.00.toFixed(2),
        costTime: '7月9日 17:30'
      },
      {
        costItem: '游泳、抚触',
        cost: 70.00.toFixed(2),
        costTime: '7月6日 21:00'
      },
      {
        costItem: '游泳、抚触',
        cost: 70.00.toFixed(2),
        costTime: '7月3日 11:00'
      },
      {
        costItem: '游泳、洗澡、抚触',
        cost: 85.00.toFixed(2),
        costTime: '6月27日 15:30'
      },
      {
        costItem: '游泳、抚触',
        cost: 1.00.toFixed(2),
        costTime: '6月24日 10:30'
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
    wx.showToast({
      title: 'success',
      icon:'success',
      duration:2000
    })
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
  changeBalance: function (e) {
    wx.navigateTo({
      url: 'changebalance'
    })
  },
  addItem:function(e) {
    wx.navigateTo({
      url: 'addItem',
    })
  }
})