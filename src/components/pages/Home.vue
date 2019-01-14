<template>
  <div class="home">
    <header></header>
    <tabber></tabber>
 </div>
</template>

<script>
import tabber from '../commons/tabber.vue'; 
import header from '../commons/Header.vue';
export default {
  name: 'Home',
  components:{tabber},
  data () {
    return {
      name: '我是home页面'
    }
  }
}

</script>
<style lang="less" scoped="scoped">
  @import '../../styles/main.less';
  .home{
     background:white;
     border-bottom: 1px solid #f1f1f1;

    //  width: 50%;
    width: 100%;
     .h(40);
     .fs(16);
   }
</style>
