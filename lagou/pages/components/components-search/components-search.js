//自定义组件

const app = getApp();
const page = getCurrentPages();
const faceUrl = require('../../public/common/faceUrl');
const { Toast, Loading } = require("../../public/common/Toast");
const { Request } = require("../../../utils/request.js");

Component({
  data:{
    searchArr:["Java","PHP","Android","iOS","前端","测试","运维","产品经理","设计师","运营","市场","销售经理"],
    isValue:false,
    searchValue:null
  },
  
  methods:{
    getSearchValue: function (event) { //绑定搜索框的内容
      this.setData({
        searchValue:event.detail.value
      })
    },
    search:function(){
      if(!this.data.searchValue){
        console.log("搜索内容不能为空");
        return;
      }
      let obj = {
        path: faceUrl.path + faceUrl.positionSearch,
        data: { pageNo: 1,params:this.data.searchValue }
      }

      // 职位列表
      Request(obj, (res) => {
        if (res.code == 1) {
          Toast(res.msg, 'success', 2000);
          return;
        }
        if (res.code == 0) {
          Toast('成功', 'success', 1500);
          this.triggerEvent('myevent', { val: true, value: res.data });//执行父组件的事件
        }
      });
    },
    getThisValue:function(event){
      let item = event.target.dataset.item || event.currentTarget.dataset.item;
      this.setData({
        searchValue:item
      })
    }
  }
  
})