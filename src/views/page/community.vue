<template>
  <div class="community">
    <div class="baseTitle ">
      <span class="addClass">居家社区养老服务</span>养老支付政策
    </div>
    <div class="communityMain">
      <div class="communityLeft halfWidth">
        <div>
          <div class="subTitle">
           <span class="sanjiaoxing"></span>机构类型
          </div>
          <!-- <div>
            <Chart
              :option="organOptions"
              :height="organHeight"
              :width="organWidth"
            />
          </div> -->
          <div class="displayFlexSpace">
            <div class="displayFlex">
              <div class="bgImg">
                <div class="one mb50">
                  <div class="top"><span class="number">{{legendData[0].value}}</span>家</div>
                  <!-- <div>较上年<span class="number">{{legendData[0].per}}</span>家 <img src="@/assets/up.png" alt=""></div> -->
                </div>
                <div class="two mb60">
                  <div class="top color1"><span class="number">{{legendData[1].value}}</span>家</div>
                  <!-- <div>较上年<span class="number">{{legendData[1].per}}</span>家 <img src="@/assets/up.png" alt=""></div> -->
                </div>
                <div class="two mb60">
                  <div class="top color2"><span class="number">{{legendData[2].value}}</span>家</div>
                  <!-- <div>较上年<span class="number">{{legendData[2].per}}</span>家 <img src="@/assets/up.png" alt=""></div> -->
                </div>
                <div class="two">
                  <div class="top color3"><span class="number">{{legendData[3].value}}</span>家</div>
                  <!-- <div>较上年<span class="number">{{legendData[3].per}}</span>家 <img src="@/assets/up.png" alt=""></div> -->
                </div>
              </div>
              <div class="bgRight">
                <div class="rightOne mt50">{{legendData[0].name}}</div>
                <div class="rightOne mt50">{{legendData[1].name}}</div>
                <div class="rightOne mt60">{{legendData[2].name}}</div>
                <div class="rightOne mt75">{{legendData[3].name}}</div>
              </div>
            </div>
            <div style="height:460px;" class="mr30">
              <div>
                <div class="borderHarf">
                  <div class="yellowColor mt48"><span class="font26">{{legendData[4].value}}</span>家</div>
                  <img src="@/assets/xt.png" alt="">
                  <!-- <div class="mt12">较上年<span class="font24">{{legendData[4].per}}</span>家 <img src="@/assets/up.png" alt=""></div> -->
                </div>
                <div class="font22 alignCenter mt10">老年活动室</div>
              </div>
              <div class="mt20">
                <div class="borderHarf">
                  <div class="yellowColor mt48"><span class="font26">{{legendData[5].value}}</span>家</div>
                  <img src="@/assets/xt.png" alt="">
                  <!-- <div class="mt12">较上年<span class="font24">{{legendData[5].per}}</span>家 <img src="@/assets/up.png" alt=""></div> -->
                </div>
                <div class="font22 alignCenter mt10">睦邻点</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="subTitle">
            <span class="sanjiaoxing"></span>综合统计
          </div>
          <div style="width:900px;height:400px;">
            <img src="@/assets/2.gif" alt="" style="width:100%;height:100%">
          </div>
          <!-- <Chart
            :option="censusOptions"
            :height="censusHeight"
            :width="organWidth"
            :autoPlay="autoPlay"
          /> -->
        </div>
      </div>
      <div class="communityRight halfWidth">
        <div>
          <div class="displayFlexSpace">
            <div class="subTitle yearInfor mb20"><span class="sanjiaoxing"></span>支付统计<span class="positionInfor">2019年全年</span></div>
          </div>
          <div class="displayFlex">
            <div class="halfWidth">
              <span class="subMoney"><img src="@/assets/zong.png" alt=""><span class="font20">老年综合津贴</span></span>
              <!-- <div class="mt12 mb8"><span class="gradient font36">{{subsidyInfor.geriatricSynthesis}}</span><span style="color:#d4d400">万元</span></div> -->
              <div class="displayFlex mt15 mb15" style="height:70px;">
                <span class="gradient numberList" v-for="(item,i) in subsidyInfor.geriatricSynthesis.split('')" :key="i">{{item}}</span><span style="color:#d4d400;line-height:120px;hieght:70px;">万元</span>
              </div>
              <span class="font20">享受人数<span style="color:#1ae1ce">{{subsidyInfor.geriatricEnjoy}}</span>万人</span>
            </div>
            <div class="halfWidth">
              <span class="subMoney"><img src="@/assets/zong.png" alt=""><span class="font20">养老服务补贴</span></span>
              <div class="displayFlex mt15 mb15" style="height:70px;">
                <span class="gradient numberList" v-for="(item,i) in subsidyInfor.pensionServices.split('')" :key="i">{{item}}</span><span style="color:#d4d400;line-height:120px;hieght:70px;">万元</span>
              </div>
              <!-- <div class="mt12 mb8"><span class="gradient font36">{{subsidyInfor.pensionServices}}</span><span style="color:#d4d400">万元</span></div> -->
              <span class="font20">享受人数<span style="color:#1ae1ce">{{subsidyInfor.pensionEnjoy}}</span>万人</span>
            </div>
          </div>
        </div>
        <!-- <div class="institusTop">
          <div class="institusTopCon">
            <div class="mr20"><img src="@/assets/zonghe.png" /></div>
            <div>
              <div class="font20">老年综合津贴</div>
              <div class="mt10 yellowColor">
                <span class="font30 gradient">{{
                  subsidyInfor.geriatricSynthesis
                }}</span>
                <span class="font18">亿元</span>
              </div>
            </div>
          </div>
          <div class="institusTopCon">
            <div class="mr20"><img src="@/assets/fuwu.png" /></div>
            <div>
              <div class="font20">养老服务补贴</div>
              <div class="mt10 yellowColor">
                <span class="font30 gradient">{{ subsidyInfor.pensionServices }}</span>
                <span class="font18">亿元</span>
              </div>
            </div>
          </div>
          <div class="institusTopCon">
            <div class="mr20"><img src="@/assets/changhu.png" /></div>
            <div>
              <div class="font20">长护险补贴</div>
              <div class="mt10 yellowColor">
                <span class="font30 gradient">{{ subsidyInfor.longTermInsurance }}</span>
                <span class="font18">亿元</span>
              </div>
            </div>
          </div>
        </div> -->
        <div class="mt15 mb10">
          <!-- <div class="subTitle">
            <span class="sanjiaoxing"></span>
            老年综合津贴
          </div> -->
          <div class="subTitle yearInfor "><span class="sanjiaoxing"></span>老年综合津贴<span class="positionInfors">当年</span></div>
          <div class="allowance mt10">
            <div class="allowanceMain">
              <div class="font22 mb15">发放人数</div>
              <div class="greenHeight"></div>
              <div class="allowanceBottom">
                <div>
                  <span class="font30">{{ peopleMoney.pension }}</span>
                  <span class="font18">万人</span>
                </div>
                <!-- <div>
                  <span style="color:#adad13;" class="font24"
                    >{{ peopleMoney.pensionIncrease
                    }}<span class="font18">万人</span></span
                  >
                  <span><img src="@/assets/up.png"/></span>
                </div> -->
              </div>
            </div>
            <div class="allowanceMain">
              <div class="font22 mb15">发放金额</div>
              <div class="greenHeight"></div>
              <div class="allowanceBottom">
                <div>
                  <span class="font30">{{ peopleMoney.money }}</span>
                  <span class="font18">亿元</span>
                </div>
                <!-- <div>
                  <span style="color:#adad13;" class="font24"
                    >{{ peopleMoney.moneyIncrease
                    }}<span class="font18">亿元</span></span
                  >
                  <span><img src="@/assets/up.png"/></span>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div>
          <seamlessScroll :dataOption="dataList" type="2" />
        </div>
        <div class="mt20">
          <!-- <div class="subTitle mb15">
            <span class="sanjiaoxing"></span>
            养老服务补贴
          </div> -->
          <div class="subTitle yearInfor mb10"><span class="sanjiaoxing"></span>养老服务补贴<span class="positionInfors">当年</span></div>
          <div class="displayFlexSpace">
            <div style="width:420px">
              <span class="font22">享受人数</span>
              <div
                style="height:12px;background:#00c647"
                class="mt15 mb15"
              ></div>
              <div style="color:#06c051">
                <span class="font30">{{ serverInfor.enjoy }}</span>
                <span class="font18">万人</span>
              </div>
            </div>
            <div style="width:420px">
              <span class="font22">发放资金</span>
              <div
                style="height:12px;background:#00c647"
                class="mt15 mb15"
              ></div>
              <div style="color:#06c051">
                <span class="font30">{{ serverInfor.grant }}</span>
                <span class="font18">亿元</span>
              </div>
            </div>
          </div>
        </div>
        <div class="displayFlex mt15">
          <div class="subsidyInfor  mr30">
            <div class="subTitle mb10">
              <span class="sanjiaoxing"></span>
              长护险
            </div>
            <div class="displayFlex">
              <div><Chart :option="badOneOption" width="280px" /></div>
              <div><Chart :option="badTwoOption" width="280px" /></div>
            </div>
          </div>
          <div class="insuranceInfor">
            <div class="mt28">
              <Chart
                :option="insuranceOptions"
                :height="insuranceHeight"
                :width="insuranceWidth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import seamlessScroll from "@/components/seamlessScroll";
