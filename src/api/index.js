//当前文件是对接口的统一管理
import requests from "./request";

//三级联动的接口
//http:gmall-h5-api.atguigu.cn

export const reqCategoryList = ()=>
    //发请求 
    requests({
        url:'/product/getBaseCategoryList',
        method: 'get'
    })

