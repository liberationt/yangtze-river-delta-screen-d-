<template>
  <div>
    <div class="ChangSanJiaoPage">
      <div class='fgx'>
        <img src="@/assets/fgx.png" alt="">
      </div>
      <div class="changSanJiao">
        <div class="displayFlexCenter" style="">
          <div class="titleOne"><img src="@/assets/logo2.png" alt="" /></div>
          <div class="displayFlex">
            <div v-for="(item,i) in areaList" :class="index==i ?'checkoutColor':''" :key="i" class="mr20" style="position:relative;">
              <span class="font26 cursor" @click="changeTab(i)">{{item.tittle}}</span>
              <div style="width:140px;height:110px;background:#03151f;position:absolute;top:40px;text-align:center;left:-40px;padding-top:20px;z-index:500" @click="toScreen(item.name)"  v-show="item.isShow&&isShowIndex==i">
                <div><img src="@/assets/icon1.png" alt="" /></div>
                <span class="font18">{{item.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-content">
        <div class="pageLeft">
          <!-- <div class="subTitle mb40" style="text-align:right">
            <span v-for="(item,i) in areaList" :class="index==i ?'checkoutColor':''" :key="i" class="mr20">{{item}}</span>
          </div> -->
          <div class="section-1 institusTop">
            <div class="institusTopCon noneBorder">
              <div class="mr20"><img src="@/assets/huji.png" /></div>
              <div>
                <div class="font20">户籍人口</div>
                <div class="mt10 yellowColor">
                  <span class="font30 gradient">{{ numberInfor }}</span>
                  <span class="font18">亿人</span>
                </div>
              </div>
            </div>
            <div class="institusTopCon noneBorder">
              <div class="mr20"><img src="@/assets/laoren.png" /></div>
              <div>
                <div class="font20">老年人口</div>
                <div class="mt10 yellowColor">
                  <span class="font30 gradient">{{ oldPeopleNum }}</span>
                  <span class="font18">万人</span>
                </div>
              </div>
            </div>
            <div class="institusTopCon noneBorder">
              <div class="mr20"><img src="@/assets/llh.png" /></div>
              <div>
                <div class="font20">老龄化率</div>
                <div class="mt10 yellowColor">
                  <span class="font30 gradient">{{ agingNum }}</span>
                  <span class="font18">%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="section-2">
            <div class="add-trend subTitle">
              <span class="sanjiaoxing"></span>
                历年增长趋势图
            </div>
            <div class="add-trend-chart">
              <Chart
                :autoPlay="addTrendObj.autoPlay"
                :option="addTrendObj.option"
                :height="addTrendObj.height"
                :width="addTrendObj.width"
              ></Chart>
            </div>
          </div>
          <div class="section-3">
            <div class="area-distribute subTitle">
              <!-- <p>区域分布</p> -->
              <div class="copy-table">
                <div class="row-top">
                  <p>区域</p>
                  <p>老人数</p>
                  <p>占比</p>
                  <p>老龄化</p>
                  <p>年同比</p>
                </div>
                <div
                  class="row-content"
                  v-for="item in tableData"
                  :key="item.id"
                >
                  <p>{{ item.area }}</p>
                  <p>{{ item.count }}万人</p>
                  <p>{{ item.proportion }}</p>
                  <p>{{ item.aging }}</p>
                  <p>
                    {{ item.yearAssimilation }}%
                    <img
                      v-if="item.lift === 1"
                      src="./../../assets/up.png"
                      alt=""
                      width="16px"
                      height="16px"
                    />
                    <img
                      v-if="item.lift === 0"
                      src="./../../assets/down.png"
                      alt=""
                      width="16px"
                      height="16px"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pageRight">
          <div>
            <!-- <div class="topInfor displayFlexSpace">
              <div class="displayFlexSpace" @click="toCZ"><img src="@/assets/icon1.png" alt=""><span class="floatStyle">池州养老平台</span></div>
              <div class="displayFlexSpace" @click="toJS"><img src="@/assets/icon1.png" alt=""><span class="floatStyle">嘉善养老平台</span></div>
            </div> -->
            <div class="mt10">
              <div class="subTitle"><span class="sanjiaoxing"></span>机构设施统计</div>
              <div class="mechanism" @click="toYLJG">
                异地养老机构：长三角 <span class="yellowColor">{{cityNum.num1}}</span> 个城市，<span class="yellowColor">{{cityNum.num2}}</span> 家机构，<span class="yellowColor">{{cityNum.num3}}</span> 张床位
              </div>
            </div>
            <div class="bgInfor">
              <div class="one1" style="width:140px">{{formData.NumberOfInstitutions}}家</div>
              <div class="one2" style="width:140px">{{formData.pensionBeds}}张</div>
              <div class="one3" style="width:140px">{{formData.builtInMedicalInstitution}}家</div>
              <div class="one4" style="width:140px">{{formData.foodAid}}家</div>
              <!-- <div class="one5" style="width:140px">{{formData.elderlyActivityRoom}}家</div> -->
              <div class="one6" style="width:140px">{{formData.dayCare}}家</div>
              <div class="one7" style="width:140px">{{formData.miscellaneous}}家</div>
              <!-- <div class="one8" style="width:140px">{{formData.orgNum}}家</div> -->
            </div>
          </div>
          <div class="areaSign mt25">
            <div class="displayFlexSpace">
              <div class="subTitle"><span class="sanjiaoxing"></span>区域合作试点</div>
              <div class="displayFlex">
                <div v-for="(item,i) in areaCodeList" :key="i" class="areaStyle">
                  <span class="border"></span>
                  <span>{{item.name}}</span>
                  <span class="areaNumber">{{item.value}}</span>
                  <span>{{item.unit}}</span>
                </div>
              </div>
            </div>
           
            <div class="areaSign-contain displayFlexSpace">
              <div class="mapInfor">
                <Chart
                  :option="areaSignObj.option"
                  :height="areaSignObj.height"
                  :width="areaSignObj.width"
                />
              </div>
              <div class="areaInfor">
                <div class="areaTitle">
                  <span class="areaItem">区域</span>
                  <span>市县</span>
                </div>
                <div class="areaContent">
                  <vue-seamless-scroll
                      :data="areaDataList"
                      class="seamless-table"
                      :class-option="optionSingleHeight"
                  >
                    <ul class="tableContent">
                      <li class="tableInfor" v-for="(item,i) in areaDataList" :key="i">
                        <span class="tableArea">{{item.key}}</span>
                        <span class="tableAreaList">{{item.value}}</span>
                      </li>
                    </ul>
                  </vue-seamless-scroll>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="ifameCons" v-if="isShow">
        <div class="boxContents" v-if="showCZ">
          <div class="contents" style="width:3850px;">
            <iframe :src="src" style="width:3840px;height:1080px;margin:0 auto;border:none"></iframe>
          </div>
          <div class="closeShows" @click="closeShow"><img src="@/assets/close.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "@/components/Chart";
import { areaCode } from "../../api/areaCode";
import echarts from "echarts";
import sanjiao from "../../api/sanJiaoMap.json";
import { formatMoney } from "../../utils/currency";
import {
  getOldNumData,
  getAddTrendData,
  getDistributedData,
  getServiceFacData,
  getSigningData,
  getElderNumber,
  getMapLast,
  getMapNumber,
  getCooperation
} from "@/api/page";
export default {
  name: "changSanJiao",
  components: {
    Chart
  },
  data() {
    return {
      areaNum:{},
      cityNum:{},
      areaDataList:[],
      areaList:[
        {tittle:'综述',name:''},
        {tittle:'江苏',name:''},
        {tittle:'浙江',name:'嘉善养老平台',isShow:true},
        {tittle:'安徽',name:'池州养老平台',isShow:true},
        ],
      areaCodeList:[
        {name:'上海',value:'',unit:'区'},
        {name:'江苏',value:'',unit:'市县'},
        {name:'浙江',value:'',unit:'市县'},
        {name:'安徽',value:'',unit:'市县'}
      ],
      isShowIndex:0,
      index:0,
      formData:{
        NumberOfInstitutions:'',
        builtInMedicalInstitution:'',
        dayCare:'',
        elderlyActivityRoom:'',
        foodAid:'',
        miscellaneous:'',
        orgNum:'',
        pensionBeds:'' 
      },
      isShow:false,
      showCZ:false,
      src: "",
      oldPeopleNum: "",
      agingNum: "",
      numberInfor:'',
      addTrendObj: {
        height: "460px",
        width: "100%",
        option: {},
        autoPlay: true
      },
      areaSignObj: {
        height: "375px",
        width: "620px",
        option: {}
      },
      //yearIcon:require('./../../assets/up.png')
      tableData: [],
      orgLeftData: [],
      orgRightData: [],
      orgBottomData: [],
    };
  },
  computed: {
        optionSingleHeight () {
            return {
                hoverStop: true,
                limitMoveNum:2,
                 //（带停顿的）
                  //（停顿时间）
                // direction: 0          （从上往下的）
                direction:1,           //（左右的）
                step:0.4,              //（调整速度的）0
                hoverStop:true        //(鼠标停留停止 离开继续运行（反之则停止）)
            }
        }
    },
  methods: {
    changeTab(num){
      this.isShowIndex = num
    },
    toScreen(type){
      if(type==='嘉善养老平台'){
        window.open('http://10.80.20.80:8954/', '_blank',"width=1920,height=1080,left=9650,menubar=no,toolbar=no,status=no,scrollbars=yes");
      }
      if(type==='池州养老平台'){
        this.isShow = true
        this.showCZ =true
        this.src=`http://chizhou.ucanyun.com/?accessToken=${localStorage.getItem("accessToken")}&dataType=prod`
      }
    },
    toYLJG(){
      window.open('http://www.shweilao.cn/views/declare/siteOldSearch.jsp', '_blank',"width=1920,height=1080,left=9650,menubar=no,toolbar=no,status=no,scrollbars=yes");
    },
    toCZ(){
      this.isShow = true
      this.showCZ =true
      this.src=`http://chizhou.ucanyun.com/?accessToken=${localStorage.getItem("accessToken")}&dataType=prod`
      // http://192.168.10.93:9104/?accessToken=6be6ab49-855b-4a79-b1ae-ddade9166fb1&dataType=prod
      //  this.src=`http://192.168.10.93:9505/?accessToken=${localStorage.getItem("accessToken")}&dataType=prod`
    },
    toJS(){
       window.open('http://10.80.20.80:8954/', '_blank',"width=1920,height=1080,left=9650,menubar=no,toolbar=no,status=no,scrollbars=yes");
    },
    closeShow(){
      this.isShow = false
      this.showCZ =false
    },
    toChiZhou() {
      this.isShow = true;
      this.src = `http://192.168.10.93:9503/?accessToken=${localStorage.getItem(
        "accessToken"
      )}&dataType=prod`;
      return;
      // window.location.href = `http://192.168.10.93:9503/#/accessToken=${localStorage.getItem('accessToken')}`;
      window.location.href = `http://192.168.10.93:9503/?accessToken=${localStorage.getItem(
        "accessToken"
      )}&dataType=prod`;
    },
    getData() {
      //老人数量、老龄化
      getOldNumData({ areaCode: areaCode }).then(res => {
        this.oldPeopleNum = res.data.count;
        // res.data.count.substr(0,res.data.count.length-2)
        this.agingNum = res.data.per;
        // res.data.per.substr(0,.length-1)
      });
      getElderNumber({areaCode:areaCode}).then(res=>{
        if(res.code==0){
          this.numberInfor = res.data
        }
      })
      //机构统计数
      getMapNumber({areaCode:areaCode}).then(res=>{
        this.cityNum = res.data
      })
      getCooperation({areaCode:areaCode}).then(res=>{
        this.areaCodeList[0].value = res.data.num1
        this.areaCodeList[1].value = res.data.num2
        this.areaCodeList[2].value = res.data.num3
        this.areaCodeList[3].value = res.data.num4
        // rea.data.forEach((v,i)=>{
        //   areaCodeList[i].value = item.value
        // })
      })
      //历年增长趋势图
      getAddTrendData({ areaCode: areaCode }).then(res => {
        let yearArr = [],
          jsCountArr = [],
          zjCountArr = [],
          ahCountArr = [],
          shCountArr = [];
        res.data.forEach(item => {
          yearArr.push(item.year);
          jsCountArr.push(item.jsCount.substr(0, item.jsCount.length - 2));
          zjCountArr.push(item.zjCount.substr(0, item.zjCount.length - 2));
          ahCountArr.push(item.ahCount.substr(0, item.ahCount.length - 2));
          shCountArr.push(item.shCount.substr(0, item.shCount.length - 2));
        });
        this.addTrendObj.option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            extraCssText:'z-index:2',
            /*formatter:'' +
								'{b}<br />' +
								'●江苏：{c1}万人<br />' +
								'●浙江：{c2}万人<br />' +
								'●上海：{c3}万人<br />' +
								'●安徽：{c4}万人<br />',*/
            formatter: function(params) {
              let year = params[0].name;
              return `<span style="color:#00dfd8;">${year}</span><br/>
                <span style="color:#16a3c9;">${params[1].seriesName.substr(0, 2)}\n${
                params[1].data
              } 万人</span><br/>
                <span style="color:#16cb5e;">${params[2].seriesName.substr(0, 2)}\n${
                params[2].data
              } 万人</span><br/> 
                  <span style="color:#abd8ef;">${params[3].seriesName.substr(0, 2)}\n${
                params[3].data
              } 万人</span><br/> 
									<span style="color:#efe5ab;">${params[4].seriesName.substr(0, 2)}\n${params[4].data>0?params[4].data:0} 万人</span>`;
              // `<span style="color:#00dfd8;">${params[0].name}</span> <br /> ${params[0].value}万人 <br />${params[1].value}%`
            },
            textStyle: {
              color: "#d5ffff",
              fontSize: 16
            },
            position: "inside"
          },
          color: ["#16a3c9", "#16cb5e", "#abd8ef", "#efe5ab"],
          legend: {
            top: "5%",
            data: [
              "上海老人数量",
              "江苏老人数量",
              "浙江老人数量",
              "安徽老人数量"
            ],
            icon: "roundRect",
            textStyle: {
              color: "#FFF",
              fontSize: 16
            },
            itemWidth: 16,
            itemHeight: 16
          },
          grid: {
            left: "0%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: yearArr,
            axisLine: {
              lineStyle: {
                color: "#02a3a6"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 16,
              color: "rgba(255,255,255,.7)"
            }
          },
          yAxis: {
            type: "value",
            name: "(万人)",
            nameTextStyle: {
              color: "#a9b6b9"
            },
            axisLabel: {
              fontSize: 16,
              color: "rgba(255,255,255,.7)"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#02a3a6"]
              }
            }
          },
          series: [
            {
              type: "bar",
              data: jsCountArr,
              label: {
                show: true,
                position: "insideTopLeft",
                color: "#05faf2",
                fontSize: "14"
              },
              itemStyle: {
                opacity: 0,
                color: "#041720",
                borderColor: "#084d5f",
                borderWidth: 3
              },
              barMinHeight: "328",
              barWidth: "70",
              z: 2
            },
            {
              name: "上海老人数量",
              type: "line",
              lineStyle: {
                color: "#16a3c9",
                width: 3
              },
              symbol: "none",
              data: shCountArr
            },
            {
              name: "江苏老人数量",
              type: "line",
              lineStyle: {
                color: "#16cb5e",
                width: 3
              },
              symbol: "none",
              data: jsCountArr
            },
            {
              name: "浙江老人数量",
              type: "line",
              lineStyle: {
                color: "#abd8ef",
                width: 3
              },
              symbol: "none",
              data: zjCountArr
            },
            {
              name: "安徽老人数量",
              type: "line",
              lineStyle: {
                color: "#efe5ab",
                width: 3
              },
              symbol: "none",
              data: ahCountArr
            }
          ]
        };
      });

      //区域分布数据
      getDistributedData({ areaCode: areaCode }).then(res => {
        this.tableData = res.data;
      });

      //养老服务机构设施
      getServiceFacData({ areaCode: areaCode }).then(res => {
        this.formData = res.data
      });
      getMapLast({areaCode:areaCode}).then(res=>{
        this.areaDataList = res.data
      })
      //区域对口签约
      getSigningData({ areaCode: areaCode }).then(res => {
        let centroidArr = [];
        echarts.registerMap("sanjiao", sanjiao);
        const regions = sanjiao.features.map(function(feature) {
          centroidArr.push({
            name: feature.properties.name,
            centroid: feature.properties.centroid
          });
          return {
            name: feature.properties.name,
            value: Math.random(),
            height: feature.properties.height / 10
          };
        });
        //处理数据
        let mapData = [], //地图涟漪点数据
          lineData = []; //地图飞线数据
        centroidArr.forEach(item => {
          res.data.scattarCity.forEach(o => {
            let obj = { name: o, value: [] },
              linesObj = { coords: [[121.472644, 31.231706], []] };
            if (o == item.name) {
              obj.value = item.centroid;
              linesObj.coords[1] = item.centroid;
              mapData.push(obj);
              lineData.push(linesObj);
            }
          });
        });
        this.areaSignObj.option = {
          geo: {
            name: "长三角",
            type: "map",
            map: "sanjiao",
            aspectScale: 1.5,
            // 2.5
            zoom: 1.2,
            // zoom: 1.2,
            label: {
              show: false,
              color: "#FFF"
            },
            //  label: {
            //     normal: {
            //         show: true
            //     },
            //     emphasis: {
            //         show: false
            //     }
            // } ,
            itemStyle: {
              areaColor: "#051e25",
              borderColor: "#05ced3"
            },
            data: regions
          },
          series: [
            {
              type: "effectScatter",
              coordinateSystem: "geo",
              showEffectOn: "render",
              rippleEffect: {
                period: 1,
                scale: 2,
                brushType: "fill"
              },
              hoverAnimation: true,
              itemStyle: {
                normal: {
                  color: "#cfc917",
                  shadowBlur: 10,
                  shadowColor: "#333"
                }
              },
              data: mapData
            },
            {
              type: "lines",
              zlevel: 2,
              effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: "arrow", //箭头图标
                symbolSize: 7 //图标大小
              },
              lineStyle: {
                normal: {
                  color: "#cfc917",
                  width: 1, //线条宽度
                  opacity: 0.1, //尾迹线条透明度
                  curveness: 0.3 //尾迹线条曲直度
                }
              },
              data: lineData
            }
          ]
        };
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
  .mechanism{
    height:58px;border: 1px solid #029290;line-height: 58px;font-size:20px;
    padding-left:30px;
    margin-top: 15px;
    cursor: pointer;
  }
  .yellowColor{
    color:#cfc917;
    font-weight: 700;
    font-size:30px;
  }
  .mapInfor{
    border:1px solid #029290;
  }
  .areaInfor{
    width:260px;
    height:375px;
    .areaTitle{
      display: flex;
      font-size:20px;
      font-weight: bold;
      color:#1aded9;
      line-height: 48px;
      margin-bottom: 10px;
      border:1px solid #029290;
      background:#074144;
    }
    .areaItem{
      text-indent: 22px;
      width:100px;
      height:48px;
    }
    .sx{
      text-align: center;
      width:120px;
    }
  }
  .areaContent{
    height:315px;
  }
  .seamless-table{
    height:315px;
    overflow: hidden;
  }
  .tableInfor{
    display: flex;
    font-size:20px;
    color:#c7f0f0;
    margin-bottom: 10px;
    justify-items: center;
    height:48px;
    border:1px solid #029290;
  }
  .tableInfor:nth-of-type(even){
    background:#042f35;
  }
  .tableArea{
    line-height: 48px;
    height:48px;
    width: 130px;
    text-indent: 22px;
  }
  .tableAreaList{
    line-height: 48px;width:185px;
    overflow: hidden;  /*超出部分隐藏*/
    white-space: nowrap;  /*禁止换行*/
    text-overflow: ellipsis; 
  }
</style>
<style lang="scss" scoped>
.pageRight{
  position: relative;
  width:50%;
}
.areaStyle{
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color:#e1feff;
  margin-left: 30px;
  .areaNumber{
    font-size: 30px;
    margin:0 5px;
    color:#04f9da;
    font-family: 'regular';
  }
  .border{
    width:0;height:0;
    margin-right:6px;
    border-top: 5px solid transparent;
    border-left: 10px solid yellow;
    border-bottom: 5px solid transparent;
  }
}
.areaStyle:nth-of-type(1){
  .border{
   border: none;
  }
}
.bgInfor{
  width:534px;
  height:316px;
  margin:30px auto 20px;
  background:url("../../assets/meta.png");
  background-size:100% 100%;
  position: relative;
  color: #00ffff;
  font-family: 'regular';
  font-size: 18px;
  div{
    position: absolute;
  }
  .one1{
    left:90%;top:9%;
  }
   .one2{
    left:102%;top:49.5%;
  }
   .one3{
    right:-28%;top:84%;
  }
   .one4{
    left:4%;bottom:9%;
  }
   .one5{
    left:-0%;top:79.5%;
  }
  .one6{
    left:-15%;top:49.5%;
  }
  .one7{
    left:4%;top:9%;
  }
  .one8{
    left:48%;top:-6%;
  }
}
.topInfor{
  text-align: right;
  position: absolute;
  right:0px;
  top:0px;
  width:360px;
  div{
    width:170px;
  }
}

.displayFlexCenter {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #02a3a6;
}
.ChangSanJiaoPage {
  width: 1860px;
  position: relative;
  .fgx{
    position:absolute;left:-35px;
    top:10px;
  }
  .baseTitle {
    a {
      font-size: 20px;
      border: 2px solid #01d2d3;
      padding: 5px 7px;
      margin-left: 15px;
      float: right;
      color: #00ffff;
      cursor: pointer;
      text-decoration: none;
    }
  }
  .page-content {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    .pageLeft {
      width: 50%;
      .section-1 {
        display: flex;
        padding-right: 20px;
      }
      .section-2 {
        margin-top: 25px;
      }
      .section-3 {
        margin-top: 25px;
        .copy-table {
          width: 98%;
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          div {
            width: 100%;
            border: 1px solid #034050;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin: 5px 0;
            padding: 10px;
            font-weight: normal;
            p {
              display: inline-block;
              font-size: 18px;
              width: 150px;
              font-weight: 600;
              img {
                margin-left: 5px;
                vertical-align: middle;
                margin-bottom: 2px;
              }
            }
          }
          .row-top > p {
            font-size: 20px;
            font-weight: 600;
            color: #19d4cf;
          }
          .row-content {
            p {
              color: #e6e9ea;
            }

          }
          >:nth-of-type(odd){
            background:#074144;
            border:1px solid #029290
          }
        }
      }
    }
    .pageRight {
      width: 50%;
      padding-left: 20px;
      .org-facility {
        .org-facility-content {
          width: 100%;
          height: 400px;
          background: url("./../../assets/jgss_bg.png");
          background-size: 100%;
          background-repeat: no-repeat;
          padding-top: 4%;
          position: relative;
          .org-left {
            position: absolute;
            top: 80px;
            float: left;
            .org-content-left {
              margin: 8px;
              font-size: 18px;
              p {
                float: left;
                width: 13px;
                height: 13px;
                margin-top: 6px;
                margin-right: 5px;
                background: #00ffff;
              }
              span {
                color: #00ffff;
                margin-left: 5px;
                font-family: regular;
              }
            }
            .org-content-left-bottom {
              font-size: 18px;
              margin: 25px;
            }
          }
          .org-right,
          .org-bottom {
            .org-content-right,
            .org-content-bottom {
              margin: 0px 8px 8px 8px;
              font-size: 18px;
              p {
                float: left;
                width: 13px;
                height: 13px;
                margin-top: 6px;
                margin-right: 5px;
                background: #00ffff;
              }
              span {
                color: #00ffff;
                margin-left: 5px;
                font-family: regular;
              }
            }
            .org-content-right-bottom,
            .org-content-bottom-bottom {
              font-size: 18px;
              margin: 25px;
            }
          }
          .org-right {
            position: absolute;
            right: 0;
            top: 35px;
          }
          .org-bottom {
            position: absolute;
            bottom: 50px;
            right: 0;
          }
        }
      }
      .areaSign {
        .areaSign-contain {
          margin-top: 25px;
          // border: 1px solid #116c88;
        }
      }
    }
  }
}
//  #content {
//     width: 100%;
//     height: calc(100vh - 200px);
// }
// .xuanzhuan{
//   position: relative;
//     display: block;
//     animation:mymove 3s infinite linear forwards;
//     -webkit-animation:mymove 3s infinite linear forwards;

// } 
//   @keyframes mymove {
//     0%   {top: 3px;}
//     25%  {top: -40px;}
//     48%  {top: -80px;}
//     49%  {top: -80px; opacity: 0}
//     50%  {top: 80px;}
//     51%  {top: 80px;opacity: 1; }
//     100% {top: 3px;}
//     }
.seamless-warp{
  height:50px;
  overflow: hidden;
}
</style>
