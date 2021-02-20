<template>
<div>
  <div class="map">
    <div class="baseTitle">养老地图</div>
    <div class="mapStatus">
      <div class="displayFlex tabTop">
        <span class="area">区域</span>
        <span class="pre">老龄化占比</span>
      </div>
      <div class="areaData" v-for="(item,i) in areaList" :key="i">
        <span class="areaItem">{{item.name}}</span>
        <span class="perInfor" :style="{color:item.value[2]>40?'#f21c52':item.value[2]<35 ?' #2ba93d':'#c5c310'}">{{item.value[2]}}%</span>
      </div>
    </div>
    <div>
      <Chart :option="mapOptions" :height="height" :width="width" :mapPlay='mapPlay'/>
    </div>
    <div class="areaSpace">
      <div class="areaCode" v-for="(item,i) in dataList" :key="i" @click="showBg(item)"><span class="spaceName"></span><span class="areaStreet" :class="item.type==1?'idCheckout':''">{{item.name}}</span></div>
    </div>
    <div class="areaList" v-if="index">
      <div class="mapClose" @click="closeToast"><img src="@/assets/closeMap.png" alt=""></div>
      <div v-for="(item,i) in streetList" :key="i" class="areaItem" @click="showUrl(item)" :class="item.url?'cherckArea':''">{{item.name}}</div>
    </div>
  </div>
  <div>
    <div class="ifameCon" v-if="isShow">
      <!-- <div class="boxContent" v-if="showCN">
        <div class="contents" :style="{width: screenWidth+10+'px'}">
          <iframe :src="src" :style="{width:screenWidth+'px',height:screenHeight+'px',border:none}" class="marginCenter"></iframe>
        </div>
        <div class="closeShow" @click="closeShow"><img src="@/assets/close.png" alt=""></div>
      </div> -->

      <div v-if="showMH">
        <div class="mhboxContent" v-if="showMH" :style="{width:screenWidth+10+'px'}">
          <div class="contents" :style="{width: screenWidth+10+'px'}">
            <iframe :src="src" :style="{width:screenWidth+'px',height:screenHeight+'px'}" class="marginCenter"></iframe>
          </div>
          <div class="closeShow" @click="closeShow"><img src="@/assets/close.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Chart from "@/components/Chart";
