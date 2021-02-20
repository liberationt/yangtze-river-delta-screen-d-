<!-- 护理人员大屏部分 -->
<template>
<div>
    <div class="NursingPeoplePage">
		<div class="baseTitle">养老人才队伍</div>
		<div class="section-1">
			<div class="nursingPerson subTitle">
				<p><span class="sanjiaoxing"></span>护理员</p>
				<div class="nursing-content">
					<div class="left mt22">
						<p>护理员总数</p>
						<!-- <p style="text-align:center;width:270px">{{peopleTotal.worker_total}}<span>人</span></p> -->
                        <p style="text-align:center;width:270px" class="numCount">
                            <span style="font-size:60px;"
                            class="numCX"
                            data-startVal="0"
                            :data-endVal="peopleTotal.worker_total"
                            data-speed="4"
                            data-decimals="0"
                            id="mumC4"
                            >0</span>
                            <span>人</span>
                        </p>
					</div>
				</div>
				<img class="huli-img" src="../../assets/huli.png" alt="">
			</div>
			<div class="censusCount  ml60">
				<p class="subTitle"><span class="sanjiaoxing"></span>户籍统计</p>
                <div class="displayFlexSpace nameSpace" @click="toSH"><img src="@/assets/icon1.png" alt=""> <span class="floatStyle">上海市养老服务后台</span></div>
				<!-- <div class="census-chart">
					<Chart  :option ="censusObj.option1" :height="censusObj.height" :width="censusObj.width"/>
				</div>
				<div class="census-chart">
					<Chart  :option ="censusObj.option2" :height="censusObj.height" :width="censusObj.width"/>
				</div> -->
                <div style="width:540px;">
                    <div class="displayFlexSpace" style="width:540px">
                        <p class="mb15 mt20 font22">本市户籍</p>
                        <div style="color:#d4d400">
                            <span class="font30">{{censusData.ThisCity}}</span>
                            <span class="font18">%</span>
                        </div>
                    </div>
                    <div style="height:13px;background:#063f2e;width:540px">
                        <div :style="{height:'13px',background:'#00c443',width:censusData.ThisCity+'%'}"></div>
                    </div>
                </div>
                <div style="width:540px;" class="mt20">
                    <div class="displayFlexSpace" style="width:540px">
                        <p class="mb15 mt20 font22">非本市户籍</p>
                        <div style="color:#d4d400">
                            <span class="font30">{{censusData.nonCity}}</span>
                            <span class="font18">%</span>
                        </div>
                    </div>
                    <div style="height:13px;background:#063f2e;width:540px">
                        <div :style="{height:'13px',background:'#00c443',width:censusData.nonCity+'%'}"></div>
                    </div>
                </div>
			</div>
		</div>
		<div class="section-2">
			<div class="obtainAgeLimit subTitle">
				<p><span class="sanjiaoxing"></span>从业年限</p>
			</div>
			<div class="obtainAgeLimit-chart">
				<Chart :autoPlay="obtainObj.autoPlay" :option ="obtainObj.option" :height ="obtainObj.height" :width ="obtainObj.width"></Chart>
			</div>
		</div>
		<div class="section-3">
			<!-- <div class="subTitle">
				<p><span class="sanjiaoxing"></span>医养结合<span class="subtextInfor">（2019年末）</span></p>
			</div> -->
            <div class="subTitle yearInfor mb20"><span class="sanjiaoxing"></span>医养结合<span class="positionInfors">2019年末</span></div>
			<div class="yiYang">
				<div class="yiYang-contentDiv" v-for="item in medicalCareData" :key="item.id">
					<p>{{item.name}}</p>
					<p class="unit"><span class="number">{{item.num}}</span><span>家</span></p>
				</div>
			</div>
		</div>
    </div>
    <div>
        <div class="ifameCon" v-if="isShow">
        <div class="fzboxContent" v-if="showCN">
            <div class="contents" style="width:1920px;">
            <iframe :src="src" style="width:1920px;height:1080px;margin:0 auto;border:none"></iframe>
            </div>
            <div class="closeShow" @click="closeShow"><img src="@/assets/close.png" alt=""></div>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import Chart from "@/components/Chart";
import {areaCode} from "../../api/areaCode1";
import {
    getTotalStatistics,
    getCensusStatistics,
    getMedicalCare,
    getMedicalCare1,
    getMedicalCare2,
    getObtainYearsData
} from "@/api/page";

