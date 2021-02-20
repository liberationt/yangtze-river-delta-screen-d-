import echarts from 'echarts'
import sanjiao from './sanJiaoMap.json'

echarts.registerMap('sanjiao', sanjiao);
const regions = sanjiao.features.map(function (feature) {
    return {
        name: feature.properties.name,
        value: Math.random(),
        height: feature.properties.height / 10
    };
})
let mapData = [
    {
        name:'杭州市',
        value:[120.153576,30.287459,29999]
    },
    {
        name:'南京市',
        value:[118.767413,32.041544,29999]
    },
    {
        name:'上海市',
        value:[121.472644, 31.231706]
    },{
        name:'丽水市',
        value:[119.921786,28.451993]
    },
]
export var areaSignOption = {
    geo:{
        name:'长三角',
        type:'map',
        map:'sanjiao',
        aspectScale:2.5,
        zoom:1.2,
        label:{
            show:true,
            color:'#FFF'
        },
        itemStyle:{
            areaColor:'#0c2534',
            borderColor:'#3b6476'
        },
        data:regions
    },
    series:[
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                period: 15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#cfc917',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            // data: dealData(mapData),
            data:mapData
        },
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 7, //图标大小
            },
            lineStyle: {
                normal: {
                    /* function (value){ //随机颜色

                    ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                    '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                    '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                    '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                    '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                    '#52b9c7','#4fb6d2','#4ab2e5']
return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
}*/
                    width: 1, //线条宽度
                    opacity: 0.1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: [
                {coords: [[121.472644, 31.231706],[120.153576,30.287459]],lineStyle:{color:'#159d9f'}},
                {coords: [[121.472644, 31.231706],[118.767413,32.041544]],lineStyle:{color:'#159d9f'}},
                {coords: [[121.472644, 31.231706],[119.921786,28.451993]],lineStyle:{color:'#159d9f'}},
            ]
        }

    ]
}