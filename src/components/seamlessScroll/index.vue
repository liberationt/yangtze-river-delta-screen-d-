<template>
    <div class="seamlessMain">
        <span class="seamlessTitle">
            <img src="@/assets/flod.png" alt="">
        </span>
        <vue-seamless-scroll :data="dataOption" :class-option="optionSingleHeight" class="seamless-warp">
            <ul class="item" v-if="type==1">
                <li v-for="(item,i) in dataOption" :key='i' style="line-height:40px">
                    <div>{{item.census}}</div>
                </li>
            </ul>
            <ul class="item" v-else>
                <li v-for="(item,i) in dataOption" :key='i' style="line-height: 40px;">
                    <div>{{item.content}}</div>
                </li>
            </ul>
        </vue-seamless-scroll>
    </div>
</template>
<script>
export default {
    props:['dataOption','type'],
    data(){
        return{
        }
    },
    computed: {
        optionSingleHeight () {
            return {
                hoverStop: true,
                limitMoveNum:3,
                //  singleHeight: 40 ,   //（带停顿的）
                // waitTime:2000,        //（停顿时间）
                // direction: 0          （从上往下的）
                direction:1,           //（左右的）
                step:0.3,              //（调整速度的）0
                hoverStop:true        //(鼠标停留停止 离开继续运行（反之则停止）)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .seamlessMain{
        position: relative;
        height:62px;
        width:100%
    }
    .seamless-warp {
        width:900px;
        height: 62px;
        /*line-height: 30px;*/
        overflow: hidden;
        border:1px solid #036469;
        padding-left:72px;
        color:#8fdae2;
        position: absolute;
        font-size: 18px;
        .item li:nth-child(even){
            margin-bottom:0px;
        }
    }
    .seamlessTitle{
        display:block;
        width:60px;
        height:60px;
        position: absolute;
        top:1px;
        left:1px;
    }
</style>
