<template>
<div>

  <div class="shortWidth">
    <div class="baseTitle">专项养老服务</div>
    <div>
      <div class="displayFlexSpace">
        <div class="subTitle"><span class="sanjiaoxing"></span>老伙伴计划</div>
        <!-- <div class="nameSpace displayFlexSpace" @click="toYK"><img src="@/assets/yly.png" alt=""><span class="floatStyle ml5">市场化运营</span></div> -->
        <div class="nameSpace displayFlexSpace mr20" @click="toYK"><img src="@/assets/yly.png" alt=""></div>
      </div>
      <div class="displayFlex">
        <div class="halfWidth">
          <Chart :option="volunteerOptions" :height="height" :width="width" />
        </div>
        <div class="halfWidth">
          <Chart :option="serviceOptions" :height="height" :width="width" />
        </div>
      </div>
    </div>
    <div class="mb40">
      <div class="subTitle"><span class="sanjiaoxing"></span>老吾老计划</div>
      <div class="mt20">
        <seamlessScroll :dataOption="dataList" type="2" />
      </div>
    </div>
    <div class="displayFlex">
      <div class="serviceLeft">
        <div class="subTitle"><span class="sanjiaoxing"></span>银龄宝典</div>
        <div>
            <div class='serviceLeftTitle'>
                <span class="pr15">播出总集数</span>
                <span class="font24 blueColor">{{videoTotal}}</span>
                <span class='blueColor font14 pl3' style="line-height:30px;">集</span>
            </div>
            <div class="video">
                 <video :src="videoSrc" id="videoPlay" controls  class="video"></video> 
            </div>
            <div class="videoInfor">
                <div v-for="(item,i) in videoList" :class="index==i?'activeColor':''" :key="i" @click="changeTab(item,i)">{{item.name}}</div>
            </div>
        </div>
      </div>
      <div class="serviceRight">
        <!-- <div class="areaHome displayFlexSpace" @click="toSH"><img src="@/assets/icon1.png" alt=""><span class="floatStyle ml5">上海市养老服务平台</span></div> -->
        <!-- <div class="subTitle mb18"><span class="sanjiaoxing"></span>适老化改造</div> -->
         <div class="subTitle yearInfor mb10"><span class="sanjiaoxing"></span>适老化改造<span class="positionInfors">当年</span></div>
        <div class="serveNumberInfor">
          <div>
            <div class="subText">申请户数</div>
            <div class="displayFlex">
              <!-- <div
                v-for="(item, i) in String(
                  reformInfor.cumulativeNumberOfRenovatedHouseholds
                ).split('')"
                :key="i"
                class="numberList"
              >
                {{ item }}
              </div> -->
              <div v-for="(item,i) in reformInfor.cumulativeNumberOfRenovatedHouseholds" class="move-num" :key="i">
                  <div>
                      <div style="visibility:hidden;position: static;line-height:68px">
                          <span v-for="(list, i) in item.num" :key="i" class="num-move">{{list}}</span>
                      </div>
                      <a :class="[isMove === true ? 'move-an' : '']">
                          <span v-for="(list, i) in item.num" :key="i" class="num-move">{{list}}</span>
                      </a>
                  </div>
              </div>
              <span class="subTextStyle">户</span>
            </div>
          </div>
          <div>
            <div class="subText">已完成户数</div>
            <div class="displayFlex">
              <!-- <div
                v-for="(item, i) in reformInfor.accumulatedSubsidyAmountForTheYear"
                :key="i"
                class="numberList"
              >
                {{ item }}
              </div> -->
              <div v-for="(item,i) in reformInfor.accumulatedSubsidyAmountForTheYear" class="move-num" :key="i">
                  <div>
                      <div style="visibility:hidden;position: static;line-height:68px">
                          <span v-for="(list, i) in item.num" :key="i" class="num-move">{{list}}</span>
                      </div>
                      <a :class="[isMove === true ? 'move-an' : '']">
                          <span v-for="(list, i) in item.num" :key="i" class="num-move">{{list}}</span>
                      </a>
                  </div>
              </div>
              <span class="subTextStyle">户</span>
            </div>
          </div>
        </div>
        <div>
          <div class="subTitle mt15 mb15">时间银行</div>
          <div class="timeBank displayFlex">
            <div class="styleWidth">
              <!-- <div class="yellowColor pt5">
                {{ timeBank.voluntaryOrganization }}
              </div> -->
              <!-- <div class="mt10 tiemBankUnit mb14">单位：个</div> -->
              <div class="yellowColor mt30">{{ timeBank.timeCoin }}</div>
              <div class="tiemBankUnit">单位：个</div>
            </div>
            <div class="styleWidth mr150 pt48">
              <!-- <div class="mb32 font18">志愿组织</div> -->
              <div class="font18">时间币</div>
            </div>
            <div class="styleWidth mr20 pt20">
              <div class="mb32 font18">服务对象</div>
              <div class="font18">服务提供者</div>
            </div>
            <div class="styleWidth">
              <div class="yellowColor" style="margin-top:-3px">{{ timeBank.enjoys }}</div>
              <div class="mt3 tiemBankUnit">单位：人</div>
              <div class="mt10 tiemBankUnit mb8">单位：人</div>
              <div class="yellowColor">{{ timeBank.volunteer }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="displayFlexSpace">
        <div class="subTitle mb20"><span class="sanjiaoxing"></span>辅具租赁</div>
        <!-- <div class="displayFlexSpace" @click="toFJDP"><img src="@/assets/icon2.png" alt=""><span class="floatStyle ml5"></span></div> -->
        <div class="displayFlex">
          <div class="displayFlexSpace mr50" @click="toFJDP"><img src="@/assets/icon2.png" alt=""><span class="floatStyle ml5">监管</span></div>
          <div class="displayFlexSpace" @click="toFJ"><img src="@/assets/icon2.png" alt=""><span class="floatStyle ml5">辅具管理平台</span></div>
        </div>
        <!-- <div class="displayFlexSpace" @click="toFJ"><img src="@/assets/icon2.png" alt=""><span class="floatStyle ml5">辅具管理平台</span></div> -->
      </div>
      <div class="institusTop">
        <div class="institusTopCon">
          <div class="mr20"><img src="@/assets/fuju.png" /></div>
          <div>
            <div class="font20">辅具点</div>
            <div class="mt10 yellowColor">
              <span class="font30">{{ storeCount }}</span>
              <span class="font18">个</span>
            </div>
          </div>
        </div>
        <div class="institusTopCon">
          <div class="mr20"><img src="@/assets/hetong.png" /></div>
          <div>
            <div class="font20">辅具租赁合同</div>
            <div class="mt10 yellowColor">
              <span class="font30">{{ contractCount }}</span>
              <span class="font18">份</span>
            </div>
          </div>
        </div>
        <div class="institusTopCon">
          <div class="mr20"><img src="@/assets/butie.png" /></div>
          <div>
            <div class="font20">补贴金额</div>
            <div class="mt10 yellowColor">
              <span class="font30">{{ subsidyMoney }}</span>
              <span class="font18">万元</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="ifameCon" v-if="isShow">
      <div class="fzboxContent" v-if="showCN">
        <div class="contents" style="width: 1920px;">
          <iframe :src="src" style="width:1920px;height:1080px;margin:0 auto;border:none"></iframe>
        </div>
        <div class="closeShow" @click="closeShow"><img src="@/assets/close.png" alt=""></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import 
import echarts from "echarts";
import seamlessScroll from "@/components/seamlessScroll";
import Chart from "@/components/Chart";
import {
  getStatistics,
  getVolunteerStatistics,
  getSubsidyMoney,
  getContract,
  getStore,
  getScroll,
  getAdaptAgingn,
  getTimeBank,
  getCollection,
  getServeNumber,
  getVolunteerNumber
} from "@/api/page";
import { areaCode } from "@/api/areaCode1";
export default {
  components: { Chart, seamlessScroll },
  data() {
    return {
      isMove:false,
      numModels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      isShow:false,
      showCN:false,
      src:'',
      videoSrc:'',
      videoTotal:'',
      index:0,
      volunteerOptions: {},
      serviceOptions: {},
      height: "225px",
      width: "450px",
      dataList: [],
      reformInfor: {
        accumulatedSubsidyAmountForTheYear: "",
        cumulativeNumberOfRenovatedHouseholds: []
      },
      timeBank: {
        enjoys: "",
        timeCoin: "",
        voluntaryOrganization: "",
        volunteer: ""
      },
      subsidyMoney: "",
      storeCount: "",
      contractCount: "",
      videoList:[]
    };
  },
  methods: {
     toSH(){
       window.open('http://www.shweilao.cn/views/declare/retrofitExplain.jsp', '_blank',"width=1920,height=1080,left=4800,menubar=no,toolbar=no,status=no,scrollbars=yes");
    },
    toYK(){
       window.open('http://192.168.190.14:8288/index3.jsp', '_blank',"width=5740,height=1080,left=2890,menubar=no,toolbar=no,status=no,scrollbars=yes");
    },
    toFJ(){
      //  this.isShow = true
      //   this.showCN =true
      //   this.src="http://www.shfjzl.cn"
      window.open('http://www.shfjzl.cn', '_blank',"width=1920,height=1080,left=4800,menubar=no,toolbar=no,status=no,scrollbars=yes");
    },
    toFJDP(){
      //  this.isShow = true
      //   this.showCN =true
      //   this.src="http://www.shfjzl.cn"
      window.open('http://fjzl.ucanyun.com/', '_blank',"width=7660,height=1080,left=1930,menubar=no,toolbar=no,status=no,scrollbars=yes");
    },
    closeShow(){
      this.isShow = false
      this.showCN =false
    },
    changeTab({url},num){
        this.index = num
        this.videoSrc = url
    },
    async getData() {
      let volunteerNum = "",
      serveNum = ""
      //志愿者
      await getVolunteerNumber({areaCode:areaCode}).then(res=>{
        if(res.code==0){
          volunteerNum = res.data
        }
      })
      await getServeNumber({areaCode:areaCode}).then(res=>{
        if(res.code==0){
          serveNum = res.data
        }
      })
      getStatistics({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
            let yAxisData = []
          for(const key in res.data){
              yAxisData.push(res.data[key])
          }
          this.volunteerOptions = {
            title: [{
              subtext: "志愿者",
              subtextStyle: {
                fontSize: 20,
                color: "#d5ffff"
              },
              left: "32%",
              top: 0
            },{
              subtext: volunteerNum,
              subtextStyle: {
                fontSize: 36,
                color: "#d0c918",
              },
              left: "47%",
              top: -8
            }
            ],
            grid: {
              left: "5%",
              right: "5%",
              bottom: "0%",
              top: "20%",
              containLabel: true
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "none"
              },
              formatter: function(params) {
                // return (
                //   params[0].name +
                //   "<br/>" +
                //   "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                //   params[0].seriesName +
                //   " : " +
                //   Number(
                //     (params[0].value.toFixed(4) / 10000).toFixed(2)
                //   ).toLocaleString() +
                //   " 万元<br/>"
                // );

                // return params[0].name
              }
            },
            xAxis: {
              show: false,
              type: "value"
            },
            yAxis: [
              {
                type: "category",
                inverse: true,
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#d5ffff",
                    fontSize: 18
                  }
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                data: ["60岁以下", "60-64岁", "65-69岁", "70-74岁"]
              },
              {
                type: "category",
                inverse: true,
                axisTick: "none",
                axisLine: "none",
                show: true,
                axisLabel: {
                  textStyle: {
                    color: "#29d2ff",
                    fontSize: 20,
                    fontFamily:'regular',
                    rich:{
                      uname:{
                        fontSize:24,
                      }
                    }
                  },
                  formatter: function(value) {
                    return `{uname|${value}}人`
                      // return value+'人'
                    // if (value >= 10000) {
                    //   return (value / 10000).toLocaleString() + "万人";
                    // } else {
                    //   return value.toLocaleString() + "人";
                    // }
                  }
                },
                data: yAxisData
              }
            ],
            series: [
              {
                type: "bar",
                zlevel: 1,
                itemStyle: {
                  normal: {
                    color: "#009ec8"
                  }
                },
                barWidth: 14,
                data: yAxisData
              },
              {
                type: "bar",
                barWidth: 14,
                barGap: "-100%",
                data: [50000, 50000, 50000, 50000],
                itemStyle: {
                  normal: {
                    color: "#043f2d"
                  }
                }
              }
            ]
          };
        }
      });
      getVolunteerStatistics({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          let yAxisData = []
          for(const key in res.data){
              yAxisData.push(res.data[key])
          }
          this.serviceOptions = {
            title: [{
              subtext: "服务对象",
              subtextStyle: {
                fontSize: 20,
                color: "#d5ffff"
              },
              left: "26%",
              top: 0
            },{
              subtext: serveNum,
              subtextStyle: {
                fontSize: 36,
                color: "#d0c918"
              },
              left: "46%",
              top: -8
            },
            ],
            grid: {
              left: "5%",
              right: "5%",
              bottom: "0%",
              top: "20%",
              containLabel: true
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "none"
              },
              formatter: function(params) {
                // return (
                //   params[0].name +
                //   "<br/>" +
                //   "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                //   params[0].seriesName +
                //   " : " +
                //   Number(
                //     (params[0].value.toFixed(4) / 10000).toFixed(2)
                //   ).toLocaleString() +
                //   " 万元<br/>"
                // );

                // return params[0].name
              }
            },
            xAxis: {
              show: false,
              type: "value"
            },
            yAxis: [
              {
                type: "category",
                inverse: true,
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#d5ffff",
                    fontSize: 18
                  }
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                data: ["80-84岁", "85-89岁", "90-94岁", "95-99岁"]
              },
              {
                type: "category",
                inverse: true,
                axisTick: "none",
                axisLine: "none",
                show: true,
                axisLabel: {
                  textStyle: {
                    color: "#00c14d",
                    fontSize: 20,
                    rich:{
                      uname:{
                        fontSize:24,
                      }
                    }
                  },
                  formatter: function(value) {
                      return `{uname|${value}}人`
                    // if (value >= 10000) {
                    //   return (value / 10000).toLocaleString() + "万人";
                    // } else {
                    //   return value.toLocaleString() + "人";
                    // }
                  }
                },
                data: yAxisData
              }
            ],
            series: [
              {
                type: "bar",
                zlevel: 1,
                itemStyle: {
                  normal: {
                    color: "#00c14d"
                  }
                },
                barWidth: 14,
                data: yAxisData
              },
              {
                type: "bar",
                barWidth: 14,
                barGap: "-100%",
                data: [100000, 100000, 100000, 100000],
                itemStyle: {
                  normal: {
                    color: "#043f2d"
                  }
                }
              }
            ]
          };
        }
      });
      //动态数据
      getScroll({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.dataList = res.data;
        }
      });
      // //适老化数据
      // getAdaptAgingn({ areaCode: areaCode }).then(res => {
      //   if (res.code == 0) {
      //     // this.reformInfor = res.data;
      //     let arr = String(res.data.cumulativeNumberOfRenovatedHouseholds).split('')
      //     arr.forEach(item => {
      //         const model = {}
      //         const baseArr = JSON.parse(JSON.stringify(this.numModels))
      //         model.isMove = false;
      //         for (let i = 0; i < parseInt(item) + 1; i++) {
      //             baseArr.push(i)
      //         }
      //         model.num = baseArr;
      //         this.reformInfor.cumulativeNumberOfRenovatedHouseholds.push(model);
      //         this.isMove = true;
      //           setTimeout(() => {
      //             this.isMove = false
      //         }, 3000)
      //     });
      //   }
      // });
      //时间银行
      getTimeBank({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.timeBank = res.data;
        }
      });
      //视频
      getCollection({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
            this.videoList = res.data.list
            this.videoSrc = res.data.list[0].url
            this.videoTotal = res.data.total_episodes
        }
      });
      //金额
      getSubsidyMoney({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.subsidyMoney = res.data.current_subsidy_money_sum;
        }
      });
      //租赁点
      getContract({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.contractCount = res.data.contract_count;
        }
      });
      //合同
      getStore({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.storeCount = res.data.store_count;
        }
      });
    },
    getMove(){
      //适老化数据
      getAdaptAgingn({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.reformInfor.cumulativeNumberOfRenovatedHouseholds=[]
          // this.reformInfor = res.data;
          let arr = String(res.data.cumulativeNumberOfRenovatedHouseholds).split('')
          arr.forEach(item => {
              const model = {}
              const baseArr = JSON.parse(JSON.stringify(this.numModels))
              model.isMove = false;
              for (let i = 0; i < parseInt(item) + 1; i++) {
                  baseArr.push(i)
              }
              model.num = baseArr;
              this.reformInfor.cumulativeNumberOfRenovatedHouseholds.push(model);
              this.isMove = true;
                setTimeout(() => {
                  this.isMove = false
              }, 3000)
          });

          this.reformInfor.accumulatedSubsidyAmountForTheYear=[]
          // this.reformInfor = res.data;
          let arrs = String(res.data.accumulatedSubsidyAmountForTheYear).split('')
          arrs.forEach(item => {
              const model = {}
              const baseArr = JSON.parse(JSON.stringify(this.numModels))
              model.isMove = false;
              for (let i = 0; i < parseInt(item) + 1; i++) {
                  baseArr.push(i)
              }
              model.num = baseArr;
              this.reformInfor.accumulatedSubsidyAmountForTheYear.push(model);
              this.isMove = true;
                setTimeout(() => {
                  this.isMove = false
              }, 3000)
          });
        }
      });
    }
  },
  mounted() {
    this.getData();
    this.getMove()
    setInterval(() => {
        this.getMove()
    }, 60000)
  }
};
</script>
<style scoped lang="scss">
.yearInfor{
  position: relative;
  .positionInfors{
    background:url("../../assets/jb2.png");
    width:50px;
    height:24px;
    top:-5px;
    display: inline-block;line-height: 24px;
    text-align: center;
    position: absolute;
    background-size:100% 100%;background-repeat: no-repeat;font-size: 12px;
  }
}
.serviceLeft {
  width: 290px;
  height: 365px;
  margin-right: 40px;
  .serviceLeftTitle{
      display: flex;
      height:30px;
      margin-top: 15px;
      font-size: 18px;
      color:#d5ffff;
      .blueColor{
          color:#1cefe9;
      }
  }
  .video{
      width:280px;
      height:180px;
  }
  .videoInfor{
      margin-top:15px;
      font-size:16px;
    //   color: #d5ffff;
      width:280px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div{
          width:25%;
          text-align: center;
          margin-bottom: 10px;
          cursor: pointer;
          font-size:18px;
          font-family: 'regular';

      }
      .activeColor{
          color:#01ece5;
      }
  }
//   .videoInfor:after {
//     display:block;
//     content:"";
//     width: 25%;
//     height:0px;
// }
}
.serviceRight {
  position: relative;
  .areaHome{
    position: absolute;
    right:0;
    top:-20px;
  }
  width: 570px;
  height: 365px;
  .serveNumberInfor {
    display: flex;
    justify-content: space-between;
  }
}
.subText {
  font-size: 20px;
  margin-bottom: 18px;
}
.subTextStyle {
  height: 70px;
  line-height: 120px;
  font-size: 16px;
}
.timeBank {
  height: 122px;
  background-image: url("../../assets/sjyh.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.yellowColor {
  color: #bfbd11;
  font-size: 30px;
  // font-weight: 600;
  font-family: 'regular';
  
}
.styleWidth {
  width: 100px;
  text-align: center;
}
.tiemBankUnit {
  font-size: 12px;
  color: #82a5a8;
}


.move-num{
   
    position: relative;
    overflow: hidden;

     width:48px;height:68px;border:1px solid #02e7e0;color:#1cefe9;
    font-size:36px;line-height:68px;text-align: center;margin-right:10px;
    font-family: 'regular';font-weight: 500;
}
.move-num div {
    position: absolute;
    width: 100%;
    height: auto;
    
  }
.move-num div a {
      color:#1cefe9;
      display: block;
      position: absolute;
      left: 13px;
      line-height: 68px;
      bottom: calc(100% - 68px);
}
.num-move {
  width: 100%;
  display: block;
  margin: 3px  0;
}
.move-an {
    animation:mymove 3s infinite linear forwards;
    -webkit-animation:mymove 3s infinite linear forwards;
}
.num-move {
    width: 100%;
    display: block;
    margin: 3px  0;
}
@keyframes mymove {
    0%   {bottom: 3px;}
    100% {bottom: calc(100% - 40px)}
}
</style>
