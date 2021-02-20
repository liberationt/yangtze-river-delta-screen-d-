<template>
  <div :class="className" :style="{height: height, width: width}" />
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    isClick:{
      type:Boolean,
      default: false
    },
    height: {
      type: String,
      default: "360px"
    },
    option: {
      type: Object,
      required: true
    },
    clickIt: {
      type: Boolean,
      default: false
    },
    toMethod: {
      type: Function
    },
    autoPlay:{
      type: Boolean,
      default: false
    },
    mapPlay:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    option: {
      deep: true,
      handler(val) {
        this.chart.setOption(val, true);
      }
    }
  },
  mounted() {
    this.initChart();
    if(this.isClick){
      let that = this
      this.chart.on('click', function(params) {
        that.$emit("showAgeToast",params)
      })
    }

  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "walden");
      this.chart.setOption(this.option);
      if (this.clickIt === true) {
        this.chart.on('click', data => {
          this.toMethod(data)
        });
      }
      if(this.mapPlay&&this.mapPlay==true){
        let index = -1;
        let that = this
        var timer = setInterval(function() {
            that.chart.dispatchAction({
                type: 'hideTip',
                seriesIndex: 0,
                dataIndex: index
            });
            // 显示提示框
            that.chart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index + 1
            });
            // 取消高亮指定的数据图形
            that.chart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: index
            });
            that.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: index + 1
            });
            index++;
            if (index >that.option.series[0].data.length-1) {
                index = -1;
            }
        },10000)
      }
      if(this.autoPlay){
        var index = 0; //播放所在下标
        let that = this
        var mTime = setInterval(function() {
          that.chart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index
          });
          index++;
          if(index >= that.option.series[0].data.length) {
            index = 0;
          }
        }, 10000);
      }
    }
  }
};
</script>