export default {
	components: {
		Chart
	},
    name:'NursingPeople',
    data(){
        return{
            isShow:false,
            showCN:false,
            src:'',
			censusObj: {
				height:'200px',
				width: '200px',
				option1:{},
				option2:{}
			},
			obtainObj: {
				height: '350px',
				width: '100%',
				option: {},
				data:'',
                autoPlay:true
			},
            //护理员合计
            peopleTotal:{
                institutional_care_worker:null,
                nursingStationCareWorker:null,
                community_care_worker:null,
                worker_total:null
			},
			//户籍统计
			censusData:{
			    ThisCity:null,
				nonCity:null
			},
			//医养结合数据
            medicalCareData:[],
			//从业年限数据
			obtainData:{}
        }
    },
	methods:{
        closeShow(){
            this.isShow = false
            this.showCN =false
        },
        toSH(){
            // this.isShow = true
            // this.showCN =true
            // this.src="http://ylgl.shweilao.cn"
            window.open('http://ylgl.shweilao.cn', '_blank',"width=1920,height=1080,left=4800,menubar=no,toolbar=no,status=no,scrollbars=yes");
        },
        getIsMove(){
            $(function () {
                var countCXArr = [];
                var countCX = function () {
                $(".numCount").each(function (i, dom) {
                    if (countCXArr[i] && countCXArr[i] === true) {
                    return;
                    }
                    var sT;
                    var ncTop;
                    sT = $(window).scrollTop();
                    ncTop = $(dom).offset().top;
                    var id, decimals, startVal, endVal, duration;
                    if (sT > ncTop - $(window).height() && sT < ncTop) {
                    $(dom)
                        .find(".numCX")
                        .each(function () {
                        id = $(this).attr("id");
                        (decimals = $(this).attr("data-decimals")),
                            (startVal = $(this).attr("data-startVal")),
                            (endVal = $(this).attr("data-endVal")),
                            (duration = $(this).attr("data-speed"));
                        new CountUp(id, startVal, endVal, decimals, duration, {
                            useEasing: true, //效果
                            separator: "", //数字分隔符
                        }).start(); // target：目标元素id, startVal：你想要开始的值, endVal：你想要到达的值, decimals：小数位数，默认值为0, duration：动画持续时间为秒，默认值为2, options：选项的可选对象
                        countCXArr[i] = true;
                        });
                    }
                });
                };
                countCX();
            });
        },
	    getData(){
	        //护理员工作者合计
            getTotalStatistics({ areaCode: areaCode }).then((res)=>{
                if(res.code == 0) {
                    this.peopleTotal = res.data
                    this.getIsMove()
                }
            })
            //户籍统计
            getCensusStatistics({ areaCode: areaCode }).then((res)=>{
                if(res.code == 0) {
                    this.censusData = res.data
					//处理charts数据
					let thisCity = this.censusData.ThisCity,
						nonCity = this.censusData.nonCity,
						thisCityRatio = (thisCity/(thisCity + nonCity).toFixed(3)) * 100 + '%',
						nonCityRation = (nonCity/(thisCity + nonCity).toFixed(3)) * 100 + '%'
					this.censusObj.option1 = {
                        title:[{
                            text:'本市',
                            x:'center',
                            top:'52%',
                            textStyle: {
                                color:'#d5ffff',
                                fontSize:16,
                            },
                        },{
                            text:thisCityRatio,
                            x:'center',
                            top:'38%',
                            fontSize:'24px',
                            fontFamily:'regular',
                            textStyle: {
                                color:'#bfbd11',
                            }
                        }],
                        series: [
                            {
                                name: '',
                                type: 'pie',
                                startAngle: 90,
                                silent: true,
                                radius: ['66%', '68%'],
                                hoverAnimation: false,
                                center: ['50%', '50%'],
                                itemStyle: {
                                    normal: {
                                        labelLine: {
                                            show: false
                                        },
                                        color: '#66ccff',
                                        shadowBlur: 10,
                                    }
                                },
                                data: [{
                                    value: thisCity + nonCity,
                                }]
                            },
                            {
                                name: '',
                                type: 'pie',
                                radius: ['55%', '63%'],
                                hoverAnimation: false,
                                startAngle: -70,
                                center: ['50%', '50%'],
                                silent: true,
                                itemStyle: {
                                    normal: {
                                        labelLine: {
                                            show: false
                                        },
                                        shadowBlur: 10,
                                    }
                                },
                                data: [{
                                    value: thisCity,
                                    name: "",
                                    itemStyle: {
                                        normal: {
                                            color: { // 完成的圆环的颜色
                                                colorStops: [{
                                                    offset: 0,
                                                    color: 'yellow' // 0% 处的颜色
                                                }, {
                                                    offset: 1,
                                                    color: 'olive' // 100% 处的颜色
                                                }]
                                            },
                                        }
                                    }
                                },{
                                    value:nonCity,
                                    name: "",
                                    label: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: "#051e25"
                                        }
                                    }
                                }]
                            },
                            {
                                name: '',
                                type: 'pie',
                                startAngle: 90,
                                silent: true,
                                radius: ['47%', '49%'],
                                hoverAnimation: false,
                                center: ['50%', '50%'],
                                itemStyle: {
                                    normal: {
                                        labelLine: {
                                            show: false
                                        },
                                        color: '#bfbd11',
                                        shadowBlur: 10,
                                    }
                                },
                                data: [{
                                    value: thisCity + nonCity,
                                }]
                            },
                        ]
					}
                    this.censusObj.option2 = {
                        title:[{
                            text:'非本市',
                            x:'center',
                            top:'52%',
                            textStyle: {
                                color:'#d5ffff',
                                fontSize:16,
                            },
                        },{
                            text:nonCityRation,
                            x:'center',
                            top:'38%',
                            fontSize:'24',
                            textStyle: {
                                color:'#bfbd11',
                            }
                        }],
                        series: [
                            {
                                name: '',
                                type: 'pie',
                                startAngle: 90,
                                silent: true,
                                radius: ['66%', '68%'],
                                hoverAnimation: false,
                                center: ['50%', '50%'],
                                itemStyle: {
                                    normal: {
                                        labelLine: {
                                            show: false
                                        },
                                        color: '#66ccff',
                                        shadowBlur: 10,
                                    }
                                },
                                data: [{
                                    value: thisCity + nonCity,
                                }]
                            },
                            {
                                name: '',
                                type: 'pie',
                                radius: ['55%', '63%'],
                                hoverAnimation: false,
                                startAngle: -70,
                                center: ['50%', '50%'],
                                silent: true,
                                itemStyle: {
                                    normal: {
                                        labelLine: {
                                            show: false
                                        },
                                        shadowBlur: 10,
                                    }
                                },
                                data: [{
                                    value: nonCity,
                                    name: "",
                                    itemStyle: {
                                        normal: {
                                            color: { // 完成的圆环的颜色
                                                colorStops: [{
                                                    offset: 0,
                                                    color: 'yellow' // 0% 处的颜色
                                                }, {
                                                    offset: 1,
                                                    color: 'olive' // 100% 处的颜色
                                                }]
                                            },
                                        }
                                    }
                                },{
                                    value:nonCity,
                                    name: "",
                                    label: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: "#051e25"
                                        }
                                    }
                                }]
                            },
                            {
                                name: '',
                                type: 'pie',
                                startAngle: 90,
                                silent: true,
                                radius: ['47%', '49%'],
                                hoverAnimation: false,
                                center: ['50%', '50%'],
                                itemStyle: {
                                    normal: {
                                        labelLine: {
                                            show: false
                                        },
                                        color: 'olive',
                                        shadowBlur: 10,
                                    }
                                },
                                data: [{
                                    value: thisCity + nonCity,
                                }]
                            },
                        ]
                    }
                }
            })
            getMedicalCare1({
                areaCode: areaCode,
                serviceKey: 'yljg_jbfw_yi_nsyljg'
            }).then(res => {
                this.dealMedicalCarData(res.data)
			})
            getMedicalCare1({
                areaCode: areaCode,
                serviceKey: 'yljg_jbfw_yi_yyjhqk_yyljgqy'
            }).then(res => {
                this.dealMedicalCarData(res.data)
            })
            //医养结合数据
            getMedicalCare({
				areaCode: areaCode,
                type:["included,nursing_station,elderly_medical"]
            }).then((res)=>{
                if(res.code == 0) {
					this.dealMedicalCarData(res.data)
                }
            })
			// getMedicalCare2({
			// 	areaCode: areaCode,
			// 	orgType: '1010'
			// }).then(res =>{
			//    res.data = {
            //        old_yljg:res.data
			//    }
			//     this.dealMedicalCarData(res.data)
			// })
            //从业年限数据
            getObtainYearsData({ areaCode: areaCode }).then((res)=>{
                if(res.code == 0) {
                    this.obtainData = res.data
					let dataArr =[], yearArr=[],quarterArr=[],yearDataArr =[]
					Object.keys(res.data).forEach(key =>{
                        yearArr.push(key+'年')
						let yearData = null
						Object.keys(res.data[key]).forEach(item =>{
                            quarterArr.push(item)
							yearData += res.data[key][item]
                            dataArr.push(res.data[key][item])
						})
						yearDataArr.push(yearData)
					})
					//数据转换
					this.obtainObj.option = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            },
                            confine:true,
                            extraCssText:'z-index:2',
                            formatter:function(params){
                                return `<span style="color:#00dfd8;">${params[0].name}</span> <br /> ${params[0].value}人 <br />`
                            },
                            textStyle: {
                                color:'#d5ffff',
                                fontSize:18
                            }
                            // formatter:'{b}:<br />●{c}人',
                        },
                        grid: {
                            left: '7%',
                            right: '4%',
                            bottom: '8%',
                            containLabel: false
                        },
                        xAxis: [
                            {
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
                                    color: "rgba(255,255,255,.7)",
								},
								data:yearArr
							},
                            {
                                show:false,
                                axisPointer:{
                                    type:'none'
                                },
                                axisLine:{
                                    lineStyle: {
                                        color: '#02a3a6'
                                    }
                                },
                                axisTick: {
                                    show:false
                                },
                                axisLabel: {
                                    color:'#FFF'
                                },
                                data:quarterArr
                            },
						],
                        yAxis: [
                            {
                                min:Math.min.apply(null,dataArr),
                                max:Math.max.apply(null,dataArr) + 500,
                                name:'(人)',
                                nameTextStyle:{
                                    color:'#a9b6b9'
                                },
                                axisLabel: {
                                    fontSize: 16,
                                    color: "rgba(255,255,255,.7)",
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
                            }
						],
                        series: [
                            {
                                type: 'scatter',
								xAxisIndex:1,
                                data: dataArr,
                                symbolSize:function(data) {
                                    return data/30
                                },
                                itemStyle: {
                                    color:'#66ccff'
                                },
                                z:1
                            },
                            {
                                type:'bar',
								data:yearDataArr,
								xAxisIndex:0,
                                label: {
                                    show: false,
                                    position: 'insideTopLeft',
                                    color:'#05faf2',
                                    fontSize:'14',
                                },
                                itemStyle:{
                                    opacity: 0,
                                    color:'#041720',
                                    borderColor:'#084d5f',
                                    borderWidth: 3,
                                },
                                barWidth:'70',
                                z:2
                            }
                        ]
					}
                }
            })
		},
        //医养结合数据处理
        dealMedicalCarData(data){
            //处理数据
            Object.keys(data).forEach((key)=>{
                let obj = {
                    name :'',
                    num:null
                }
                if(key === 'included') {
                    obj.name = '纳入医保联网结算机构'
                }else if(key === 'nursing_station'){
                    obj.name = '护理站'
                }else if(key === 'elderly_medical'){
                    obj.name = '老年医疗机构'
                }else if(key === 'yljg_jbfw_yi_nsyljg'){
                    obj.name = '内设医疗机构'
                }else if(key === 'yljg_jbfw_yi_yyjhqk_yyljgqy'){
                    obj.name = '与医疗机构签约'
                }
                // else if(key === 'old_yljg'){
                //     obj.name = '养老机构总数'
                // }
                obj.num = data[key]
                this.medicalCareData.push(obj)
            })
        }
	},
	mounted() {
        this.getData();
        setInterval(()=>{
            this.getIsMove()
        },60000)
    }
}
</script>
<style lang="scss" scoped>
    .yearInfor{
        position: relative;
    }
    .positionInfors{
    background:url("../../assets/jb2.png");
    width:70px;
    height:24px;
    top:-5px;
    display: inline-block;line-height: 24px;
    text-align: center;
    position: absolute;
    background-size:100% 100%;background-repeat: no-repeat;font-size: 12px;
  }
