/* ========================================================================
 *window.onscroll
 * by wh 20170818
 * 统计分析，针对拉页过长，建立标签快速定位，方便用户浏览
 * 功能一：根据鼠标滚动的位置，显示
 * 功能二：滚动条的定位
 * 调用方式:carpasscontrol(ulindex); ulindex值为定位点的序列号
 * ========================================================================*/
	var navContainer = $(".hnavfixbox");
    var navBox = $(".hnavfixbt");
    var piancha;
    var text = $(".hcontext"); 
//  var textid=$(".textid");
    var pianxa;
    var navBoxChild = navBox.children();  
    var textChild = text.children();  
    var num = navContainer.offset().top;  
    var a = navContainer.height();
    if(typeof(navBox.attr("piancha"))=="undefined"){
    		piancha=0;
    }
    else{
    		piancha=navBox.attr("piancha");
    }
    window.onscroll = function(){  
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  
        if(scrollTop >= num){  
            navContainer.attr("class","hnav hfixed");  
            text.css("padding-top", a +"px");
        }else{  
            navContainer.attr("class","hnav");  
             text.css("padding-top", "");
        }  
        //当导航与相应文档接触的时候自动切换  
        for(var i=0;i<navBoxChild.length;i++){  
            if( scrollTop + a >= textChild[i].offsetTop-piancha){  
                for(var j=0;j<navBoxChild.length;j++){  
                    navBoxChild[j].className = "";  
                }  
//              textid.html("当前位置：  "+scrollTop+"  "+textChild[i].offsetTop+"  "+ i);
                navBoxChild[i].className = "hcur";  
           }  
        }
    };  
    for(var i=0;i<navBoxChild.length;i++){  
        var interval;  
        navBoxChild[i].index = i;  
        navBoxChild[i].onclick = function(){  
            var self = this;  
            clearInterval(interval);  
            interval = setInterval(function(){  
                if(document.body.scrollTop + a<=textChild[self.index].offsetTop){  
                    document.body.scrollTop += 40;  
                    if(document.body.scrollTop + a>=textChild[self.index].offsetTop){  
                        document.body.scrollTop = textChild[self.index].offsetTop-a;  
                        clearInterval(interval);  
                    }  
                }else{  
                    document.body.scrollTop /= 1.1;  
                    if(document.body.scrollTop + a<=textChild[self.index].offsetTop){  
                        document.body.scrollTop = textChild[self.index].offsetTop-a;  
                        clearInterval(interval);  
                    }  
                }  
            },40);  
        };  
    }
     $(function(e) {
    		$(".backToTop").on("click", function(){
			var _this = $(this);
			$('html,body').animate({ scrollTop: 0 }, 500 ,function(){
				_this.hide();
			});
		});
	
		$(window).scroll(function(){
			var htmlTop = $(document).scrollTop();
			if( htmlTop > 0){
				$(".backToTop").fadeIn();	
			}else{
				$(".backToTop").fadeOut();
			}
		});
    });