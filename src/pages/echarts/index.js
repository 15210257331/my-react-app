import React, { Component } from 'react';
import * as echarts from 'echarts';
import geoJson from './china.json'


export default class Echarts extends Component {
    componentDidMount() {
        // 地图注册
        echarts.registerMap('china', { geoJSON: geoJson });
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('forms'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: '疫情地图'
            },
            tooltip: {
                triggerOn: "click",
                formatter: function (e, t, n) {
                    return .5 === e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
                }
            },
            visualMap: {
                min: 0,
                max: 1000,
                left: 26,
                bottom: 40,
                showLabel: !0,
                text: ["高", "低"],
                pieces: [{
                    gt: 100,
                    label: "> 100 人",
                    color: "#7f1100"
                }, {
                    gte: 10,
                    lte: 100,
                    label: "10 - 100 人",
                    color: "#ff5428"
                }, {
                    gte: 1,
                    lt: 10,
                    label: "1 - 9 人",
                    color: "#ff8c71"
                }, {
                    gt: 0,
                    lt: 1,
                    label: "疑似",
                    color: "#ffd768"
                }
                ],
                show: !0
            },
            geo: {
                map: "china",
                roam: !1,
                scaleLimit: {
                    min: 1,
                    max: 2
                },
                zoom: 1.2,
                // top: '10%',
                label: {
                    show: true,
                    fontSize: "12",
                    color: "rgba(0,0,0,0.7)"
                },
                itemStyle: {
                    borderColor: "rgba(0, 0, 0, 0.2)"
                },
                emphasis: {
                    itemStyle: {
                        areaColor: "#f2d5ad",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0
                    }
                }
            },
            series: [{
                name: "确诊病例",
                type: "map",
                geoIndex: 0,
                data: [{
                    name: "南海诸岛",
                    value: 0
                },
                {
                    name: '北京市',
                    value: 54
                },
                {
                    name: '天津市',
                    value: 13
                },
                {
                    name: '上海市',
                    value: 40
                },
                {
                    name: '重庆市',
                    value: 75
                },
                {
                    name: '河北省',
                    value: 13
                },
                {
                    name: '河南省',
                    value: 83
                },
                {
                    name: '云南省',
                    value: 11
                },
                {
                    name: '辽宁省',
                    value: 19
                },
                {
                    name: '黑龙江省',
                    value: 15
                },
                {
                    name: '湖南省',
                    value: 69
                },
                {
                    name: '安徽省',
                    value: 60
                },
                {
                    name: '山东省',
                    value: 39
                },
                {
                    name: '新疆省',
                    value: 4
                },
                {
                    name: '江苏省',
                    value: 31
                },
                {
                    name: '浙江省',
                    value: 104
                },
                {
                    name: '江西省',
                    value: 36
                },
                {
                    name: '湖北省',
                    value: 1052
                },
                {
                    name: '广西省',
                    value: 33
                },
                {
                    name: '甘肃省',
                    value: 7
                },
                {
                    name: '山西省',
                    value: 9
                },
                {
                    name: '内蒙古省',
                    value: 7
                },
                {
                    name: '陕西省',
                    value: 22
                },
                {
                    name: '吉林省',
                    value: 4
                },
                {
                    name: '福建省',
                    value: 18
                },
                {
                    name: '贵州省',
                    value: 5
                },
                {
                    name: '广东省',
                    value: 98
                },
                {
                    name: '青海省',
                    value: 1
                },
                {
                    name: '西藏省',
                    value: 0
                },
                {
                    name: '四川省',
                    value: 44
                },
                {
                    name: '宁夏省',
                    value: 4
                },
                {
                    name: '海南省',
                    value: 22
                },
                {
                    name: '台湾省',
                    value: 3
                },
                {
                    name: '香港省',
                    value: 5
                },
                {
                    name: '澳门省',
                    value: 5
                }
                ]
            }]

        });
    }
    render() {
        return (
            <div id="forms" style={{ width: '100%', height: '750px', padding: '10px' }}></div>
        )
    }
    componentWillUnmount() {
        echarts.dispose(document.getElementById('forms'))
    }

}