import Chart from "@/components/Chart";
import { areaCode } from "@/api/areaCode1";
import {
  getComprehensiveAllowance,
  getHealthySubsidy,
  getPensionSubsidy,
  getLevelCount,
  getHomeDynamic,
  getOrganizationTypeCount,
  getOrganizationTypeIncrease,
  getComprehensive,
  getPeopleNumber
} from "@/api/page";
export default {
  components: { Chart, seamlessScroll },
  data() {
    return {
      autoPlay: true,
      organHeight: "410px",
      organWidth: "905px",
      censusHeight: "440px",
      insuranceWidth: "320px",
      insuranceHeight: "280px",
      organOptions: {},
      censusOptions: {},
      insuranceOptions: {},
      dataList: [],
      subsidyInfor: {
        geriatricSynthesis: "",
        longTermInsurance: "",
        pensionServices: ""
      },
      peopleMoney: {
        money: "",
        moneyIncrease: "",
        pension: "",
        pensionIncrease: ""
      },
      serverInfor: {
        applicants: "",
        enjoy: "",
        grant: "",
        organization: ""
      },
      badOneOption: {},
      badTwoOption: {},
      applyTotal:0,
      successCount:0,
      legendData:[
        {
          value:'',
          per:'',
          name:''
        },
        {
          value:'',
          per:'',
          name:''
        },
        {
          value:'',
          name:'',
          per:''
        },
        {
          value:'',
          name:'',
          per:''
        },
        {
          value:'',
          name:'',
          per:''
        },
        {
          value:'',
          name:'',
          per:''
        },
      ]
    };
  },
  methods: {
    getService(name,value,text){
      this[name] = {
        title: [
          {
            text: text,
            x: "36%",
            y: "65%",
            textStyle: {
              fontSize: 20,
              color: "#deffff"
            }
          },
          {
            text: value + '人',
            x: "26%",
            y: "30%",
            textStyle: {
              fontSize: 26,
              color: "#cedd04"
            }
          },
          // {
          //   text: "单位:人",
          //   x: "36%",
          //   y: "38%",
          //   textStyle: {
          //     fontSize: 16,
          //     color: "#fcfcfa"
          //   }
          // }
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
            center: ["50%", "33%"], // 布局位置
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
    },
    getData() {
      //老年综合津贴 钱+人
      getComprehensiveAllowance({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.peopleMoney = res.data;
        }
      });
      //老年综合津贴
      getHealthySubsidy({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.subsidyInfor = res.data;
        }
      });
      //服务补贴
      getPensionSubsidy({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          for (const key in this.serverInfor) {
            this.serverInfor[key] = res.data[key];
          }
        }
      });
      // 评估人数
      getPeopleNumber({areaCode:areaCode}).then(res=>{
        if(res.code==0){
          const {applyTotal,successCount,successRate } = res.data
          this.applyTotal = applyTotal
          this.successCount = successCount
          this.getService('badOneOption',applyTotal,'评估人数')
          this.getService('badTwoOption',successCount,'服务人数')
        }
      })
      //长护险
      getLevelCount({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          let indicatorData = [];
          let seriesData = [[]];
          res.data.forEach(item => {
            indicatorData.push({
              name: item.name
            });
            seriesData[0].push(item.count);
          });
          this.insuranceOptions = {
            tooltip: {
              // show: true,
              trigger: "item"
              // formatter:function(params){
              // }
            },
            radar: {
              center: ["50%", "50%"],
              radius: "70%",
              startAngle: 90,
              splitNumber: 4,
              shape: "circle",
              splitArea: {
                areaStyle: {
                  color: ["transparent"]
                }
              },
              axisLabel: {
                show: false,
                fontSize: 18
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#0a6b85"
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#0a6b85"
                }
              },
              name: {
                formatter: "{value}",
                textStyle: {
                  fontSize: 18,
                  color: "#c7f0f0" // 文字颜色
                }
              },
              indicator: [
                { name: "0级" },
                { name: "1级" },
                { name: "2级" },
                { name: "3级" },
                { name: "4级" },
                { name: "5级" },
                { name: "6级" },
                { name: "建议送医" }
              ]
              // indicator:indicatorData
            },
            series: [
              {
                name: "长护险等级",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                areaStyle: {
                  normal: {
                    color: "#0184a7"
                  }
                },
                show: true,
                itemStyle: {
                  color: "#009dc6"
                },
                label: {
                  normal: {
                    show: true,
                    color:'#b6bc10',
                    position: "top",
                    fontSize:14,
                    formatter: params => {
                      let value = `${params.value}人`;
                      let text = `${value}`;
                      return text;
                    }
                  }
                },
                // data: seriesData
                data: seriesData
              }
            ]
          };
        }
      });
      //居家动态数据
      getHomeDynamic({ areaCode: areaCode }).then(res => {
        if (res.code == 0) {
          this.dataList = res.data;
        }
      });
    },
    async getOrganOptions() {
      let legendData = [];
      let warnImg2 = require("../../assets/up.png");
      let colorList = [
        "#42ccd1",
        "#bf8811",
        "#44b954",
        "#bfbd11",
        "#1b98c2",
        "#d72752"
      ];
      let i = 0;
      //综合为老服务中心
      await getOrganizationTypeCount({
        areaCode: areaCode,
        orgType: "2011"
      }).then(res => {
        legendData.push({
          name: "综合为老服务中心",
          per: "",
          value: res.data[0].content
        });
      });
      // 长者照护之家总数
      await getOrganizationTypeCount({
        areaCode: areaCode,
        orgType: "1011"
      }).then(res => {
        legendData.push({
          name: "长者照护之家",
          per: "",
          value: res.data[0].content
        });
      });
      // 日间照护中心总数
      await getOrganizationTypeCount({
        areaCode: areaCode,
        orgType: "2010"
      }).then(res => {
        legendData.push({
          name: "日间照护中心",
          per: "",
          value: res.data[0].content
        });
      });
      // 助餐场所总数
      await getOrganizationTypeCount({
        areaCode: areaCode,
        orgType: "2014"
      }).then(res => {
        legendData.push({
          name: "老年助餐场所",
          per: "",
          value: res.data[0].content
        });
      });
      //老年活动室
      await getOrganizationTypeCount({
        areaCode: areaCode,
        orgType: "2013"
      }).then(res => {
        legendData.push({
          name: "老年活动室",
          per: "",
          value: res.data[0].content
        });
      });
      // 睦邻点总数
      await getOrganizationTypeCount({
        areaCode: areaCode,
        orgType: "2025"
      }).then(res => {
        legendData.push({
          name: "睦邻点",
          per: "",
          value: res.data[0].content
        });
      });
      //增长率
      await getOrganizationTypeIncrease({
        areaCode: areaCode,
        orgType: "2011"
      }).then(res => {
        legendData[0].per = res.data[0].content;
      });
      await getOrganizationTypeIncrease({
        areaCode: areaCode,
        orgType: "1011"
      }).then(res => {
        legendData[1].per = res.data[0].content;
      });
      await getOrganizationTypeIncrease({
        areaCode: areaCode,
        orgType: "2010"
      }).then(res => {
        legendData[2].per = res.data[0].content;
      });
      await getOrganizationTypeIncrease({
        areaCode: areaCode,
        orgType: "2014"
      }).then(res => {
        legendData[3].per = res.data[0].content;
      });

      await getOrganizationTypeIncrease({
        areaCode: areaCode,
        orgType: "2013"
      }).then(res => {
        legendData[4].per = res.data[0].content;
      });
      await getOrganizationTypeIncrease({
        areaCode: areaCode,
        orgType: "2025"
      }).then(res => {
        legendData[5].per = res.data[0].content;
      });
      // legendData.sort((a, b) => {
      //   return a.value - b.value;
      // });
      this.legendData = legendData
      this.organOptions = {
        legend: {
          // type: "scroll",
          orient: "vertical",
          // icon:'rect',
          top: "center",
          right: "5",
          data: legendData,
          itemWidth: 16,
          itemHeight: 16,
          formatter: function(name) {
            let res = legendData.filter(v => v.name === name);
            res = res[0];
            return `{uname|${name}}{unum|${res.per}}家{warnValue|}`;
          },
          textStyle: {
            color: "#d5ffff",
            fontSize: 16,
            borderWidth: 5,
            rich: {
              warnValue: {
                margin: [0, 0, 0, 10],
                backgroundColor: {
                  width: 30,
                  image: warnImg2 //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                }
              },
              uname: {
                width: 150,
                fontSize: 16,
                color: "#d5ffff",
                lineHeight: 50
              },
              unum: {
                color: "#d5ffff",
                fontSize: 20,
                fontFamily: "regular",
                // width: 100,
                align: "right"
              }
            }
          }
        },
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} : {c}人 ({d}%)"
          formatter: function(params) {
            return `<span style="color:#00dfd8">机构类型</span><br /> ${params.name}：${params.value}家<br />`;
          },
          textStyle: {
            fontSize: 18
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "67%"],
            center: ["35%", "54%"],
            // roseType: "radius",
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList[params.dataIndex];
                }
              }
            },
            label: {
              show: true,
              normal: {
                position: "outside",
                fontSize: 16,
                formatter: function(params, ticket, callback) {
                  return `{white|${params.data.value}}{unit| 家}\n{hr|}\n {nameColor|${params.data.name}}`;
                },
                rich: {
                  nameColor: {
                    align: "center",
                    fontSize: 18,
                    color: "#00dfd8",
                    padding: [5, 0]
                  },
                  unit: {
                    color: "#fff",
                    fontSize: 16
                  },
                  white: {
                    color: "#fff",
                    align: "center",
                    fontSize: 20,
                    padding: [5, 0],
                    fontWeight: 600
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
              length: 10,
              length2: 20,
              smooth: true
            },
            data: legendData
          }
        ]
      };
    },
    async getCensusOptions() {
      return
      let seriesData1 = [];
      let seriesData2 = [];
      //综合为老
      await getComprehensive({ areaCode: areaCode, orgType: "2011" }).then(
        res => {
          if (res.code == 0) {
            seriesData1.push(res.data[0].area);
            seriesData2.push(res.data[0].people);
          }
        }
      );
      //长者
      await getComprehensive({ areaCode: areaCode, orgType: "1011" }).then(
        res => {
          if (res.code == 0) {
            seriesData1.push(res.data[0].area);
            seriesData2.push(res.data[0].people);
          }
        }
      );
      //日间
      await getComprehensive({ areaCode: areaCode, orgType: "2010" }).then(
        res => {
          if (res.code == 0) {
            seriesData1.push(res.data[0].area);
            seriesData2.push(res.data[0].people);
          }
        }
      );
      //助餐
      await getComprehensive({ areaCode: areaCode, orgType: "2014" }).then(
        res => {
          if (res.code == 0) {
            seriesData1.push(res.data[0].area);
            seriesData2.push(res.data[0].people);
          }
        }
      );
      //睦邻点
      // await getComprehensive({ areaCode: areaCode, orgType: "2025" }).then(
      //   res => {
      //     if (res.code == 0) {
      //       seriesData1.push(res.data[0].area);
      //       seriesData2.push(res.data[0].people);
      //     }
      //   }
      // );
      //老年活动
      // await getComprehensive({ areaCode: areaCode, orgType: "2013" }).then(
      //   res => {
      //     if (res.code == 0) {
      //       seriesData1.push(res.data[0].area);
      //       seriesData2.push(res.data[0].people);
      //     }
      //   }
      // );
      this.censusOptions = {
        title: [
          {
            left: "10%",
            subtext: "(m²)",
            subtextStyle: {
              color: "#a9b1b4"
            }
          },
          {
            right: "5%",
            subtext: "(万人)",
            subtextStyle: {
              color: "#a9b1b4"
            }
          }
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: false,
              fontSize: 16
            }
          },
          extraCssText: "z-index:2",
          formatter: function(params) {
            return `<span style="color:#00dfd8">${params[0].name}</span><br /> <span style="color:#44b954">${params[0].seriesName}：${params[0].value}m²</span><br /> <span style="color:#1b98c2">${params[1].seriesName}：${params[1].value}万人</span>`;
          },
          textStyle: {
            fontSize: 18
          }
        },
        grid: {
          left: "10%",
          right: "5%",
          top: "10%",
          bottom: "14%"
        },
        legend: {
          textStyle: {
            color: "#ffffff",
            fontSize: 16
          },
          itemWidth: 16,
          itemHeight: 16
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#084556"
              }
            },
            axisLabel: {
              fontSize: 16,
              color: "rgba(255,255,255,.7)"
              // interval:0,
              // rotate:-20,
            },
            axisTick: {
              show: false
            },
            data: [
              "综合为老服务中心",
              "长者照护之家",
              "日间照护机构",
              "老年助餐场所"
              // "睦邻点",
              // "老年活动室"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              lineStyle: {
                color: "#084556"
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 16,
              color: "rgba(255,255,255,.7)"
            }
          },
          {
            type: "value",
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
              fontSize: 16,
              color: "rgba(255,255,255,.7)"
            }
          }
        ],
        series: [
          {
            name: "建筑面积",
            type: "bar",
            barWidth: 20,
            data: seriesData1,
            itemStyle: {
              normal: {
                color: "#44b954"
              }
            }
          },
          {
            name: "服务/活动人数",
            type: "bar",
            yAxisIndex: 1,
            barGap: 1,
            barWidth: 20,
            data: seriesData2,
            itemStyle: {
              normal: {
                color: "#1b98c2"
              }
            }
          }
        ]
      };
    }
  },
  mounted() {
    this.getData();
    this.getOrganOptions();
    this.getCensusOptions();
  }
}
</script>

