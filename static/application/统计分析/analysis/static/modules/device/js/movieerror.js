$(function() {
 // 基于准备好的dom，初始化echarts实例
        var movieerror = echarts.init(document.getElementById('movieerror')),

        // 指定图表的配置项和数据
       option = {
		    color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
		
		    title: [{
		        text: '视频监控故障数量',
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
		       data: ['功能服务异常','权限、数据通道异常','内置配置损伤','丢帧衰减','设备占用','网络故障','硬件死锁', '光焦参数选型偏差', '元器件老化、损伤、接触不良', '散热防尘防潮防雨防雾']
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
		        data: [270, 280, 290, 301, 302, 310, 320, 360, 390,520]
		    },
		    {
		        name: '事故原因占比',
		        type: 'pie',
		        center: ['83%', '35%'],
		        radius: ['15%', '35%'],
	            roseType : 'radius',
		        data:[
		            {value:135, name:'散热防尘防潮防雨防雾'},
		            {value:110, name:'元器件老化、损伤、接触不良'},
		            {value:89, name:'光焦参数选型偏差'},
		            {value:76, name:'硬件死锁'},
		            {value:51, name:'网络故障'},
		            {value:46, name:'设备占用'},
		            {value:45, name:'丢帧衰减'},
		            {value:33, name:'内置配置损伤'},
		            {value:32, name:'权限、数据通道异常'},
		            {value:31, name:'功能服务异常'}
		            
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
		            value: 190,
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
        movieerror.setOption(option), $(window).resize(movieerror.resize);
 })