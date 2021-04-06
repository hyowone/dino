$(function(){
	$(".gnb .R>li").mouseenter(function(){//product 마우스 오버시
		$(this).find(".submenu").stop().slideDown(500);
	});
	$(".gnb .R>li").mouseleave(function(){//product 마우스 아웃시
		$(this).find(".submenu").stop().slideUp(500);
	});
	$(".sns li").hover(
		function(){//header sns 마우스 오버시
			$(this).css("fontSize","25px");
		},
		function(){//header sns 마우스 아웃시
			$(this).css("fontSize","");
		}
	);
	//main 이미지 
	$(".main img:first").delay(200).animate({"top":"340px","left":"0", "opacity":"1"},500);
	$(".main img:nth-of-type(2)").delay(400).animate({"top":"200px","left":"180px", "opacity":"1"},700);
	$(".main img:nth-of-type(3)").delay(1000).animate({"top":"240px","right":"0px", "opacity":"1"},1200);
	$(".main img:nth-of-type(4)").delay(700).animate({"top":"240px","right":"0px", "opacity":"1"},900);
	$(".main img:nth-of-type(5)").delay(800).animate({"top":"310px","right":"0px", "opacity":"1"},1000);
	$(".main img:nth-of-type(6)").delay(1200).animate({"top":"780px","opacity":"1"},1400);
	$(".text").delay(1200).animate({"top":"820px","left":"195px", "opacity":"1"},1400);
	
	//section 1 (About)
	$(".Left li:first").delay(1200).animate({"left":"220px","top":"350px","opacity":"1"},1200);
	$(".Left li:last").delay(1500).animate({"left":"50px","top":"480px","opacity":"1"},1500);
	
	//secction 2 (Product)
	$(".section2").children("div").mouseover(function(){
		$(this).children(".dino, .pro").show();
		$(this).children(".btn").show();
	});
	$(".section2").children("div").mouseout(function(){
		$(this).children(".dino, .pro, .btn").hide();
	});/**/
	
	
});