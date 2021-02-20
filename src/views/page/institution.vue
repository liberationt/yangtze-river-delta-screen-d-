<template>
  <div class="shortWidth">
    <div class="baseTitle">机构养老服务</div>
    <div class="institusTop">
      <div class="container">
        <!-- <div class="flip">
          <div class="institusTopCon">
            <div class="mr20"><img src="@/assets/jigou.png" /></div>
            <div>
              <div class="font22">机构数量</div>
              <div class="mt10 yellowColor">
                <span class="font30">{{ healthyCount }}</span>
                <span class="font18">家</span>
              </div>
            </div>
          </div>
        </div> -->
        <div>
          <div class="institusTopCon">
            <div class="mr20"><img src="@/assets/jigou.png" /></div>
            <div>
              <div class="font22">机构</div>
              <div class="mt10 yellowColor numCount gradient">
                <!-- <span class="font30">{{ healthyCount }}</span> -->
                <span
                class="numCX font30"
                data-startVal="0"
                :data-endVal="healthyCount"
                data-speed="4"
                data-decimals="0"
                id="mumC1"
                >0</span
              >
                <span class="font18">家</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="institusTopCon">
        <div class="mr20"><img src="@/assets/chuangwei.png" /></div>
        <div>
          <div class="font22">床位</div>
          <div class="mt10 yellowColor numCount gradient">
            <!-- <span class="font30">{{ bedCount }}</span> -->
            <span
                class="numCX font30"
                data-startVal="0"
                :data-endVal="bedCount"
                data-speed="4"
                data-decimals="0"
                id="mumC2"
                >0</span
              >
            <span class="font18">张</span>
          </div>
        </div>
      </div>
      <div class="institusTopCon">
        <div class="mr20"><img src="@/assets/ruzhu.png" /></div>
        <div>
          <div class="font22">入住</div>
          <div class="mt10 yellowColor numCount gradient">
            <!-- <span class="font30">{{ liveCount }}</span> -->
            <span
                class="numCX font30"
                data-startVal="0"
                :data-endVal="liveCount"
                data-speed="4"
                data-decimals="0"
                id="mumC3"
                >0</span
              >
            <span class="font18">人</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <seamlessScroll :dataOption="dataList" type="2" />
    </div>
    <div class="institusCen">
      <div class="floatLeft halfWidth">
        <div class="subTitle"><span class="sanjiaoxing"></span>运营方式统计</div>
        <div>
          <Chart :option="operateOptions" :height="height" :width="width" />
        </div>
      </div>
      <div class="floatLeft halfWidth">
        <div class="subTitle"><span class="sanjiaoxing"></span>入住老人年龄分布</div>
        <Chart :option="ageOptions" :height="height" :width="width" />
      </div>
    </div>
    <div style="height:170px;" class="mt5">
      <div class="displayFlexSpace" style="display:flex;width:100%;">
        <div class="subTitle"><span class="sanjiaoxing"></span>日常监测</div>
        <div><span class="font20">监测机构数</span><span class="font26 mr5 ml5 heightColor">{{number}}</span><span class="font16 heightColor">家</span></div>
      </div>
      <div class="mt20 mb50">
        <div class="displayFlex mb10">
          <div class="monitorInfor">
            <span class="font30">{{ gradeInfor.worse }}</span
            ><span class="font18">家</span>
          </div>
          <div class="monitorInfor">
            <span class="font30">{{ gradeInfor.general }}</span
            ><span class="font18">家</span>
          </div>
          <div class="monitorInfor">
            <span class="font30">{{ gradeInfor.good }}</span
            ><span class="font16">家</span>
          </div>
          <div class="monitorInfor">
            <span class="font30">{{ gradeInfor.excellent }}</span
            ><span class="font18">家</span>
          </div>
        </div>
        <div><img src="@/assets/gread.png" /></div>
      </div>
    </div>
    <div>
      <div class="subTitle"><span class="sanjiaoxing"></span>法人性质</div>
      <div class="institusBottom">
        <div
          class="institusBottomInfor"
          v-for="(item, i) in peopleType"
          :key="i"
        >
          <div class="institusBgTop">
            <div class="yellowColor">
              <span class="font30">{{ item.value }}</span>
              <span class="font18">家</span>
            </div>
            <span class="bgGreen"></span>
            <div class="font20" style="font-weight:500">{{ item.name }}</div>
          </div>
          <div class="institusBg">
            <img src="@/assets/fr_bg.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Chart from "@/components/Chart";
