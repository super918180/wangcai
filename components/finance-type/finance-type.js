const config = require('../../config/config');
Component({
  behaviors: [],
  properties: {},
  data: {
    name: 123,
    detail: [
      {
        "name": "网络理财",
        "rate": "10.2",
        "tag": ""
      },
      {
        "name": "宝宝理财",
        "rate": "4.05",
        "tag": "随存随取"
      },
      {
        "name": "银行",
        "rate": "4.10",
        "tag": "超低风险"
      }
    ]
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
    this._getData();
  },

  methods: {
    _getData: function () {
      wx.request({
        url: config.url + '/financeType',
        success: (res) => {
          this.setData({
            detail: res.data.data
          })
        }
      })
    }
  }
})