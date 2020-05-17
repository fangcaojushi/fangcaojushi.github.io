$(function() {
 // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('hteam')),

        // 指定图表的配置项和数据
        option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['本周','上周']
            },
            grid: {
				x: 40,
				x2: 40,
				y2: 24
			},
		calculable: !0,
            xAxis: {
                data: ["崇安区","梁溪区","北塘区","滨湖区","南长区","新吴区","惠山区"]
            },
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
                data: [90, 120, 51, 196, 56, 32, 41]
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
                data: [102, 139, 69, 166, 66, 26, 30]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option), $(window).resize(myChart.resize);
 })