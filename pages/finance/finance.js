const config = require('../../config/config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortIndex: 0,
    sortType: ["默认", "收益降序", "收益升序"],
    filterIndex: 0,
    filterType: ["全部", "上市公司", "国有企业", "银行"]
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
    this.getProductList();
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
  getProductList: function () {
    wx.request({
      url: config.url + '/getProductList',
      success: (res) => {
        this.setData({
          product: {
            data: res.data.data
          }
        });
      }
    })
  },
  bindSortPickerChange: function (e) {
    this.setData({
      sortIndex: e.detail.value
    })
  },
  bindFilterPickerChange: function (e) {
    this.setData({
      filterIndex: e.detail.value
    })
  }
})