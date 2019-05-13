//app.js
App({
  onLaunch: function () {
   let that = this;
   wx.getStorage({
     key: 'userinfo',
     success: function(res) {
      //  console.log(res.data)
       that.globalData.isShow = (res.data == '')?false:true;
     },
   })
  },
  globalData: {
    userInfo: null,
    isShow:false
  },
  
})