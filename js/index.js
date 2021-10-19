// About
$(document).ready(function(){	
	$(".room").hide();
	$(".phototxt").mouseenter(function(){
		$(this).css("border","1px solid blue");
		$(".room").show(1000);
	});
	$(".phototxt").mouseleave(function(){
		$(this).css("border","1px solid rgb(153, 217, 234)");		
	});
});
// Contant
$(document).ready(function(){
	$(".submit").on({
		mouseenter : function(){
			$(this).css("border","1px solid rgb(255, 174, 201)");
		},
		mouseleave : function(){
			$(this).css("border","1px solid white");
		},
	});

	$("a.facebook").attr("href","https://www.facebook.com/nyi.l.htet.246/");
	$("a.github").attr("href","https://github.com/nyilinhtetayanokoji");
	$("a.twitter").attr("href","https://www.facebook.com/nyi.l.htet.246/");
	$("a.linkedin").attr("href","https://www.facebook.com/nyi.l.htet.246/");
});
