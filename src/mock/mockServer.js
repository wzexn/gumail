//先引入mockjs模块
import Mock from 'mockjs';
//把json数据格式引入进来（json格式不需要对外暴露）
//webpack默认对外暴露图片，json格式
import banner from './banner.json';
import floor from './floor.json';

//mock数据 第一是地址 第二是参数
Mock.mock("/mock/banner",{code:200,data:banner});//模拟首页大轮播图的数据
Mock.mock("/mock/floor",{code:200,data:floor});