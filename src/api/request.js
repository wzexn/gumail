//对于axios进行二次封装
import axios from "axios";
//1.利用axios对象的方法create.去创建一个axios实例
//2.request就是axios. 需要配置
//引入进度条
import nProgress, { start } from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";   
//star 代表进度条开始 done 代表进度条结束
const requests = axios.create({
    //配置对象
    baseURL:"/api",
    //代表请求超时的时间 5s
    Timeout:5000,
});
//请求拦截器：在发送请求之前
requests.interceptors.request.use((config)=>{
    //config:配置对象，对象里面有个叫headers请求头的属性
    //进度条开始
    nProgress.start();
    return config;
});

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器可以做一些事情
    //进度条结束
    nProgress.done();
    return res.data;
    //返回成功的数据
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new error('faile'));
});

//对外暴露
export default requests;