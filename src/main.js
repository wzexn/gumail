import Vue from 'vue'
import App from './App.vue'
//三级联动的全局组件
import typeNav from '@/components/typeNav';
//轮播图的全局组件
import Carousel from '@/components/Carousel'
// 使用一次全局组件 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(typeNav.name,typeNav);
Vue.component(Carousel.name,Carousel);
/* 引入路由 */
import router from '@/router';
//引入仓库
import store from '@/store';
//引入mockServer.js---mock的数据
import '@/mock/mockServer'
//引入是swiper样式
import "swiper/css/swiper.css"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
  }, 
  //注册路由
  router,
  store
}).$mount('#app') 
