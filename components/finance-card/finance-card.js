const config = require('../../config/config');
Component({
  behaviors: [],
  properties: {},
  data: {
    detail: {}
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
    this._getData();
  },

  methods: {
    _getData: function () {
      wx.request({
        url: config.url + '/financeCard',
        success: (res) => {
          this.setData({
            detail: res.data.data
          })
        }
      })
    }
  }
})