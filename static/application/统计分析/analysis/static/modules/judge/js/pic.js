	/* 弹窗中图片自适应，图片盒子的宽高根据与window的比例自定
	 * 需传入与window宽的比例(xrate)和高的比例(yrate)，设定两个自定义的值(xdiy,ydiy)可运算（如减去标题栏之类的高度）
	 * 需传入图片id（不带#）和盒子(默认盒子上下左右各有15px内边距)类名称
	 */
	function winset(xrate,yrate,xdiy,ydiy,imgid,boxname){
		var imgboxh = $(window).height()*yrate - ydiy;
		var imgboxw = $(window).width()*xrate-xdiy;
		var imgw = document.getElementById(imgid).naturalWidth;
		var imgh = document.getElementById(imgid).naturalHeight;
		if((imgw / imgh) < (imgboxw / imgboxh)) {
			$("#"+imgid).height(imgboxh);
			$(boxname).css("padding-left", (imgboxw - imgw * (imgboxh / imgh)) / 2 + 15 + "px");
		} else {
			$("#"+imgid).width(imgboxw);
			$(boxname).css("padding-top", (imgboxh - imgh * (imgboxw / imgw)) / 2 + 15 + "px");
		}
	}
	
	//页面中图片自适应，图片盒子固定宽高比为0.67，需传入图片id(不带#)和图片盒子的类名称
	function docset(imgid,boxname){
		var imgboxw = $(boxname).width();
		var imgboxh = imgboxw*0.67;	
		var imgw = document.getElementById(imgid).naturalWidth;
		var imgh = document.getElementById(imgid).naturalHeight;
		if((imgw / imgh) < (imgboxw / imgboxh)) {
			$("#"+imgid).height(imgboxh);
			$(boxname).css("padding-left", (imgboxw - imgw * (imgboxh / imgh)) / 2 + "px");
		} else {
			$("#"+imgid).width(imgboxw);
			$(boxname).css("padding-top", (imgboxh - imgh * (imgboxw / imgw)) / 2 + "px");
		}
	}

$(
	function(){	
		//弹窗中的引用
		if(document.getElementById('follow-alert')){
			winset(0.4,0.7,30,70,"follow-alert",".alert-imgbox")
		}
		//页面中的引用
		if(document.getElementById('fake-img-1')){	
			docset("fake-img-1",".fake-pic-box1")
			docset("fake-img-2",".fake-pic-box2")
		}
	}
)
