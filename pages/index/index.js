const config = require('../../config/config');
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  onReady: function () {
    this.getNewsListAll();
  },
  getNewsListAll: function () {
    wx.request({
      url: config.url + '/getNewsListAll',
      success: (res) => {
        this.setData(this.formatNewsData(res.data.data));
      }
    })
  },
  formatNewsData: function (data) {
    let formatObj = {};
    for (let i = 0; i < data.length; i++) {
      formatObj[data[i].type] = data[i];
    }
    return formatObj;
  }
})