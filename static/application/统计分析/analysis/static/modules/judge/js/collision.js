/* ========================================================================
 * collision.js 
 * 区域信息碰撞研判
 * by wh 20170908
 * ========================================================================*/
	lay('#version').html('-v'+ laydate.v);
	//区域一
	laydate.render({
	  elem: '#hareaone',
	  type: 'datetime',
	  format: 'yyyy-MM-dd HH:mm',
	  range: '~'
	});
	//区域二
	laydate.render({
	  elem: '#hareatwo',
	  type: 'datetime',
	  format: 'yyyy-MM-dd HH:mm',
	  range: '~'
	});
	//区域三
	laydate.render({
	  elem: '#hareathree',
	  type: 'datetime',
	  format: 'yyyy-MM-dd HH:mm',
	  range: '~'
	}); 
$(function(){
	$(document).on('click','.hschcar button',function(){
		$(".hdetailbox").show(500);
		$(".hdetailbox").css("z-index","9999");
//		$(".hmsmark").show();
	});
	$(".closehdetail").click(function(){
		$(".hdetailbox").hide(500);
		$(".hmsmark").hide();
	});
	$(".hlistshow").click(function(){
		var rowH= $(this).parents('.row').height();
	});
	//li col-md-3右侧的边框
	$(".holresult .hschcar li .col-md-3").css('height',function(){
		var hh=$(this).parent('li').height();
		$(this).height(hh);
	});
});
