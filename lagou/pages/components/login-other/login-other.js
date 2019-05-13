// pages/components/login-other/login-other.js

const faceUrl = require('../../public/common/faceUrl.js');
const { Toast } = require('../../public/common/Toast.js');
const { Request } = require('../../../utils/request.js');

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
        userName:null,
        userPassWord:null
  },
  //改变登录信息状态
  changeLoginInfo:function(e){
    let type = e.target.dataset.type || e.currentTarget.dataset.type;
    if(type == '1'){
      this.setData({
        userName:e.detail.value
      })
    } else {
      this.setData({
        userPassWord:e.detail.value
      })
    }
  },
  //用户登录
  login:function(e){
    let that = this;
    if(!this.data.userName){
      Toast('提示：账号信息不能为空','none',2000);
      return;
    }
    if(!this.data.userPassWord){
      Toast('提示：密码内容不能为空','none',2000);
      return;
    }

    let obj = {
      path:faceUrl.path+faceUrl.login,
      data:{
        userName:that.data.userName,
        userPassWord:that.data.userPassWord
      }
    }

    Request(obj,(res)=>{
      if(res.code == 1){
        Toast("大批攻城师正在骑马赶来的路上",'none',2000);
        return;
      }
      if(res.code == 2){
        Toast("没有此用户，请注册",'none',2000);
        return;
      }
      if(res.code == 0){
        wx.setStorage({
          key: 'userinfo',
          data: JSON.stringify(res.data[0]),
          success:function(res){
            wx.switchTab({
              url: '/pages/index/index'
            })
            // app.global.isShow = true;
          }
        })
      }
    })
  }
})