<style lang="scss" scoped>
  .yearInfor{
    position: relative;
  }
  .positionInfor,.positionInfors{
    width:70px;height:24px;background:url('../../assets/jb2.png');
    display: inline-block;line-height: 24px;
    text-align: center;
    top:-10px;
    position: absolute;
    background-size:100% 100%;background-repeat: no-repeat;font-size: 12px;
  }
  .positionInfors{
    background:url("../../assets/jb1.png");
    width:50px;
    top:-5px;
  }
  .subMoney{
    display: flex;
    align-items: center;
    img{
      width:20px;height:20px;margin-right: 3px;
    }
  }
  .bgImg{
    width:391px;height:333px;background:url("../../assets/jig.png");
    margin: 40px 0;
    position: relative;
    font-size:16px;
    .one{
      width:330px;
      text-align: center;
      position: relative;
      // top:-20px;
      top:6px;
    }
    .two{
      width:330px;
      text-align: center;
    }
    .top{
      color:#4cf8ea;
    }
    .color1{
      color:#1d99c5;
    }
    .color2{
      color:#13c34d;
    }
    .color3{
      color:#aece24;
    }
    .number{
      font-size:26px;
    }
  }
  .bgRight{
    font-size: 20px;
  }
  .borderHarf{
    width:170px;height:170px;
    border-radius: 50%;
    border:12px solid #47d2d6;
    font-size:16px;
    text-align: center;
    .yellowColor{
      color:#aece24;
    }
  }
  .alignCenter{
    text-align: center;
  }
</style>
<style scoped lang="scss">
.addClass {
  position: absolute;
  left: 720px;
}
.community {
  width: 1860px;
  margin-right: 55px;
  position: relative;
  .communityMain {
    display: flex;
    height: 915px;
    .communityLeft {
      height: 915px;
      border-right: 1px dashed #036267;
      padding-right: 25px;
    }
    .communityRight {
      padding-left: 25px;
      .allowance {
        display: flex;
        justify-content: space-between;
        .allowanceMain {
          width: 420px;
          .greenHeight {
            height: 14px;
            background: #009ec8;
            margin-bottom: 16px;
            font-family: regular;
          }
          .blueHeight {
            background: #00c14d;
          }
          .allowanceBottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #29d2ff;
          }
          .allowanceTwo {
            color: #00c14d;
          }
        }
      }
      .subsidyInfor {
        width: 580px;
        .subsidyText {
          line-height: 70px;
          margin-right: 10px;
          margin-left: 50px;
        }
        .subsidyUnit {
          line-height: 125px;
          height: 70px;
        }
      }
    }
  }
}
</style>
