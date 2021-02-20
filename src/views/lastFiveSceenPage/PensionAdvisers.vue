<!-- 养老顾问大屏部分 -->
<template>
    <div class="pensionAdvisersPage">
		<div class="baseTitle">养老顾问服务
            <!-- <a>居家养老服务系统</a>
            <a href="http://ylfw.shweilao.cn/dashboard">上海养老服务平台</a> -->
        </div>
        <div class="">
            <div class="displayFlex">
                <div class="halfWidth displayFlex">
                    <div style="font-size:24px;line-height:68px;margin-right:10px">顾问点</div>
                    <div class="displayFlex">
                        <div v-for="(item,i) in gwnNum" :key="i" class="numberList">{{item}}</div>
                    </div>
                    <span style="height: 70px;line-height: 120px;font-size: 18px;">家</span>
                </div>
                <div class="halfWidth displayFlex">
                    <div style="font-size:24px;line-height:68px;margin-right:10px">顾问员</div>
                    <div class="displayFlex">
                         <div v-for="(item,i) in gwyNum" :key="i" class="numberList">{{item}}</div>
                    </div>
                    <span style="height: 70px;line-height: 120px;font-size: 18px;">人</span>
                </div>
            </div>
            <div class="subTitle mt30 mb30">
                <div><span class="sanjiaoxing"></span>顾问点统计</div>
            </div>
            <div>
            <div class="institusTop">
                <div class="container">
                    <div>
                    <div class="institusTopCon" style="border:1px solid #1cefe9">
                        <div class="mr20"><img src="@/assets/jzj2.png" /></div>
                        <div>
                        <div class="font22">街镇级</div>
                        <div class="mt10 yellowColor numCount gradient">
                            <span class="font30">{{ gwdCount.streetNum }}</span>
                            <span class="font18">家</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="institusTopCon" style="border:1px solid #1cefe9">
                    <div class="mr20"><img src="@/assets/jcj1.png" /></div>
                    <div>
                    <div class="font22">居村级</div>
                    <div class="mt10 yellowColor numCount gradient">
                        <span class="font30">{{ gwdCount.committeeNum }}</span>
                        <span class="font18">家</span>
                    </div>
                    </div>
                </div>
                <div class="institusTopCon" style="border:1px solid #1cefe9">
                    <div class="mr20"><img src="@/assets/zyjg3.png" /></div>
                    <div>
                    <div class="font22">专业机构</div>
                    <div class="mt10 yellowColor numCount gradient">
                        <span class="font30">{{ gwdCount.orgNum }}</span>
                        <span class="font18">家</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <!-- <div class="ConsultantPoint subTitle">
                <p><span class="sanjiaoxing"></span>顾问点</p>
                <div class="point-chart">
                    <Chart  :option ="counselorObj.option1" :height="counselorObj.height" :width="counselorObj.width"/>
                </div>
            </div>
            <div class="counselor subTitle">
                <p><span class="sanjiaoxing"></span>顾问员</p>
                <div class="counselor-chart">
                    <Chart  :option ="counselorObj.option2" :height="counselorObj.height" :width="counselorObj.width"/>
                </div>
            </div> -->
        </div>
        <div class="section-2">
            <div class="search-record subTitle">
                <p><span class="sanjiaoxing"></span>服务接待</p>
                <!-- <p><img src="./../../assets/ylgw.png" width="26px" height="26px" style="vertical-align: middle;margin-right: 5px;" class="smartTitle"/>智能养老顾问</p> -->
                <Chart :autoPlay="recordObj.autoPlay"  :option ="recordObj.option" :height="recordObj.height" :width="recordObj.width"/>
            </div>
        </div>
        <div class="displayFlex mt30">
            <div style="width:280px;" class="mr20">
                <div class="subTitle"><span class="sanjiaoxing"></span>空中养老顾问</div>
                <div class="font22 mt20 mb10">播放</div>
                <div class="yellowColor mb15" style="text-align:center"><span class="font35">{{peopleType[0].num}}</span><span>期</span></div>
                <div><img src="@/assets/qs.png" alt=""></div>
            </div>
            <div style="width:540px;" class="cursor" @click="toWBLJ">
                <img src="@/assets/ylgw.gif" alt="">
                <!-- <div class="subTitle"><span class="sanjiaoxing"></span>微信公众号</div>
                <div class="mt30">
                    <div class="font18 mb10 displayFlexSpace">
                        <span>关注数</span>
                        <div class="yellowColor"><span class="font30">{{peopleType[1].num}}</span><span>人</span></div>
                    </div>
                    <div class="bgColor"></div>
                </div>
                <div class="mt15">
                    <div class="font18 mb10 displayFlexSpace">
                        <span>阅读次数</span>
                        <div class="yellowColor"><span class="font30">{{peopleType[2].num}}</span><span>次</span></div>
                    </div>
                    <div class="bgColor"></div>
                </div> -->
            </div>
            <!-- <div class="bottom-content" v-for="(item,i) in peopleType" :key="i">
                <div class="subTitle">{{item.name}}</div>
                <div class="institusBottom">
                    <div class="institusBottomInfor">
                        <div class="institusBgTop">
                            <div class="yellowColor">
                                <span class="font28">{{item.num}}</span>
                                <span class="font20">{{item.unit}}</span>
                            </div>
                            <span class="bgGreen"></span>
                            <div class="font20">{{item.tag}}</div>
                        </div>
                        <div class="institusBg">
                            <img src="@/assets/fr_bg.png"/>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import Chart from "@/components/Chart";