import echarts from "echarts";
import { shanghaiJson } from "@/api/getJson";
import { getMapData ,getMapStreet,getMapArea} from "@/api/page";
import { areaCode } from "@/api/areaCode1";
export default {
  components: { Chart },
  data() {
    return {
      index:false,
      streetList:[],
      isShow:false,
      showCN:false,
      showMH:false,
      screenWidth:'',
      screenHeight:'',
      height: "850px",
      width: "760px",
      mapOptions: {},
      mapPlay:true,
      dataList:[],
      areaList:[]
    };
  },
  methods: {
    showBg(item){
      if(item.type==1){
        getMapStreet({areaCode:item.name}).then(res=>{
          if(res.code==0){
            this.streetList = res.data
            this.index = true
          }
        })
      }
      // if(name==='长宁区平台'){
      //   window.open('http://dashboard.962347.com.cn:8961/', '_blank',"width=3850,height=2160,left=3835,menubar=no,toolbar=no,status=no,scrollbars=yes");
      // }
      // if(name==='闵行区平台'){
      //   this.isShow = true
      //   this.showMH =true
      //   this.src=`http://mhq.ucanyun.com/?accessToken=${localStorage.getItem("accessToken")}&dataType=prod`
      // }
    },
    closeToast(){
      this.index = false
    },
    showUrl(item){
      if(item.isNew === true && item.url ){
        this.screenWidth = item.width
        this.screenHeight = item.height
        this.src=`${item.url}?accessToken=${localStorage.getItem("accessToken")}&dataType=prod`
        this.isShow = true
        this.showMH =true
      }
      if(item.isNew === false&&item.url){
        if(item.url.indexOf('.ucanyun')!=-1){
          window.open(`${item.url}?accessToken=${localStorage.getItem("accessToken")}&dataType=prod`, '_blank',`width=${item.width},height=${item.height},left=0,menubar=no,toolbar=no,status=no,scrollbars=yes`)
        }else{
          window.open(`${item.url}`, '_blank',`width=${item.width},height=${item.height},left=0,menubar=no,toolbar=no,status=no,scrollbars=yes`)
        }
      }
      // window.open('http://dashboard.962347.com.cn:8961/', '_blank',"width=3850,height=2160,left=3835,menubar=no,toolbar=no,status=no,scrollbars=yes");
    },
    closeShow(){
      this.isShow = false
      this.showMH =false
      this.showCN =false
      this.screenWidth = ''
      this.screenHeight = ''
      this.src = ''
    },
    getData(data) {
      getMapArea({areaCode:'31'}).then(res=>{
        if(res.code==0){
          this.dataList= res.data
        }
      })
      getMapData({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          let pointerList = [
            { name: "黄浦区", value: [121.490317, 31.222771]},
            { name: "徐汇区", value: [121.43752, 31.179973] },
            { name: "长宁区", value: [121.42219999999998, 31.218123] },
            { name: "静安区", value: [121.44822399999998, 31.229003] },
            { name: "普陀区", value: [121.39249899999999, 31.241701] },
            { name: "虹口区", value: [121.49183199999999, 31.26097] },
            { name: "杨浦区", value: [121.535493,31.272786] },
            { name: "宝山区", value: [121.413112,31.372186 ] },
            { name: "闵行区", value: [121.37597199999999, 31.111658] },
            { name: "嘉定区", value: [121.25033300000001, 31.383524] },
            { name: "浦东新区", value: [121.63437,31.17502] },
            { name: "松江区", value: [121.223543, 31.03047] },
            { name: "金山区", value: [121.318595,30.837644]},
            { name: "青浦区", value: [121.113021, 31.151209] },
            { name: "奉贤区", value: [121.45847200000003, 30.912345] },
            { name: "崇明区", value: [121.610121,31.592903] }
          ];
          pointerList.forEach(item=>{
              for(let key in res.data){
                  if(item.name == key){
                      item.value.push(res.data[key])
                  }
              }
          })
          // let dataList = pointerList

          this.areaList =  JSON.parse(JSON.stringify(pointerList))
          this.areaList.forEach(item=>{
            item.value[2] = item.value[2].replace('%','')
          })
          this.areaList = this.areaList.sort((a,b)=>{
            return b.value[2] - a.value[2] 
          })
          this.drawChart(data,pointerList)
        }
      });
    },
    drawChart(data, points) {
      return new Promise(resolve => {
        echarts.registerMap("shanghai", data);
        this.mapOptions = {
          tooltip: {
            show: true,
            formatter: function(params) {
              return (`&nbsp;&nbsp;${params.name}&nbsp;&nbsp;&nbsp;<span style="color:#d4d400">${params.data.value[2]}</span>`)
            },
            extraCssText:'z-index:2',
            textStyle: {
              color:'#d5ffff',
              fontSize:18
            }
          },
          grid: {
            left: "0%",
            right: "4%",
            bottom: "0%",
            top:'0',
            containLabel: true
          },
          geo: {
            map: "shanghai",
            aspectScale: 0.75, //长宽比
            zoom: 1.15,
          layoutCenrer:['48%','50%'],
            roam: false,
            itemStyle: {
              normal: {
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#ffffff" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#ffffff" // 100% 处的颜色
                    }
                  ],
                  globalCoord: true // 缺省为 false
                },
                // shadowColor: "#112938",
                shadowColor:'#04131c',
                shadowOffsetX: -8,
                shadowOffsetY: 18
              },
              emphasis: {
                areaColor: "#2AB8FF",
                borderWidth: 0,
                color: "green",
                label: {
                  show: false
                }
              }
            }
          },
          series: [
            {
              type: "map",
              roam: false,
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: "#fff",
                    fontSize: 16
                  }
                },
                emphasis: {
                  textStyle: {
                    color: "#40a8b0"
                  }
                }
              },
              itemStyle: {
                normal: {
                  borderColor: "#1bd9d6",
                  borderWidth: 2,
                  //   shadowColor:'#0f8b8d',
                  //   shadowBlur: 30,
                  //   shadowOffsetX: -5,
                  areaColor: "#04131c"
                },
                emphasis: {
                  areaColor: "#0b4f54",
                  borderWidth: 1
                }
              },
              zoom: 1.15,
              map: "shanghai", //使用
              // data: this.difficultData //热力图数据   不同区域 不同的底色
              data: points
            },
            {
              type: "effectScatter",
              coordinateSystem: "geo",
              showEffectOn: "render",
              zlevel: 1,
              rippleEffect: {
                period: 1,
                scale: 2,
                brushType: "fill"
              },
              hoverAnimation: true,
              //   label: {
              //     normal: {
              //       fontSize: 10,
              //       position: 'top',
              //       offset: [0, -30],
              //       show: true
              //     },
              //   },
              itemStyle: {
                normal: {
                  color: "#d4d400",
                  shadowBlur: 10,
                  shadowColor: "#333"
                }
              },
              symbolSize: 12,
              data: points
            }
          ]
        };
        resolve();
      });
    }
  },
  mounted() {
    this.getData(shanghaiJson);
  }
};
</script>
<style lang="scss" csoped>
  .mapStatus{
    width:220px;
    height:800px;
    background: #051b23;
    position: absolute;
    right:0;
    top:90px;
    z-index: 90;
    padding:10px 20px;
    .tabTop{
      color:#01b8b4;
      font-weight: bold;
      font-size:18px;
      line-height: 45px;
      border-bottom: 1px solid #036f75;
    }
    .area{
      width:80px;
    }
    .areaData{
      height:45px;border-bottom: 1px solid #036f75;
      line-height: 45px;font-size:14px;display: flex;
    }
    .areaItem{
      width:80px;
    }
    .perInfor{
      text-align: center;width:80px;
    }
  }
</style>
<style scoped lang="scss">
.map {
  width: 900px;
  margin-right: 55px;
  position: relative;
  .mapClose{
    position: absolute;
    top:10px;
    right:15px;
    cursor: pointer;
  }
  .areaList{
    position: relative;
    padding:40px 20px;
    display: flex;
    flex-wrap: wrap;
    width:650px;
    background:rgba(0,0,0,.9);
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-68%,-50%);
    .areaItem{
      padding:10px;
      font-size: 18px;
      cursor: pointer;
      // color:#c7f2f2;
      color:rgba(1,192,188,.6)
    }
    .cherckArea{
      color:rgba(1,192,188,1);
      font-size: 19px;
    }
  }
}
.areaSpace{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .areaCode{
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .spaceName{
    width:0px;height:0px;
    border-top: 5px solid transparent;
    border-left: 10px solid yellow;
    border-bottom: 5px solid transparent;
  }
  .areaCode:nth-of-type(1) .spaceName{
    border:none;
  }
  .areaCode:nth-of-type(9) .spaceName{
    border:none;
  }
  .areaStreet{
    color:rgba(1,192,188,.5);
    font-size: 18px;
  }
  .idCheckout{
    color:rgba(1,192,188,1);
  }
}
.marginCenter{
  margin:0 auto;
  border:none;
}
</style>
