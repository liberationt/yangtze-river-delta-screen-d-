<template>
<div>
  <div class="shortWidth">
    <div class="baseTitle titleOne"><img src="@/assets/logo1.png" alt=""></div>
      <div class="displayFlexSpace">
        <div class="subTitle yearInfor mb20"><span class="sanjiaoxing"></span>老年人口<span class="positionInfor">2019年末</span></div>
        <!-- <div class="displayFlex">
          <div class='displayFlexSpace mr10' @click="toCN"><img src="@/assets/icon1.png" alt=""><span class="floatStyle ml5">长宁养老平台</span></div>
          <div class="displayFlexSpace" @click="toMH"><img src="@/assets/icon1.png" alt=""> <span class="floatStyle ml5">闵行养老平台</span></div>
        </div> -->
      </div>
    <div class="household">
      <div class="displayFlex">
        <div class="halfWidth">
          <span class="font20">户籍人口</span>
          <span class="gradient font36">{{totalOne}}</span>
          <span class="yellowColor font16">万人</span>
        </div>
        <div class="halfWidth">
          <span class="font20">老年人口</span>
          <span class="gradient font36">{{totalTwo}}</span>
          <span class="yellowColor font16">万人</span>
        </div>
      </div>
      <div class="elderNumbr">
        <div class="heightInfor">
          <div class="displayFlexSpace">
            <span class="font16">65岁以上</span>
            <span class="yellowColor font16"><span class="font18">{{houseData[0].sum}}</span>万人</span>
          </div>
          <div class="heightBg">
            <div class="heightBgWidth" :style="{width:houseData[0].sum/totalOne*100+'%'}"></div>
          </div>
          <div class="perInfor">{{houseData[0].per}}%</div>
        </div>
        <div class="heightInfor">
          <div class="displayFlexSpace">
            <span class="font16">70岁以上</span>
            <span class="yellowColor font16"><span class="font18">{{houseData[1].sum}}</span>万人</span>
          </div>
          <div class="heightBg">
            <div class="heightBgWidth" :style="{width:houseData[1].sum/totalOne*100+'%'}"></div>
          </div>
          <div class="perInfor">{{houseData[1].per}}%</div>
        </div>
        <div class="heightInfor">
          <div class="displayFlexSpace">
            <span class="font16">80岁以上</span>
            <span class="yellowColor font16"><span class="font18">{{houseData[2].sum}}</span>万人</span>
          </div>
          <div class="heightBg">
            <div class="heightBgWidth" :style="{width:houseData[2].sum/totalOne*100+'%'}"></div>
          </div>
          <div class="perInfor">{{houseData[2].per}}%</div>
        </div>
        <div class="heightInfor">
          <div class="displayFlexSpace">
            <span class="font16">100岁以上</span>
            <span class="font16">每10万人拥有<span class="font18 yellowColor ">{{houseData[3].sum}}</span>人</span>
          </div>
          <div class="heightBg">
            <div class="heightBgWidth" :style="{width:houseData[3].per/totalOne/100+'%'}"></div>
          </div>
          <div class="perInfor">{{houseData[3].per}}人</div>
        </div>
      </div>
      <!-- <div class="householdLeft">
        <div class="displayFlex">
          <div class="chartsPosition mr20">
            <Chart :option="houseOneOptions" :height="height" :width="width" />
            <div class="chartsContent yellowColor">
                <div>
                    <span class="font30">{{ houseData[0].per }}</span>
                    <span>%</span>
                </div>
                <div class="fontHeight mt6 mb6">
                    <span class="xtHeight"></span>
                </div>
                <div>
                    <span class="font30">{{houseData[0].sum}}</span>
                    <span>万人</span>
                </div>
            </div>
          </div>
          <div class="chartsPosition">
            <Chart :option="houseTwoOptions" :height="height" :width="width" />
            <div class="chartsContent yellowColor">
                <div>
                    <span class="font30">{{ houseData[1].per }}</span>
                    <span>%</span>
                </div>
                <div class="fontHeight mt6 mb6">
                    <span class="xtHeight"></span>
                </div>
                <div>
                    <span class="font30">{{houseData[1].sum}}</span>
                    <span>万人</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="householdRight">
        <div class="displayFlex">
          <div class="chartsPosition mr20">
            <Chart :option="LongTimeOneOptions" :height="height" :width="width" />
            <div class="chartsContent yellowColor">
                <div>
                    <span class="font30">{{ LongTimeData[0].per }}</span>
                    <span>%</span>
                </div>
                <div class="fontHeight mt6 mb6">
                    <span class="xtHeight"></span>
                </div>
                <div>
                    <span class="font30">{{LongTimeData[0].sum}}</span>
                    <span>万人</span>
                </div>
            </div>
          </div>
          <div class="chartsPosition">
            <Chart :option="LongTimeTwoOptions" :height="height" :width="width" />
            <div class="chartsContent yellowColor">
                <div>
                    <span class="font30">{{ LongTimeData[1].per }}</span>
                    <span>%</span>
                </div>
                <div class="fontHeight mt6 mb6">
                    <span class="xtHeight"></span>
                </div>
                <div>
                    <span class="font30">{{LongTimeData[1].sum}}</span>
                    <span>万人</span>
                </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div>
      <seamlessScroll :dataOption="dataList" type="1" />
    </div>
    <div class="elderBottom">
      <div class="elderLeft">
        <div class="subTitle"><span class="sanjiaoxing"></span>居住状态</div>
        <div class="elderLive">
          <div class="elderLeftBg"></div>
          <div class="elderLabel">
            <div class="textAlign mb12">
              <span class="blueColor"
                ><span class="font26">{{ liveStatus.lonely }}</span
                >万人</span
              >
              <p>孤老</p>
            </div>
            <div class="textAlign mb10">
              <span class="greenColor"
                ><span class="font26">{{ liveStatus.alone }}</span
                >万人</span
              >
              <p>独居</p>
            </div>
            <div class="textAlign">
              <span class="yellowColor"
                ><span class="font26">{{ liveStatus.older }}</span
                >万人</span
              >
              <p>纯老</p>
            </div>
          </div>
        </div>
        <div class="policyInfor">
          <div>
            <Chart :option="badOneOption" :width="badWidth" :height="badHeight"/>
          </div>
          <div class="policNumber">
            <div class="mb10">
              <span class="font30">{{ coverage.per }}</span
              ><span>%</span>
            </div>
            <div class="xt"><span class="xtWidth" :style="{width:coverage.per+'%'}"></span></div>
            <div class="mt10 mb20">
              <span class="font30">{{ coverage.count }}</span
              ><span>万人</span>
            </div>
          </div>
          
          <!-- <div class="font22" style="color:#fff">政策覆盖</div>  -->
        </div>
      </div>
      <div class="elderRight">
        <div class="subTitle"><span class="sanjiaoxing"></span>上海户籍老人增长趋势</div>
        
        <div>
          <Chart
            :option="increaseOptions"
            :height="increaseHeight"
            :width="increaseWidth"
            :autoPlay="autoPlay"
          />
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="ifameCon" v-if="isShow">
      <div class="boxContent" v-if="showCN">
        <div class="contents" style="width: 3850px;">
          <iframe :src="src" style="width:3850px;height:2160px;margin:0 auto;border:none"></iframe>
        </div>
        <div class="closeShow" @click="closeShow"><img src="@/assets/close.png" alt=""></div>
      </div>

      <div v-if="showMH">
        <div class="mhboxContent" v-if="showMH">
          <div class="contents" style="width: 4710px;">
            <iframe :src="src" style="width:4700px;height:1566px;margin:0 auto;border:none"></iframe>
          </div>
          <div class="closeShows" @click="closeShow"><img src="@/assets/close.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import Chart from "@/components/Chart";
