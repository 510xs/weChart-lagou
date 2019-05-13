
const { Toast, Loading } = require("../pages/public/common/Toast");

export function Request(obj,callback){
  // Loading("小马达正在矿磁矿磁......")
  // console.log(obj,'请求数据')
  wx.request({
    url: obj.path,
    method: 'POST',
    data: obj.data,
    success: function(res) {
      // wx.hideLoading();  //结束loading加载
      callback(res.data);
    },
    fail: function(res) {
      Toast('请检查您的网络', 'none', 1500);
    },
  })
}