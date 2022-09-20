<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home Search显示的 在登录 注册是隐藏的 -->
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
    <!-- 通过元信息的判断来决定显示与否 -->
  </div>
</template>

<script>
//引入
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
export default {
    name: '',
    components:{
    Header,
    Footer,
}
}
</script>

<style>


</style>
