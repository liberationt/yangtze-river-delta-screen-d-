<template>
    <div class="indexPage">
        <Nursing-people />
        <Pension-advisers />
        <dynamic-data />
        <smart-watch />
        <chang-san-jiao />
    </div>
</template>
<script>
import NursingPeople from './NursingPeople'
import PensionAdvisers from './PensionAdvisers'
import DynamicData from "./dynamicData";
import SmartWatch from "./SmartWatch";
import ChangSanJiao from "./ChangSanJiao";
export default {
    components:{
        DynamicData,
        NursingPeople,
        PensionAdvisers,
        SmartWatch,
        ChangSanJiao
    }
}
</script>
<style lang="scss" scoped>
.indexPage {
    display: flex;
    flex-direction: row;
    div {
        margin-right: 55px; //暂时设置
    }
}
</style>
