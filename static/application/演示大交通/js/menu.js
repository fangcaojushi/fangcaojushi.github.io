document.writeln("<div class=\"ys_menu\">");
document.writeln("		<a href=\"traffic-monitoring.html?id=yianshi1\" target=\"_self\" class=\"yianshi1\">首页</a>");
document.writeln("		<a href=\"road-traffic-index.html?id=yianshi2\" target=\"_self\" class=\"yianshi2\">指数</a>");
document.writeln("		<a href=\"operation-situation.html?id=yianshi3\" target=\"_self\" class=\"yianshi3\">态势</a>");
document.writeln("		<a href=\"equipment-maintenance.html?id=yianshi4\" target=\"_self\" class=\"yianshi4\">运维</a>");
document.writeln("		<a href=\"hot-spot-monitoring.html?id=yianshi5\" target=\"_self\" class=\"yianshi5\">热区</a>");
document.writeln("		<a href=\"police-duty.html?id=yianshi6\" target=\"_self\" class=\"yianshi6\">执勤</a>");
document.writeln("		<a href=\"vehicle-video.html?id=yianshi7\" target=\"_self\" class=\"yianshi7\">监控</a>");
document.writeln("		<div class=\"touminglvl\"></div>");
document.writeln("	</div>");


$(function(){
	var bodycon_obj=$('.bodycon');
	var body_height=$(window).height();
	bodycon_obj.css('height',body_height-60+'px');
	var url = location.search;
	if(!location.search || location.search.length == 0){
    	url = "?id=yianshi1";
	}
	
	var curselect="."+url.substr(4);
	var menuobj=$(curselect); 
//	alert(url+"    "+curselect+"    "+menuobj);
	menuobj.siblings('a').removeClass('select');  // 删除其他兄弟元素的样式
	menuobj.addClass('select');                   // 添加当前元素的样式	
});
function noMenuOne()
{
//alert('禁止右键菜单!');
return false;
}
document.oncontextmenu = noMenuOne; 
