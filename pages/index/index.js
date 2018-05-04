const config = require('../../config/config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: []
  },
  onReady: function () {
    this.getListOfNews();
  },
  getListOfNews: function () {
    wx.request({
      url: config.url + '/list',
      method: 'POST',
      data: {
        size: '5',
        type: 'news'
      },
      success: function (res) {
        console.log(res.data.data)
      }
    })
  }
})