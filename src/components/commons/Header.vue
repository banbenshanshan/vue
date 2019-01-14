<template>
    <div class="header">
        <header>
            <div></div>
            <div></div>
            <div></div>
        </header>
    </div>
</template>
<script>
    export default {
        name:'Header',
        components:{},
        data(){
            return{
                name:'我是header'
            }
        }
    }
</script>
<style lang="less" scoped="scoped">
@import '../../styles/main.less';
.header{
    border:1px solid black;
}
</style>

