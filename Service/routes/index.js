
//路由
//管理员
const adminLogin = require("../dao/admin/adminLogin");            //管理员登录
const listAdmin = require("../dao/admin/listAdmin");              //管理员列表
const saveAdmin = require("../dao/admin/saveAdmin");              //添加管理员
const delAdmin = require("../dao/admin/delAdmin");                //删除管理员
const updAdmin = require("../dao/admin/updAdmin");                //修改管理员信息
const searchAdmin = require("../dao/admin/searchAdmin");          //搜索管理员
const detailAdmin = require("../dao/admin/detailAdmin");          //管理员详情
//文章
const articleList = require("../dao/article/articleList");        //文章列表
const articleSave = require("../dao/article/articleSave");        //添加文章
const articleDel = require("../dao/article/articleDel");          //删除文章
const articleUpd = require("../dao/article/articleUpd");          //修改文章
const articleSaerch = require("../dao/article/articleSearch");    //搜索文章
const articleDetail = require("../dao/article/articleDetail");    //文章详情
//用户
const register = require("../dao/user/register");                 //用户注册
const login = require("../dao/user/login");                       //用户登录
const userList = require("../dao/user/userList");                 //用户列表
const userUpd = require("../dao/user/userUpd");                   //修改用户信息
const userUpdPwd = require("../dao/user/userUpdPwd");             //修改用户密码
const userDel = require("../dao/user/userDel");                   //用户注销
const userDetail = require("../dao/user/userDetail");             //用户详情
const userSearch = require("../dao/user/userSearch");             //搜索用户

//职位
const companyList = require("../dao/company/companyList");
const companySearch = require("../dao/company/comyanySearch");
const companyDetail = require("../dao/company/companyDetail");

//微信小程序
const positionList = require('../dao/company/positionList');
const positionDetail = require('../dao/company/positionDetail');
const positionSearch = require('../dao/company/positionSearch');
const enterpriseDetail = require('../dao/company/enterpriseDetail');
const similarPositions = require('../dao/company/similarPositions');
const similar = require("../dao/company/similar");
const tips = require("../dao/company/tips");


const addInfo = require("../addInfo");

let routes = [{
  path:"/adminLogin",
  opcation:adminLogin,
  msg:"管理员登录"//1
},{
    path:"/listAdmin",
    opcation:listAdmin,
    msg:"管理员列表"//2
},{
    path:"/saveAdmin",
    opcation:saveAdmin,
    msg:"添加管理员"//3
},{
    path:"/delAdmin",
    opcation:delAdmin,
    msg:"删除管理员"//4
},{
    path:"/updAdmin",
    opcation:updAdmin,
    msg:"修改管理员信息"//5
},{
    path:"/searchAdmin",
    opcation:searchAdmin,
    msg:"搜索管理员"//6
},{
    path:"/detailAdmin",
    opcation:detailAdmin,
    msg:"管理员详情"//7
},{
    path:"/articleList",
    opcation:articleList,
    msg:"文章列表"//8
},{
    path:"/articleSave",
    opcation:articleSave,
    msg:"添加文章"//9
},{
    path:"/articleDel",
    opcation:articleDel,
    msg:"删除文章"//10
},{
    path:"/articleUpd",
    opcation:articleUpd,
    msg:"修改文章信息"//11
},{
    path:"/articleSaerch",
    opcation:articleSaerch,
    msg:"搜索文章"//12
},{
    path:"/articleDetail",
    opcation:articleDetail,
    msg:"文章详情"//13
},{
    path:"/register",
    opcation:register,
    msg:"用户注册"//14
},{
    path:"/login",
    opcation:login,
    msg:"用户登录"//15
},{
    path:"/userList",
    opcation:userList,
    msg:"用户列表"//16
},{
    path:"/userUpd",
    opcation:userUpd,
    msg:"修改用户信息"//17
},{
    path:"/userUpdPwd",
    opcation:userUpdPwd,
    msg:"修改用户密码"//18
},{
    path:"/userDel",
    opcation:userDel,
    msg:"用户注销"//19
},{
    path:"/userDetail",
    opcation:userDetail,
    msg:"用户详情"//20
},{
    path:"/userSearch",
    opcation:userSearch,
    msg:"搜索用户"//21
},{
    path:"/companyList",
    opcation:companyList,
    msg:"职位列表"//22
},{
    path:"/companySearch",
    opcation:companySearch,
    msg:"搜索职位"//23
},{
    path:"/companyDeatil",
    opcation:companyDetail,
    msg:"职位详情"//24
},{
    path:"/addInfo",
    opcation:addInfo,
    msg:"添加信息"//24
},{
    path:"/position/positionList",
    opcation:positionList,
    msg:"微信小程序"//24
},{
    path:"/position/positionDetail",
    opcation:positionDetail,
    msg:"微信小程序"//24
},{
    path:"/position/positionSearch",
    opcation:positionSearch,
    msg:"微信小程序"//24
},{
    path:"/position/enterpriseDetail",
    opcation:enterpriseDetail,
    msg:"微信小程序"//24
},{
    path:"/position/similarPositions",
    opcation:similarPositions,
    msg:"微信小程序"//24
},{
    path:"/position/similar",
    opcation:similar,
    msg:"微信小程序"//24
},{
    path:"/position/tips",
    opcation:tips,
    msg:"微信小程序"//24
}];


module.exports = routes;
