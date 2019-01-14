<template>
  <div class="tabber">
    <mt-tabbar v-model="selected">
  <mt-tab-item id="首页">
    <img slot="icon" src="">
    首页
  </mt-tab-item>
  <mt-tab-item id="企业福利">
    <img slot="icon" src="">
    企业福利
  </mt-tab-item>
  <mt-tab-item id="购物车">
    <img slot="icon" src="">
    购物车
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name: 'tabber',
  components:{Tabbar, TabItem},
  data () {
    return {
       
    }
  }
}
</script>
<style lang="less" scoped="scoped">
  @import '../../styles/main.less';
  .home{
     background: red;
    //  width: 50%;
    width: 100%;
     .h(50);
     .fs(16);
   }
</style>
