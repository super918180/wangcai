const app = getApp();
const config = require('../../config/config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onReady: function () {
    this.getUserInfo();
    this.getNewsListAll();
    this.getProductRecommend();
  },
  getUserInfo: function () {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
      }
    })
  },
  getNewsListAll: function () {
    wx.request({
      url: config.url + '/getNewsListAll',
      success: (res) => {
        this.setData(this.formatNewsData(res.data.data));
      }
    })
  },
  getProductRecommend: function () {
    wx.request({
      url: config.url + '/getProductRecommend',
      success: (res) => {
        this.setData({
          product: {
            name: "人气排行榜",
            data: res.data.data
          }
        });
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