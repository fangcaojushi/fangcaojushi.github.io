$(function() {
 // 基于准备好的dom，初始化echarts实例
        var induceerror = echarts.init(document.getElementById('induceerror')),

        // 指定图表的配置项和数据
       option = {
		    color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
		
		    title: [{
		        text: '诱导屏故障数量',
		        left: '30%',
		        top: '2%',
		        textStyle: {
		            color: '#000'
		        }
		    }, {
		        text: '故障占比与故障率',
		        left: '83%',
		        top: '2%',
		        textAlign: 'center',
		        textStyle: {
		            color: '#000'
		        }
		    }],
		   tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    grid: {
		        left: '1%',
		        right: '35%',
		        top: '16%',
		        bottom: '6%',
		        containLabel: true
		    },
		    toolbox: {
		        "show": false,
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    xAxis:  {
		    		type: 'value'
		    },
		    yAxis: {
		       type: 'category',
		       data: ['重启找不到控制系统','数码部分亮度不对','整屏抖动或重影','输出的排线故障','网络故障', '黑点、花屏、闪屏', '元器件老化、损伤、接触不良', '虚连接', '温度过高、自动关屏', '整屏不亮或出现方格']
		    },
		    series: [{
		        name: '故障数',
		        type: 'bar',
		        stack: '总量',
			    label: {
	                normal: {
	                    show: true,
	                    position: 'right'
	                }
	            },
		        barMaxWidth:25,
		        barGap:'50%',
		        itemStyle: {
			      normal: {
			        color: '#a8c95f'
			      }
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c}"
			    },
		        data: [222, 266, 275, 286, 299, 300, 310, 389, 430,610]
		    },
		    {
		        name: '事故原因占比',
		        type: 'pie',
		        center: ['83%', '35%'],
		        radius: ['15%', '35%'],
	            roseType : 'radius',
		        data:[
		            {value:165, name:'整屏不亮或出现方格'},
		            {value:150, name:'温度过高、自动关屏'},
		            {value:119, name:'虚连接'},
		            {value:86, name:'元器件老化、损伤、接触不良'},
		            {value:61, name:'黑点、花屏、闪屏'},
		            {value:56, name:'网络故障'},
		            {value:55, name:'输出的排线故障'},
		            {value:43, name:'整屏抖动或重影'},
		            {value:32, name:'数码部分亮度不对'},
		            {value:29, name:'重启找不到控制系统'}
		            
		        ],
		        itemStyle: {
		            emphasis: {
		                shadowBlur: 10,
		                shadowOffsetX: 0,
		                shadowColor: 'rgba(0, 0, 0, 0.5)'
		            }
		        }
		    },
		
		
		    {
		    		name: '故障率',
		        type: 'pie',
		        center: ['83.5%', '76%'],
		        radius: ['25%', '35%'],
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        data: [{
		            value: 35,
		            name: '故障',
		            itemStyle: {
		                normal: {
		                    color: '#ff733f'
		                }
		            },
		            label: {
		                normal: {
		                    formatter: '{d} %',
		                    textStyle: {
		                        color: '#ff733f',
		                        fontSize: 20
		
		                    }
		                }
		            }
		        }, 
		        {
		            value: 290,
		            name: '正常',
		            itemStyle: {
		                normal: {
		                    color: '#87CEFA'
		
		
		                }
		            },
		            label: {
		                normal: {
		                    textStyle: {
		                        color: '#FF4500',
		                    },
		                    formatter: '\n视频监控设备故障率'
		                }
		            }
		        }]
		    }]
		}

        // 使用刚指定的配置项和数据显示图表。
        induceerror.setOption(option), $(window).resize(induceerror.resize);
 })