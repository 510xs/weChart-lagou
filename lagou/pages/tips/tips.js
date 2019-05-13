// pages/tips/tips.js
const faceUrl = require('../public/common/faceUrl');
const { Toast, Loading } = require("../public/common/Toast");
const { Request } = require("../../utils/request.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipsList:null,
    endTips:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let obj = {
      path:faceUrl.path+faceUrl.tips,
      data:{
        pageNo:10
      }
    }

    Request(obj,(res)=>{
      if(res.code == 0){
        res.data.sort((a, b)=>{
          return b.exposure - a.exposure
        })
        console.log(res.data)
        that.setData({
          tipsList:res.data
        })
      }
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
    let that = this;
    that.setData({
      endTips:true
    })
    let obj = {
      path: faceUrl.path + faceUrl.tips,
      data: {
        pageNo: that.data.tipsList.length+10
      }
    }

    setTimeout(()=>{
      Request(obj, (res) => {
        if (res.code == 0) {
          res.data.sort((a, b) => {
            return b.exposure - a.exposure
          })
          that.setData({
            tipsList: res.data,
            endTips: false
          })
        }
      })
    },1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