import seamlessScroll from "@/components/seamlessScroll";
import {
  getHousehold,
  getLongTime,
  getPersonNews,
  getPersonLiveStatus,
  getElderlyGraph,
  getPolicyCoverage
} from "@/api/page";
import { areaCode } from "@/api/areaCode";
export default {
  components: { seamlessScroll, Chart },
  data() {
    return {
      isShow:false,
      showCN:false,
      showMH:false,
      increaseOptions: {},
      increaseHeight: "470px",
      increaseWidth: "600px",
      height: "280px",
      width: "200px",
      badWidth:'273px',
      badHeight:'250px',
      autoPlay:true,
      badOneOption:{},
      houseOneOptions: {},
      LongTimeOneOptions:{},
      LongTimeTwoOptions:{},
      houseData:[
          {
              sum:'',
              per:''
          },
          {
              sum:'',
              per:''
          },
          {
              sum:'',
              per:''
          },
          {
              sum:'',
              per:''
          },
      ],
      totalOne:'',
      totalTwo:'',
      LongTimeData:[
          {
              sum:'',
              per:''
          },
          {
              sum:'',
              per:''
          }
      ],
      houseTwoOptions: {},
      houseTwoData:[],
      dataList: [],
      liveStatus: {},
      coverage: {}
    };
  },
  methods: {
    toMH(){
      this.isShow = true
      this.showMH =true
      this.src=`http://mhq.ucanyun.com/?accessToken=${localStorage.getItem("accessToken")}&dataType=prod`
    },
    toCN(){
       window.open('http://dashboard.962347.com.cn:8961/', '_blank',"width=3850,height=2160,left=3835,menubar=no,toolbar=no,status=no,scrollbars=yes");
      // this.isShow = true
      // this.showCN =true
      // this.src="http://dashboard.962347.com.cn:8961/"
    },
    closeShow(){
      this.isShow = false
      this.showMH =false
      this.showCN =false
    },
    getData() {
      const params = {
        areaCode: areaCode,
        type: 0,
        year: "2019"
      };
      //户籍人口统计
      getHousehold(params).then(res => {
        if (res.code == 0) {
          this.totalOne = res.totalOne
          this.totalTwo = res.totalTwo
          this.houseData = res.data
        }
      });
      //常住人口统计
      // const form = {
      //   areaCode: areaCode,
      //   type: 1,
      //   year: "2019"
      // };
      // getLongTime(form).then(res => {
      //   if (res.code == 0) {
      //     this.LongTimeData = res.data
      //     let data1 = res.data[0].per
      //     let data2 = res.data[0].per
      //     this.LongTimeOneOptions = {
      //       title:{
      //           text:'70岁以上',
      //           textStyle: {
      //               fontWeight: 'normal',
      //               color: '#d5ffff',
      //               fontSize: '20',
      //           },
      //           left:'26%',
      //           top:'85%',
      //       },
      //       color:"#043b40",
      //        grid: {
      //         left: "0%",
      //         top: "0%",
      //       },
      //       series: [
      //         {
      //           type: "pie",
      //           clockWise: true,
      //           radius: ["80%", "95%"],
      //           center:['50%','44%'],
      //           itemStyle: {
      //             normal: {
      //               label: {
      //                 show: false
      //               },
      //               labelLine: {
      //                 show: false
      //               }
      //             }
      //           },
      //           hoverAnimation: false,
      //           data: [
      //             {
      //               value:data1,
      //               name: "",
      //               itemStyle: {
      //                 normal: {
      //                   color:'#44b954',
      //                   label: {
      //                     show: false
      //                   },
      //                   labelLine: {
      //                     show: false
      //                   }
      //                 }
      //               }
      //             },
      //             {
      //               name: "",
      //               value: 100 - data1
      //             }
      //           ]
      //         }
      //       ]
      //     };
      //     this.LongTimeTwoOptions = {
      //       title:{
      //           text:'80岁以上',
      //           textStyle: {
      //               fontWeight: 'normal',
      //               color: '#d5ffff',
      //               fontSize: '20',
      //           },
      //           left:'26%',
      //           top:'85%',
      //       },
      //       color:"#043b40",
      //        grid: {
      //         left: "0%",
      //         top: "0%",
      //       },
      //       series: [
      //         {
      //           type: "pie",
      //           clockWise: true,
      //           radius: ["80%", "95%"],
      //           center:['50%','44%'],
      //           itemStyle: {
      //             normal: {
      //               label: {
      //                 show: false
      //               },
      //               labelLine: {
      //                 show: false
      //               }
      //             }
      //           },
      //           hoverAnimation: false,
      //           data: [
      //             {
      //               value:data1,
      //               name: "",
      //               itemStyle: {
      //                 normal: {
      //                   color:'#44b954',
      //                   label: {
      //                     show: false
      //                   },
      //                   labelLine: {
      //                     show: false
      //                   }
      //                 }
      //               }
      //             },
      //             {
      //               name: "",
      //               value: 100 - data1
      //             }
      //           ]
      //         }
      //       ]
      //     };
      //   }
      // });
      //动态数据
      getPersonNews({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.dataList = res.data;
        }
      });
      //居住状态
      getPersonLiveStatus({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.liveStatus = res.data;
        }
      });
      //增长趋势
      getElderlyGraph({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          let xAxisData = [];
          let seriesData1 = [];
          let seriesData2 = [];
          res.data.forEach(item => {
            xAxisData.push(item.year);
            seriesData1.push(item.count);
            seriesData2.push(item.per);
          });
          this.increaseOptions = {
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
                label: {
                  // show: true,
                }
              },
              extraCssText:'z-index:2',
              formatter:function(params){
                return `<span style="color:#00dfd8;">${params[0].name}</span> <br /> <span style="color:#009ec8">${params[0].value}万人 </span><br /><span style="color:#00d354">${params[1].value}% </span>`
              },
              textStyle: {
                color:'#d5ffff',
                fontSize:16,
              }
            },
            title: [
              {
                left: "5%",
                top: "2%",
                subtext: "(万人)",
                subtextStyle: {
                  color: "#a9b6b9"
                }
              },
              {
                right: "5%",
                top: "2%",
                subtext: "(%)",
                subtextStyle: {
                  color: "#a9b6b9"
                }
              }
            ],
            grid: {
              left: "6%",
              right: "6%",
              top: "10%",
              bottom: "5%"
            },
            xAxis: [
              {
                type: "category",
                axisLine: {
                  lineStyle: {
                    color: "#65C6E7"
                  }
                },
                axisLabel: {
                  fontSize: 16,
                  color:'rgba(255,255,255,.7)'
                },
                data: xAxisData
              }
            ],
            yAxis: [
              {
                type: "value",
                min: 100,
                // splitNumber:5,
                splitLine: {
                  lineStyle: {
                    color: "#65C6E7"
                  }
                },
                // splitNumber: 10,
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  fontSize: 16,
                  color: "rgba(255,255,255,.7)",
                }
              },
              {
                type: "value",
                min:20,
                max: 100,
                splitNumber:4,
                splitLine: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  fontSize: 14,
                  color: "#b5bfc1"
                }
              }
            ],
            series: [
              {
                z: 1,
                type: "bar",
                barGap: 0,
                barWidth: 16,
                data: seriesData1,
                itemStyle: {
                  normal: {
                    color: "#009ec8"
                  }
                }
              },
              {
                type: "line",
                yAxisIndex: 1,
                symbol: "circle",
                itemStyle: {
                  color: "#00d354"
                },
                lineStyle: {
                  color: "#00d354",
                  width: 3
                },
                data: seriesData2
              }
            ]
          };
        }
      });
      //政策覆盖
      getPolicyCoverage({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.coverage = res.data;
          this.badOneOption = {
            title: [
              {
                text: '政策覆盖',
                x: "33%",
                y: "80%",
                textStyle: {
                  fontSize: 20,
                  color: "#deffff"
                }
              },
            ],
            // x轴
            xAxis: {
              show: false // 不显示
            },
            // y轴
            yAxis: {
              show: false // 不显示
            },
            grid: {
              top: "0%",
              right: "40",
              bottom: "2.5%",
              left: 0
            },
            series: [
              {
                cursor: "default",
                type: "liquidFill",
                radius: "70%", // 半径大小
                center: ["50%", "38%"], // 布局位置
                // data:[usePro,usePro,usePro], // 水球波纹值
                data: [0.64, 0.64, 0.64],
                backgroundStyle: {
                  color: {
                    type: "linear",
                    colorStops: [
                      {
                        offset: 1,
                        color: "#051e25"
                      }
                    ],
                    globalCoord: false
                  }
                },
                outline: {
                  // 轮廓设置
                  show: true,
                  borderDistance: 2, // 轮廓间距
                  itemStyle: {
                    borderColor: "#009cb2", // 轮廓颜色
                    borderWidth: 2, // 轮廓大小
                    shadowBlur: "none" // 轮廓阴影
                  }
                },
                color: [
                  {
                    colorStops: [
                      {
                        offset: 1,
                        color: "rgba(1, 122, 139, 1)"
                      },
                      {
                        offset: 0,
                        color: "rgba(4, 82, 105, 1)"
                      }
                    ],
                    globalCoord: false
                  }
                ],
                label: {
                  normal: {
                    show:false,
                    // formatter: '{c}',
                    color: "#fff", //波浪上文本颜色
                    insideColor: "#fff", //波浪内部字体颜色
                    fontSize: 30
                  }
                }
              }
            ]
          }
        }
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.yearInfor{
  position: relative;
}
  .positionInfor{
    width:70px;height:24px;background:url('../../assets/jb2.png');
    display: inline-block;line-height: 24px;
    text-align: center;
    top:-10px;
    position: absolute;
    background-size:100% 100%;background-repeat: no-repeat;font-size: 12px;
  }
  .elderNumbr{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .heightInfor{
    width:412px;
    margin-top: 30px;
  }
  .heightBg{
    margin: 8px 0;
    height:12px;
    background: #043b3e;
    .heightBgWidth{
      height:12px;width:30px;background: #00e0d8;
    }
  }
  .perInfor{
    font-size: 16px;color:#15f7e9;
    text-align: right;
  }
</style>
<style lang="scss" scoped>
.elderInfor {
  width: 900px;
  margin-right: 55px;
}
.household {
  height: 280px;
  .householdLeft {
    float: left;
    width: 50%;
  }
  .householdRight {
    width: 50%;
    float: left;
  }
  .householdTitle {
    font-size: 20px;
    font-weight: 500;
  }
  .chartsPosition{
      position: relative;
      .chartsContent{
          text-align: center;
          position: absolute;
          left: 20%;
          top:30%;
          .fontHeight{
              width:125px;
              height:1px;
              background: #036267;
              .xtHeight{
                  display: block;
                  height:3px;
                  width:20px;
                  background: #00dfd8;
                  position: relative;
                  top:-2px
              }
          }
      }
  }
}
.elderBottom {
  height: 500px;
  margin-top: 35px;
  .elderLeft {
    float: left;
    width: 270px;
    margin-right: 30px;
    .elderLive {
      position: relative;
      height: 195px;
      margin-top: 30px;
      font-size: 18px;
      color: #fff;
      .blueColor {
        color: #00c9ff;
      }
      .greenColor {
        color: #00d354;
      }
    
      .elderLabel {
        position: relative;
        z-index: 5;
      }
    }
    .policyInfor {
      margin-top: 20px;
      position: relative;
      text-align: center;
      color: #d4c716;
      .policNumber{
        position: absolute;
        top:20%;
        left:27%;
      }
      .xt {
        width: 103px;
        height: 1px;
        background: #457a60;
        margin: auto;
        .xtWidth {
          display: block;
          width: 20px;
          background: #d4c716;
          height: 3px;
          position: relative;
          top: -2px;
        }
      }
    }
    .elderLeftBg {
      background-image: url("../../assets/loudou.png");
      height: 180px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      top: 15px;
      position: absolute;
      width: 268px;
    }
  }
  .elderRight {
    float: left;
    width: 600px;
  }
  
}
.yellowColor {
    color: #d4d400;
    font-family: 'regular';
  }
</style>