import echarts from "echarts"
import seamlessScroll from "@/components/seamlessScroll";
import { areaCode } from "@/api/areaCode1";
import {
  getHealthyCount,
  getBedCount,
  getLiveCount,
  getMechanismDynamic,
  getLegalPerson,
  getRatingStatistics,
  getAssortAge,
  getRegionalPension,
  getOperatingForms
} from "@/api/page";
export default {
  components: { seamlessScroll, Chart },
  data() {
    return {
      number:'',
      healthyCount: "", //机构数量
      bedCount: "", //床位数量
      liveCount: "", //入住
      peopleType: [
        
        {
          name: "事业单位",
          value: ""
        },
        {
          name: "民非",
          value: ""
        },
        {
          name: "企业",
          value: ""
        },
        // {
        //   name: "其他",
        //   value: ""
        // }
      ],
      gradeInfor: {
        excellent: "",
        general: "",
        good: "",
        worse: ""
      },
      operateOptions: {},
      ageOptions: {},
      width: "450px",
      height: "280px",
      dataList: []
    };
  },
  methods: {
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
    async getData() {
      // 机构数量
      await getHealthyCount({ areaCode: areaCode, orgType: "1010" }).then(res => {
        if (res.code == 0) {
          this.healthyCount = res.data.count;
        }
      });
      // 床位数量
      await getBedCount({ areaCode: areaCode, orgTypes: "1010" }).then(res => {
        if (res.code == 0) {
          this.bedCount = res.data.bedTotal;
        }
      });
      // 入住老人
      await getLiveCount({ areaCode: areaCode, orgType: "1010" }).then(res => {
        if (res.code == 0) {
          this.liveCount = res.data;
        }
      });
      this.getIsMove()
      //年龄分布
      getAssortAge({ areaCode: areaCode, orgType: "1010" }).then(res => {
        if (res.code == 0) {
            let legendData = []
            res.data.forEach(item=>{
                legendData.push({
                   name:item.key,
                   per:item.per,
                   value:item.value
                })
            })
          let i = 0;
          let colorList = [
            "#52c3c7",
            "#1b98c2",
            "#44b954",
            "#bfbd11",
            "#f01a4f",
            "#d58d2f"
          ];
          this.ageOptions = {
            title: {
              // subtext: "年龄分布",
              x: "15%",
              y: "42%",
              subtextStyle: {
                fontSize: 20,
                color: "#fff"
              }
            },
            tooltip: {
              // trigger: "item",
              //  formatter:function(params){
              //   return `${params.name}: ${params.value}人`
              // }
              formatter:function(params){
                return `<span style="color:#00dfd8">年龄分布</span><br /> ${params.data.name}：${params.value}人<br />`
              },
              textStyle:{
                fontSize:16
              }
            },
            legend: {
              show:false,
              type: "scroll",
              orient: "vertical",
              // selectedMode: false,
              top: "center",
              itemWidth: 16,
              itemHeight: 16,
              right: 10,
              data: legendData,
              formatter: function(name) {
                i++;
                let res = legendData.filter(v => v.name === name);
                res = res[0];
                return `{uname|${name}}{unum|${res.per}}`;
              },
              textStyle: {
                color: "#77899c",
                rich: {
                  uname: {
                    width: 115,
                    fontSize: 18,
                    color: "#d5ffff",
                    lineHeight: 30
                  },
                  unum: {
                    fontSize: 18,
                    color: "#d5ffff",
                    width: 60,
                    align: "right"
                  }
                }
              }
            },
            series: [
              {
                width: "450",
                height: "280",
                type: "pie",
                center: ["50%", "52%"],
                radius: ["40%", "65%"],
                // clockwise: false,
                // avoidLabelOverlap: true,
                hoverOffset: 1,
                itemStyle: {
                  normal: {
                    color: function(params) {
                      return colorList[params.dataIndex];
                    }
                  }
                },
                label: {
                  normal: {
                    show: true,
                    formatter: function(params, ticket, callback) {
                        // return '{white|' +  params.data.per + '}\n{hr|}\n{yellow|' +params.data.name + '}'
                        return '{white|' +params.data.value + '人}{white|' + "占" + params.data.per +'} \n{hr|}\n{nameColor|' +params.data.name + '}'
                    },
                    rich:{
                        yellow: {
                            color: "#ffc72b",
                            fontSize: 20,
                            padding: [5, 4],
                            align: 'center'
                        },
                        total: {
                            color: "#ffc72b",
                            fontSize: 20 ,
                            align: 'center'
                        },
                        white: {
                            color: "#fff",
                            align: 'center',
                            fontSize: 14 ,
                            padding: [5, 0]
                        },
                        nameColor: {
                          align: "center",
                          fontSize: 12,
                          color: "#00dfd8",
                          padding: [5, 0]
                        },
                        hr: {
                            borderColor: '#50689f',
                            width: '100%',
                            borderWidth: 1,
                            height: 0,
                        }
                    }
                  }
                },
                labelLine: {
                  normal: {
                    length: 20,
                    length2: 10,
                    smooth: true
                  }
                },
                data: legendData
              }
            ]
          };
        }
      });
      //动态数据
      getMechanismDynamic({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.dataList = res.data;
        }
      });
      //日常监测
      getRatingStatistics({ areaCode: areaCode, orgType: "1010" }).then(res => {
        if (res.code == 0) {
          this.gradeInfor = res.data;
          this.number = res.data.excellent+res.data.general+res.data.good+res.data.worse
        }
      });
      // 法人性质
      getLegalPerson({ areaCode: areaCode, orgType: "1010" }).then(res => {
        if (res.code == 0) {
          this.peopleType[2].value = res.data.corp_attr_ent;
          this.peopleType[1].value = res.data.corp_attr_private;
          this.peopleType[0].value = res.data.corp_attr_gov;
          // this.peopleType[3].value = res.data.corp_attr_other;
        }
      });
    },
    async getOperateOptions() {
        let seriesData1 = []
        let seriesData2 = []
        await getRegionalPension({areaCode:areaCode,orgType:'1010'}).then(res=>{
            if(res.code==0){
                for(const key in res.data){
                    seriesData1.push(res.data[key])
                }
            }
        })
        await getOperatingForms({areaCode:areaCode,orgType:'1010'}).then(res=>{
            if(res.code ==0){
                for(const key in res.data){
                    seriesData2.push(res.data[key])
                }
            }
        })
      this.operateOptions = {
        color: ['#3e6591', '#eb7d22', '#d73f45'],
                grid: {
                    left: '10%',
                    right:'15%',
                    top: "5%",
                    bottom:'20'
                },
                // legend: {
                //     data: ["养老机构", "长者照护之家"],
                //     top: "5%",
                //     right: '10',
                //     textStyle: {
                //         color: "rgba(250,250,250,0.6)",
                //         fontSize: 16
                //     },
                //     textStyle: {
                //         fontSize: 26,
                //         color: '#fff'
                //     }
                // },
                xAxis: {
                    show: false,
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                },
                yAxis: [{
                    axisTick: {
                        show: false,
                        alignWithLabel: false,
                        length: 5,
                    },
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#ffffff',
                            lineHeight:60
                        }
                    },
                    axisLabel:{
                      // normal:{
                      //   fontSize:30
                      // }
                      fontSize:18,
                      color:"#d5ffff"
                    },
                    splitLine: {
                        show: false
                    },
                    data: ['公建\n<br />公营', '公建\n<br /> 民营', '民建\n<br /> 民营']
                }],
                series: [{
                    type: 'bar',
                    color: '#00dfd8',
                    name: "长者照护之家",
                    data: seriesData2,
                    barWidth: 15,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {color: '#00dfd8',fontWeight:600,fontFamily:'regular',rich:{
                              unit:{
                                fontSize:'18'
                              }
                            }},
                            // formatter: '{c}家',
                            formatter:(params=>{
                              return `${params.value}{unit|家}`
                            }),
                            fontSize: 24
                        }
                    },
                    // itemStyle: {
                    //     normal: {
                    //         barBorderRadius: [0, 30, 30, 0],
                    //     }
                    // },
                }, {
                    type: 'bar',
                    name: "养老机构",
                    color: '#00dfd8',
                    barWidth: 15,
                    data: seriesData1,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {color: '#00dfd8',fontWeight:600,fontFamily:'regular',rich:{
                              unit:{
                                fontSize:'18'
                              }
                            }},
                            // formatter: '{c}家',
                            formatter:(params=>{
                              return `${params.value}{unit|人}`
                            }),
                            fontSize: 24
                        }
                    },
                    itemStyle: {
                        // normal: {
                        //     barBorderRadius: [0, 30, 30, 0],
                        // }
                    },
                }]
        // grid: {
        //   left: "10%",
        //   top: "5%",
        //   right: "0",
        //   bottom: "20"
        // },
        // xAxis: {
        //   show: false,
        //   splitLine: {
        //     show: false
        //   }
        // },
        // yAxis: [
        //   {
        //     show: false,
        //     inverse: true,
        //     splitLine: {
        //       show: false
        //     },
        //     axisTick: {
        //       show: false
        //     },
        //     axisLabel: {
        //       show: false
        //     },
        //     data: ['民建\n\n民营', '公建\n\n民营', '公建\n\n公营']
        //   }
        // ],
        // series: [
        //   {
        //     type: "bar",
        //     color: "#00dfd8",
        //     barWidth: 18,
        //     zlevel: 2,
        //     data: seriesData1,
        //     label: {
        //       normal: {
        //         show: true,
        //         position: "left",
        //         textStyle: { color: "#fff" },
        //         // formatter: function(params) {
        //         //   let dataList =['公建','公建','民建']
        //         //   return dataList[params.dataIndex]
        //         // },
        //         fontSize: 18
        //       }
        //     }
        //   },
        //   {
        //     type: "bar",
        //     color: "#00dfd8",
        //     barWidth: 18,
        //     zlevel: 1,
        //     data: seriesData2,
        //     // data:[8555,4221,2587,888],
        //     label: {
        //       normal: {
        //         show: true,
        //         position: "left",
        //         textStyle: { color: "#fff" },
        //         color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        //             offset: 0,
        //             color: 'rgb(57,89,255,1)'
        //         }, {
        //             offset: 1,
        //             color: 'rgb(46,200,207,1)'
        //         }]),
        //         // formatter: function(params) {
        //         //   let dataList =['公营','民营','民营']
        //         //   return dataList[params.dataIndex]
        //         // },
        //         fontSize: 18,
        //       }
        //     }
        //   }
        // ]
      };
    },
  },
  mounted() {
    this.getOperateOptions();
    this.getData();
    setInterval(()=>{
      this.getIsMove()
    },60000)
  }
};
</script>
<style scoped lang="scss">
.institusCen {
  height: 310px;
  margin-top: 40px;
}
.institusBottom {
  display: flex;
  justify-content: space-between;
}
.institusBottomInfor {
  margin-top: 50px;
  text-align: center;
  position: relative;
  .yellowColor {
    color: #d4d400;
    font-family: 'regular';
  }
  .institusBgTop {
    position: relative;
    z-index: 10;
  }
  .bgGreen {
    width: 25px;
    height: 3px;
    background: #01e1da;
    display: inline-block;
    margin: 17px auto 14px;
  }
  .institusBg {
    position: relative;
    top: -12px;
  }
}
.monitorInfor {
  width: 25%;
  text-align: center;
  color: #d4d400;
  letter-spacing: 2px;
  font-family: 'regular';
}
.container{perspective:1000;transform-style:preserve-3d;}
.container,.front,.back{width:258px;height:98px;}
.flip{position:relative;transition:1s;transform-style:preserve-3d;-webkit-animation: spin 5s linear infinite;
  animation: spin 5s linear infinite;}
// .front,.back{position:absolute;top: 0px;left: 0px;backface-visibility:hidden;display: flex;align-items: center;padding-left:27px}
// .front{z-index:2;}
// .back{transform:rotateY(-180deg);-webkit-animation: spin 5s linear infinite;
//   animation: spin 5s linear infinite;}
// .container:hover .flip{transform:rotateY(180deg);}
@keyframes spin {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
        transition: all 1s;
    }
}
</style>
