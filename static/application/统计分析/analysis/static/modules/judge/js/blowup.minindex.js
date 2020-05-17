// blowup.min.js
// Paul Krishnamurthy 2016
/* ========================================================================
 * blowup.min.js
 * by WH
 * 单张图片的放大镜
 * 放大倍数 multiple 默认倍数2
 * ========================================================================*/
$(function(o) {
	o.fn.blowup = function(e) {
		var t = this;
		if(!t.is("img")) return void console.log("%c Blowup.js Error: %cTarget element is not an image.", "background: #FCEBB6; color: #F07818; font-size: 17px; font-weight: bold;", "background: #FCEBB6; color: #F07818; font-size: 17px;");
		var n = t.attr("src"),i = new Array();
			i[himgindex] = (t.width(), t.height(), new Image);
			i[himgindex].src = t.attr("src");
		var r = {
				round: !0,
				//放大镜的宽高
				width: 300,
				height: 130,
				background: "#FFF",
				shadow: "0 8px 17px 0 rgba(0, 0, 0, 0.8)",
				border: "6px solid #4889FD",
				cursor: !0,
				zIndex: 999999
			},
			s = o.extend(r, e);
		t.on("dragstart", function(o) {
			o.preventDefault()
		}), t.css("cursor", s.cursor ? "crosshair" : "none");
		var d = document.createElement("div");
		var dd = document.createElement("div");
		var biaoshi=himgindex.toString();
		d.id = "BlowupLens"+biaoshi, o("body").append(d), $blowupLens = o("#BlowupLens"+biaoshi), $blowupLens.css({
			position: "absolute",
			visibility: "hidden",
			"pointer-events": "none",
			zIndex: s.zIndex,
			width: s.width,
			height: s.height,
			border: s.border,
			background: s.background,
			"border-radius": s.round ? "5px" : "none",
			"box-shadow": s.shadow,
			"background-repeat": "no-repeat",
			"box-sizing":"content-box"
		}), 
		dd.id="positionauto", o("#BlowupLens"+biaoshi).append(dd),$positionauto = o("#positionauto"), $positionauto.css({
			position: "relative",
			"pointer-events": "none",
			zIndex: s.zIndex,
			width: s.width,
			height: s.height,
			margin:0,
			padding:0,
			overflow: "hidden"
		}),
		o("#positionauto").append(i[biaoshi]),i[biaoshi].id="BlowupImg"+biaoshi,$blowupImg = o("#BlowupImg"+biaoshi),
		t.mouseenter(function() {
			$blowupLens.css("visibility", "visible")
		}), 
		t.mousemove(function(o) {
			//放大倍数
			var multiple=2,
			//放大镜的X坐标
				e = o.pageX - s.width / 2,
			//放大镜的Y坐标
				r = o.pageY - s.height / 2,
			//距展示窗的X坐标
				d = o.pageX - this.offsetLeft-moveleft,
			//距展示窗Y的坐标
				a = o.pageY - this.offsetTop-movetop,
			//对应放大图的X轴的偏移量
				u = -Math.floor(d / t.width() * i[biaoshi].width * multiple - s.width / 2),
			//对应放大图的Y轴的偏移量	
				h = -Math.floor(a / t.height() * i[biaoshi].height * multiple - s.height / 2);
			$blowupLens.css({
				left: e,
				top: r,
//				暂保留，原始尺寸的放大
//				overflow: "hidden"
//				"background-image": "url(" + n + ")",
//				"background-position": u + " " + h
			});
			$blowupImg.css({
				position:"absolute",
				zIndex: s.zIndex-1,
				transform:"scale("+multiple+")",
				"transform-origin":"left top",
				margin:0,
				padding:0,
				top:0,
				left:0,
				"margin-left":u,
				"margin-top": h,
			});
//			alert(moveleft+"  "+movetop);
//			alert(" x= "+o.pageX+" y= "+o.pageY+" d= "+d+" a= "+a+" t.w= "+t.width()+" t.h= "+t.height()+" i.w= "+i.width+" i.h= "+i.height);
		}), t.mouseleave(function() {
			$blowupLens.css("visibility", "hidden")
		})
	}
});
/* ========================================================================
 * by wh 17.8.12 10:43
 * 图片的等比例缩放
 * ========================================================================*/
//图片的距展示窗的边距
var movepd=10,
//图片居中，置left,top的初始值为边距值
moveleft=410,
movetop=10;
function DrawImage(ImgD, FitWidth, FitHeight) {
    var image = new Image();
    image.src = ImgD.src;
    if (image.width > 0 && image.height > 0) {
        if (image.width / image.height >= FitWidth / FitHeight) {
                ImgD.width = FitWidth;
                ImgD.height = (image.height * FitWidth) / image.width;
           
        } else {
           
                ImgD.height = FitHeight;
                ImgD.width = (image.width * FitHeight) / image.height;
            
        }
    }
}
/* ========================================================================
 * 图片放大镜
 * ========================================================================*/ 
 var himgindex=0;
$(function(){
//	$('.cardetails .item img').blowup();
	var scaleboxw =$(window).width()*0.77*0.75-movepd*2;
	var scaleboxh = $(window).height()*0.95-movepd*2;
	var num=0;
	$(".cardetails .item img").each(function () {
	   DrawImage(this, scaleboxw, scaleboxh);
	   himgindex++;
	   $(this).blowup();
	});
})
