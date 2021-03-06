$(function() {
	var hwf_city = echarts.init(document.getElementById("rework_rate")),
	deviceopt = {
		   color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
		    title : {
		        text: '',
		        subtext: ''
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		        toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
		    legend: {
		    		orient: 'horizontal',
                	x: 'center',
                	y: 18,
		            data : ['苏交科集团有限公司','华通智能交通公司','鸿信系统集成公司','无锡天舜科技公司','正元信息科技公司'],
		    },
		    calculable : true,
		    grid:{
		    	x:20
		    },
		    series : [
		        {
		            name:'返修率',
		            type:'funnel',
		            x: 30,
		            x2:30,
		            y: 60,
		            //x2: 80,
		            y2: 30,
		            width: '80%',
		            // height: {totalHeight} - y - y2,
		            min: 0,
		            max: 40,          
		            sort : 'ascending', // 'ascending', 'descending'
		            gap : 4,
		            itemStyle: {
		                normal: {
		                    // color: 各异,
		                    borderColor: '#fff',
		                    borderWidth: 1,
		                    label: {
		                        show: true,
		                        position: 'inside'
		                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
		                    },
		                    labelLine: {
		                        show: false,
		                        length: 10,
		                        lineStyle: {
		                            // color: 各异,
		                            width: 1,
		                            type: 'solid'
		                        }
		                    }
		                },
		                emphasis: {
		                    // color: 各异,
		                    borderColor: 'red',
		                    borderWidth: 1,
		                    label: {
		                        show: true,
		                        formatter: '{b}',
		                        textStyle:{
		                            fontSize:18
		                        }
		                    },
		                    labelLine: {
		                        show: true
		                    }
		                }
		            },
		            data:[
		                {value:10, name:'苏交科集团有限公司'},
		                {value:18, name:'华通智能交通公司'},
		                {value:22, name:'鸿信系统集成公司'},
		                {value:32, name:'无锡天舜科技公司'},
		                {value:28, name:'正元信息科技公司'}
		            ]
		        }
		    ]
		};                    
	hwf_city.setOption(deviceopt), $(window).resize(hwf_city.resize);
})