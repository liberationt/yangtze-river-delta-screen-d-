<template>
    <div style="display: flex">
        <ElderInfor />
        <mapInfor />
        <institution />
        <community />
        <service />
    </div>
</template>
<script>
import ElderInfor from './elderInfor'
import mapInfor from './map'
import institution from './institution'
import community from './community'
import service from './services'

export default {
    components:{ElderInfor,mapInfor,institution,community,service },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scope>

</style>
