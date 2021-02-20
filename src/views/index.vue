<template>
    <div class="zcjContent">
        <appMain style="float:left"/>
        <lastMain  style="float:left"/>
    </div>
</template>
<script>
import appMain from './page/index'
import lastMain from './lastFiveSceenPage/index'
export default {
    components:{
        appMain,
        lastMain
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.zcjContent{
    width:11520px;
    height:1080px;
    padding:45px 50px;
    overflow: hidden;
    background-image: url("../assets/body_bg.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
    display: flex;
    flex-direction: row;
}
</style>
