//当前文件是对接口的统一管理
import requests from "./request";
import mockquests from "./mockAjax"
//三级联动的接口
//http:gmall-h5-api.atguigu.cn

export const reqCategoryList = ()=>
    //发请求 
    requests({
        url:'/product/getBaseCategoryList',
        method: 'get'
    })

//获取banner首页轮播图的数据
export const reqGetBannerList = ()=>
     mockquests({
        url:'/banner',
        method:'get'
     })

//获取floor组件的数据
export const reqFloorList = ()=>
      mockquests({
        url:'/floor',
        method:'get'
      })

//获取搜索模块的数据 地址：/api/list 请求方式：post 需要带参数
/*"category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"*/

  export const reqGetSearchInfo = (params)=>
    requests({
    url:"/list",
    method:"post",
    data:params,
  });

