// pages/detail/detail.js

const faceUrl = require("../public/common/faceUrl.js")
const { Toast, Loading } = require("../public/common/Toast.js")
const { Request } = require("../../utils/request.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:null,
    similar:null,
    similarInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //职位详情请求
    let detailObj = {
      path:faceUrl.path+faceUrl.positionDetail,
      data:{
        positionID:options.positionID,
        jobsID:options.jobsID
        }
    }

    Request(detailObj,(res)=>{
      if (res.code == 1) {  //后台代码错误
        Toast(res.msg, 'success', 2000);
        return;
      }
      if (res.code == 2) { //数据为空
        Toast(res.msg, 'none', 2000);
        return;
      }
      if (res.code == 3) { //请求参数为空
        Toast(res.msg, 'none', 2000);
        return;
      }
      if (res.code == 0) { //请求成功，并返回参数
        // console.log(res.data[0])
        that.setData({
          detail: res.data[0],
          similar:res.data[0].positionName
        })

        //发起请求--相似职位
        let obj = {
          path: faceUrl.path + faceUrl.similarPositions,
          data: { positionName: that.data.similar }
        };
        // console.log(obj, 'ojb')
        
        Request(obj, (res) => {
          // console.log(that.data.similar, 'sim')
          if (res.code == 1) {  //后台代码错误
            Toast(res.msg, 'success', 2000);
            return;
          }
          if (res.code == 2) { //数据为空
            Toast(res.msg, 'none', 2000);
            return;
          }
          if (res.code == 3) { //请求参数为空
            Toast(res.msg, 'none', 2000);
            return;
          }
          if (res.code == 0) { //请求成功，并返回参数
            that.setData({
              similarInfo: res.data
            })
      }
    })
      }

    })
  },
  positionDetail: function (event) {
    let condition = {
      positionID: event.target.dataset.condition || event.currentTarget.dataset.condition,
      jobsID: event.target.dataset.jobsid || event.currentTarget.dataset.jobsid
    }
    wx.navigateTo({
      url: '/pages/detail/detail?positionID=' + condition.positionID + "&jobsID=" + condition.jobsID,
    })
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