</style>
<style lang="scss" scoped>
.NursingPeoplePage{
    width: 900px;
	.section-1 {
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-bottom: 20px;
		// div{
		// 	width: 50%;
		// }
		.nursingPerson {
			.nursing-content {
				width: 100%;
				// margin-top: 30px;
				padding-right: 30px;
				display: flex;
				flex-direction: row;
				.left {
					width: 45%;
                    font-size: 48px;
                    font-weight: normal;
                    font-family: 'regular';
					color:#bfbd11;
					// border-right: 1px solid #02a3a6;
					p:nth-of-type(1) {
						font-size: 24px;
						color:#daffff;
                        margin-bottom: 25px;
					}
					span {
						font-size: 22px
					}
				}
				.right {
					width:  60%;
					font-size: 18px;
					padding-left: 30px;
					p {
						padding: 8px 0;
					}
					.number {
                        color: #00dfd8;
                        font-family: 'regular';
                        font-size:20px;
					}
				}
			}
			.huli-img {
				margin-top: 10px;
				width: 270px;
			}
		}
		.censusCount {
            width:540px;
            position: relative;
			.census-chart {
				float: left;
            }
            .nameSpace{
                position: absolute;
                right:0;top:0;
                width:230px;
            }
		}
	}
	.section-3 {
		width: 100%;
		margin-top: 35px;
		.yiYang {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-top: 18px;
			div {
				width: 45%;
				border-bottom: 4px solid  #00dfd8;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 10px 0 5px 0;
				margin-bottom: 16px;
                font-size: 20px;
            }
            .unit{
                color:#1cefe9;
            }
            .number{
                font-family: regular;
                font-size:30px;
            }
		}
	}
}
</style>
