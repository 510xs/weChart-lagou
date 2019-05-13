//index.js
//获取应用实例
const app = getApp()
const faceUrl = require('../public/common/faceUrl');
const { Toast, Loading } = require("../public/common/Toast");
const { Request } = require("../../utils/request.js");

Page({
  data: {
    userInfo:null,
    isLogin:false,
    isShow: false,
    pageNo:1,
    positionList:null,
    endTips:false
  },
  changeIsShow: function (e) {
    this.setData({
      isShow: e.detail.val,
      positionList: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  positionDetail: function (event) {
    let condition = {
      positionID: event.target.dataset.condition || event.currentTarget.dataset.condition,
      jobsID: event.target.dataset.jobsid || event.currentTarget.dataset.jobsid
    }
    wx.navigateTo({
      url: '/pages/detail/detail?positionID='+condition.positionID+"&jobsID="+condition.jobsID,
    })
  },
  onIsLogin(){
   this.getPositionList()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this;
    that.setData({
      endTips:true
    })
    setTimeout(function(){
      that.getPositionList();
    },500)
  },
  onSearch:function(e){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  onShow:function(){
    let that = this;
    this.setData({
      isShow:app.globalData.isShow
    })
    wx.getStorage({
      key: 'userinfo',
      success: function (res) {
        that.setData({
          isLogin: (res.data == '') ? false : true,
          userInfo: (res.data == '') ? null : JSON.parse(res.data)
        })
        if (that.data.isLogin) {
          that.onIsLogin();
        }
        app.globalData.isShow = true;
      }
    })
  },
  getPositionList:function(){
    let that = this;
    let obj = {
      path: faceUrl.path + faceUrl.positionList,
      data: { pageNo: that.data.positionList ? that.data.positionList.length+15:15 }
    }

    // 职位列表
    Request(obj, (res) => {
      if (res.code == 1) {
        Toast(res.msg, 'success', 2000);
        return;
      }
      if (res.code == 0) {
        // Toast('成功', 'success', 1500);

        that.setData({
          positionList: res.data,
          endTips: false
        });
      }
    });
  }
})
