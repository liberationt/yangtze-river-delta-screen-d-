<template>
    <div class="displayFlex">
        <span class="seamlessTitle">
            <img src="@/assets/flod.png" alt="">
        </span>
        <div class="carouselMain">
            <el-carousel height="60px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="(item,i) in dataOption" :key="i">
                    <span class="medium">{{ item.census }}</span>
                </el-carousel-item>
            </el-carousel>
        </div>
        
    </div>
</template>
<script>
export default {
    props:['dataOption'],
    data(){
        return{

        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
    // .el-carousel__item .medium {
    //     color: #475669;
    //     font-size: 14px;
    //     opacity: 0.75;
    //     line-height: 60px;
    //     margin: 0;
    // }
    .carouselMain{
        width:900px;
        height: 60px;
        /*line-height: 30px;*/
        overflow: hidden;
        border:1px solid #036469;
        padding-left:72px;
        color:#8fdae2;
        position: absolute;
        font-size: 18px;
        .medium{
            line-height: 60px;
        }
    }
   .seamlessTitle{
        width:60px;
        height:60px;
    }
</style>