$(function() {
	var e = echarts.init(document.getElementById("hcity")),
	a = {
		title: {
			text: ""
		},
		tooltip: {
			trigger: ""
		},
		legend: {
			data:['本周','上周']
		},
		grid: {
			x: 40,
			x2: 40,
			y2: 24
		},
		calculable: !0,
		xAxis: [{
			type: "category",
			data: ["事故/起","伤人事故/起","受伤/人","死亡事故/起","死亡/人"]
		}],
		yAxis: {},
		series: [{
            name: '本周',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position:"top"
                }
            },
            itemStyle: {
		      normal: {
		        color: '#a8c95f'
		      }
		    },
            data: [386, 170, 175, 8, 10]
        },
        {
            name: '上周',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position:"top"
                }
            },
            itemStyle: {
		      normal: {
		        color: '#58b4ef'
		      }
		    },
            data: [398, 110, 134, 8, 7]
        }]
	};
	e.setOption(a), $(window).resize(e.resize);
})