const path = require('path');
const fs = require('fs');
const getInfo = require('./daoImpl/getInfo');

const arr = require('./job.js')



let addInfo = function(req,res){
            // console.log(arr[83],arr[82])
            for(let i = 0; i < 100; i++){

               // let sql = `insert into jobs (positionID,positionName,city,createTime,salary,companyID,companyLogo,companyName,companyFullName) values ('${arr[i].positionId}','${arr[i].positionName}','${arr[i].city}','${arr[i].createTime}','${arr[i].salary}','${arr[i].companyId}','${arr[i].companyLogo}','${arr[i].companyName}','${arr[i].companyFullName}')`;
               //  let sql = `insert into enterprise (companyID,companyShortName,companyFullName,companyIndustryField,companyLogo,companySize,companyFinanceStage,city)
               //  values ('${arr[i].companyId}','${arr[i].companyName}','${arr[i].companyFullName}',
               //  '移动互联网','${arr[i].companyLogo}','${4}',
               //  '${7}','${arr[i].city}')`;

                let sql = `insert into tips (userId,city,companyFullName,companyId,companyLogo,companyShortName,exposure,hrName,hrPortrait,hrPositionName,industryField,onlineJobCount) values 
                ('${arr[i].userId?arr[i].userId:null}','${arr[i].city?arr[i].city:null}','${arr[i].companyFullName?arr[i].companyFullName:null}','${arr[i].companyId?arr[i].companyId:null}','${arr[i].companyLogo?arr[i].companyLogo:null}','${arr[i].companyShortName?arr[i].companyShortName:null}','${arr[i].exposure?arr[i].exposure:null}',
                '${arr[i].hrName}','${arr[i].hrPortrait}','${arr[i].hrPositionName}','${arr[i].industryField}','${arr[i].onlineJobCount }')`
               getInfo(sql,(num,data)=>{
                   console.log(num)
               })
            }
}

module.exports = addInfo;
