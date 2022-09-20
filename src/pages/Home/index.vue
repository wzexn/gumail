<!--  -->
<template>
  <div>
    <!-- 三级联动的全局组件：三级联动已经注册为全局组件，因此不需要再引入了 -->
    <typeNav/>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <like></like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>

  </div>
</template>

<script>
//引入其余的组件
import LisContainer from '@/pages/Home/ListContainer';
import ListContainer from './ListContainer/index';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from "vuex";
export default {
    components: {
    LisContainer,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Floor,
    Brand,
},

}

</script>
<style lang='stylus' scoped>

</style>
