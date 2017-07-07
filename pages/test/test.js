var app = getApp();

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    pages:[],
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],
    showDateSelect:false
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  recordSwim:function(e) {
    this.setData({
      showDateSelect:true
    });
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