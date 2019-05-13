// pages/center/center.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutArr:[{
      txt:'简历',
      img:'../public/images/icon/jianli.png'
      },{
        txt: '投递记录',
        img: '../public/images/icon/jilu.png'
      }, {
        txt: '职位收藏',
        img: '../public/images/icon/shoucang.png'
      }, {
        txt: '意见反馈',
        img: '../public/images/icon/fankui.png'
    }],
    isBtnLogin:true,
    loginModeArr:[{
      path:'../components/login-other/login-other',
      type:'other'
    },{
        path: '../components/login-wx/login-wx',
        type: 'wx'
    },{
        path: '../components/login-tel/login-tel',
        type: 'tel'
    }],
    isUser:true,
    userInfo:null
  },

  /**
   * 自定义事件
   */
  // 是否显示登录选择弹窗
  loginModule:function(e){
    let show = e.target.dataset.isshow || e.currentTarget.dataset.isshow;
    this.setData({
      isBtnLogin:show
    })
  },
  // 跳转到各个登录页面
  loginPage:function(e){
    let page = e.target.dataset.page || e.currentTarget.dataset.page;

    for(let i = 0; i < 3; i++){
      if (this.data.loginModeArr[i].type.includes(page)) {
        wx.navigateTo({
          url: this.data.loginModeArr[i].path,
        })
        this.setData({
          isBtnLogin:true
        });
      }
    }
  },
  //退出登录
  loginOut:function(e){
    let that = this;
    wx.setStorage({
      key: 'userinfo',
      data: '',
      success:function(res){
        that.setData({
          userInfo:null,
          isUser:false
        });
        app.globalData.isShow = false;
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })
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
    let that = this;
    wx.getStorage({
      key: 'userinfo',
      success: function (res) {
        // console.log(res,'ross')
        let info = (res.data == '') ? null : JSON.parse(res.data)
        that.setData({
          isUser: (res.data == '') ? false : true,
          userInfo: info
        })
      }
    })
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

  }
})