import {areaCode} from "../../api/areaCode1";
import {
    getAdvisoryPointData,
    getAdvisoryRecordData,
    getAdvisoryPointRatioData,
    getAdvisoryEmpCountData,
    getAdvisoryEmpCountTypeData,
    getAdvisoryRecordAirData
} from  '@/api/page'
export default {
    name:'PensionAdvisers',
    components:{
        Chart
    },
    data(){
        return{
            gwnNum:[],
            gwyNum:[],
            counselorObj:{
                height: '290px',
                width: '400px',
                option1: {},
                option2: {}
            },
            recordObj: {
                height: '420px',
				width: '100%',
				option: {},
                autoPlay:true
            },
            peopleType: [
                {
                    name:'空中养老顾问',
                    num: null,
                    tag:'播放期数',
                    unit:'期'
                },{
                    name:'微信公众号',
                    num: null,
                    tag:'关注数',
                    unit:'人'
                },{
                    name:'动态',
                    num: null,
                    tag:'阅读次数',
                    unit:'次'
                },
            ],
            gwdCount:{}
        }
    },
    methods:{
        toWBLJ(){
            window.open('http://www.shweilao.cn/index/pensionAdvisersJsp', '_blank',"width=1920,height=1080,left=4800,menubar=no,toolbar=no,status=no,scrollbars=yes");
        },
        getData(){
            //顾问点
            getAdvisoryPointData({
                areaCode: areaCode
            }).then(res =>{
                this.gwnNum = String(res.data).split('')
                getAdvisoryPointRatioData({
                    areaCode: areaCode
                }).then(ress=>{
                    this.gwdCount = ress.data
                    // let org = parseInt(res.data) * (ress.data.org.substr(0,ress.data.org.length-1)) / 100,
                    // committee = parseInt(res.data) * (ress.data.committee.substr(0,ress.data.committee.length-1)) / 100,
                    // street = parseInt(res.data) * (ress.data.street.substr(0,ress.data.street.length-1)) / 100,
                    // other = parseInt(res.data) * (ress.data.other.substr(0,ress.data.other.length-1)) / 100
                    return
                    let org = ress.data.orgNum,
                    committee= ress.data.committeeNum,
                    street = ress.data.streetNum,
                    other= ress.data.otherNum
                    this.counselorObj.option1 = {
                        title:{
                            text:res.data + '家',
                            // text:'1375家',
                            left:'37%',
                            top:'45%',
                            textStyle:{
                                color:'#d5ffff',
                                fontFamily:'regular',
                                fontSize:30,
                                fontWeight:500
                            },
                        },
                        tooltip: {
                            trigger: 'item',
                            // formatter: '{a} <br/>{b}:{d}%'
                            formatter:function(params){
                                return `<span style="color:#00dfd8;">${params.seriesName}</span> <br />${params.name}：${params.value}家 <br />`
                            },
                            textStyle: {
                                color:'#d5ffff',
                                fontSize:24
                            }
                        },
                        series: [
                            {
                                name: '顾问点',
                                type: 'pie',
                                radius: ['36%', '58%'],
                                label: {
                                    show: true,
                                    normal: {
                                        position: "outside",
                                        fontSize: 16,
                                        formatter: function(params, ticket, callback) {
                                            return `{white|${params.value}}{unit| 家}\n{hr|}\n {nameColor|${params.name}}`;
                                        },
                                        rich: {
                                            nameColor: {
                                                align: "center",
                                                fontSize:18,
                                                color:'#00dfd8',
                                                padding: [5, 0]
                                            },
                                            unit:{
                                                fontSize:16,
                                                color:"#fff"
                                            },
                                            white: {
                                                color: "#fff",
                                                align: "center",
                                                fontSize: 20,
                                                padding: [5, 0],
                                                fontWeight:600,
                                                fontFamily:'regular'
                                            },
                                            hr: {
                                                borderColor: "#50689f",
                                                width: "100%",
                                                borderWidth: 1,
                                                height: 0
                                            }
                                        }
                                    }
                                },
                                labelLine: {
                                    show: true,
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                        position: 'center'
                                    },
                                },
                                data: [
                                    {value: org, name: '专业机构'},
                                    {value: committee, name: '居村级'},
                                    {value: street, name: '街镇级'},
                                    // {value: other, name: '其他'},
                                ],
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            return ['#16a3c9','#16cb5e','#cfc917','#00ffff'][params.dataIndex]
                                        }
                                    }
                                },
                            }
                        ]
                    }
                })
            })
            //顾问员
            getAdvisoryEmpCountData({
                areaCode: areaCode
            }).then(res =>{
                this.gwyNum = String(res.data).split('')
                return
                getAdvisoryEmpCountTypeData({
                    areaCode: areaCode
                }).then(ress=>{
                    // let fullTime = parseInt(res.data) * (ress.data.fullTime.substr(0,ress.data.fullTime.length-1)) / 100,
                    //     partTime = parseInt(res.data) * (ress.data.partTime.substr(0,ress.data.partTime.length-1)) / 100,
                    //     other = parseInt(res.data) * (ress.data.other.substr(0,ress.data.other.length-1)) / 100
                    let fullTime = ress.data.fullTimeNum
                    let partTime = ress.data.partTimeNum
                    let other = ress.data.otherNum
                    this.counselorObj.option2 = {
                        title:{
                            text:res.data + '人',
                            // text:'2746人',
                            left:'38%',
                            top:'45%',
                            textStyle:{
                                color:'#d5ffff',
                                fontFamily:'regular',
                                fontSize:30,
                                fontWeight:500
                            },
                        },
                        tooltip: {
                            trigger: 'item',
                            // formatter: '{a} <br/>{b}: {d}%'
                            formatter:function(params){
                                return `<span style="color:#00dfd8;">${params.seriesName}</span> <br />${params.name}：${params.value}人 <br />`
                            },
                            textStyle: {
                                color:'#d5ffff',
                                fontSize:24
                            }
                        },
                        series: [
                            {
                                name: '顾问员',
                                type: 'pie',
                                radius: ['36%', '58%'],
                                label: {
                                    show: true,
                                    normal: {
                                        position: "outside",
                                        fontSize: 16,
                                        formatter: function(params, ticket, callback) {
                                            return `{white|${params.value}}{unit| 人}\n{hr|}\n {nameColor|${params.name}}`;
                                        },
                                        rich: {
                                            nameColor: {
                                                align: "center",
                                                fontSize:18,
                                                color:'#00dfd8',
                                                padding: [5, 0]
                                            },
                                            unit:{
                                                fontSize:16,
                                                color:"#fff"
                                            },
                                            white: {
                                                color: "#fff",
                                                align: "center",
                                                fontSize: 20,
                                                padding: [5, 0],
                                                fontWeight:600,
                                                fontFamily:'regular'
                                            },
                                            hr: {
                                                borderColor: "#50689f",
                                                width: "100%",
                                                borderWidth: 1,
                                                height: 0
                                            }
                                        }
                                    }
                                },
                                labelLine: {
                                    show: true,
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                        position: 'center'
                                    },
                                },
                                data: [
                                    {value: fullTime, name: '专职'},
                                    {value: partTime, name: '兼职'},
                                    {value: other, name: '其他'},
                                ],
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            return ['#16a3c9','#16cb5e','#cfc917','#00ffff'][params.dataIndex]
                                        }
                                    }
                                },
                            }
                        ]
                    }
                })
            })
            //咨询记录
            getAdvisoryRecordData({
                areaCode: areaCode
            }).then(res=>{
                //处理数据
                let spotSolveArr = [],replyYouArr =[],waitReplyArr =[],yearMonthArr = []
                //获取当前12个月的月份
                let data = new Date();
                let year = data.getFullYear();
                // data.setMonth(data.getMonth() + 1, 1)//获取到当前月份,设置月份
                data.setMonth(data.getMonth() , 1)//获取到当前月份,设置月份

                for (let i = 0; i < 7; i++) {
                    data.setMonth(data.getMonth() - 1);//每次循环一次 月份值减1
                    let m = data.getMonth() + 1;
                    m = m < 10 ? "0" + m : m;
                    yearMonthArr.unshift(data.getFullYear() + "-" + (m))
                }
                yearMonthArr
                res.data.forEach((item,index) =>{
                    if(index>0&index<8)
                    spotSolveArr.unshift(item.spotSolve)
                    replyYouArr.unshift(item.replyYou)
                    waitReplyArr.unshift(item.waitReply)
                })
                this.recordObj.option = {
                    title:{
                        text:'(人次)',
                        top:'12%',
                        left:'5%',
                        textStyle:{
                            color:'#a9b6b9',
                            fontSize:14,
                            fontWeight:100
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: "shadow",
                            label: {
                            }
                        },
                        extraCssText:'z-index:2',
                        formatter:function(params){
                        //    ${params[1].seriesName}：${params[1].value}人次 <br />
                        //    ${params[2].seriesName}：${params[2].value}人次 <br />
                            return `<span style="color:#00dfd8;">${params[0].axisValue}</span> <br />${params[0].seriesName}：${params[0].value}人次 <br />`
                        },
                        textStyle: {
                            color:'#d5ffff',
                            fontSize:18
                        }
                    },
                    legend: {
                        show:false,
                        data: ['当场解决', '事后回复', '无法答复'],
                        textStyle:{
                            color:'#FFF',
                            fontSize:16
                        },
                        itemWidth:16,
                        itemHeight:16,
                        top:'8%'
                    },
                    grid: {
                        top:'22%',
                        left: '3%',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data:yearMonthArr,
                        axisLine:{
                            lineStyle: {
                                color: '#02a3a6'
                            }
                        },
                        axisTick: {
                            show:false
                        },
                        axisLabel: {
                            fontSize: 16,
                            color:'rgba(255,255,255,.7)',
                            interval:0,  
                            // rotate:-20,
                            // margin:[15]
                        },
                    },
                    yAxis: {
                        nameTextStyle:{
                            color:'#FFF'
                        },
                        type: 'value',
                        axisLabel: {
                            fontSize: 16,
                            color:'rgba(255,255,255,.7)'
                        },
                        axisTick: {
                            show:false
                        },
                        axisLine:{
                            show:false,
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#02a3a6'],
                            }
                        },
                    },
                    series: [
                        {
                            name: '当场解决',
                            type: 'bar',
                            stack: '总量',
                            color:'#16a3c9',
                            data: spotSolveArr,
                            barWidth: 22,
                        },
                        {
                            name: '事后回复',
                            type: 'bar',
                            stack: '总量',
                            color:'#16cb5e',
                            data: replyYouArr,
                            barWidth: 22,
                        },
                        {
                            name: '无法答复',
                            type: 'bar',
                            stack: '总量',
                            color:'#cfc917',
                            data: waitReplyArr,
                            barWidth: 22,
                        },
                    ]
                }
            })

            //空中养老顾问
            getAdvisoryRecordAirData({
                areaCode: areaCode
            }).then(res =>{
                this.peopleType[0].num = res.data[0].play
                this.peopleType[1].num = res.data[0].follow
                this.peopleType[2].num = res.data[0].click
            })
        }
    },
    created() {
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
.pensionAdvisersPage{
    width: 900px;
    .baseTitle {
        a{
            font-size: 20px;
            border: 2px solid #01d3d5;
            padding: 5px 7px;
            margin-left: 15px;
            float: right;
            color: #01d3d5;
            cursor: pointer;
            text-decoration: none;
        }
    }
    .section-1 {
        display: flex;
        flex-direction: row;
        div {
            width: 50%;
            // padding-top: 15px;
        }
        margin-bottom: 20px;
    }
    .section-2 {
        // padding-top: 15px;
        .search-record {
            p:first-child{
                float: left;
            }
            p:nth-child(2){
                float: right;
                color: #00dfd8;
                font-size:20px;
                padding-top: 20px;
            }
        }
    }
    .yellowColor{
        color:#d4d400;
        font-family: 'regular';
    }
    .section-3 {
        margin-top: 35px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        .bottom-content {
            .institusBottom{
                display: flex;
                justify-content: space-between;
            }
            .institusBottomInfor{
                margin-top: 30px;
                text-align: center;
                position: relative;
                .yellowColor{
                    color:#d4d400;
                }
                .institusBgTop{
                    position: relative;
                    z-index: 10;
                }
                .bgGreen{
                    width:25px;height:3px;background: #01e1da;
                    display: inline-block;
                    margin:17px auto 14px;
                }
                .institusBg{
                    position: relative;
                    top:-12px
                }
            }
        }
    }
}
.bgColor{
    height:15px;
    background:#009dc6;
    width:540;
}
</style>
