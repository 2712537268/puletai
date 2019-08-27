$(function(){
	getData2();
});
function getData2(){
	var a1=unescape(getCookie("a1"));
	var a2 = unescape(getCookie("a2"));
	var a3 = unescape(getCookie("a3"));
	var a4 = unescape(getCookie("a4"));
	var a5 = unescape(getCookie("a5"));
	var a6 = unescape(getCookie("a6"));
	var a7 = unescape(getCookie("a7"));
	var a8 = unescape(getCookie("a8"));
	var a9 = unescape(getCookie("a9"));
	var a10 = unescape(getCookie("a10"));
	var a11 = unescape(getCookie("a11"));
	var a12 = unescape(getCookie("a12"));
	var a13 = unescape(getCookie("a13"));
	var a14 = unescape(getCookie("a14"));
	var a15 = unescape(getCookie("a15"));
	var a16 = unescape(getCookie("a16"));
	var b3 = unescape(getCookie("b3"));
	var b4 = unescape(getCookie("b4"));
	var b5 = unescape(getCookie("b5"));
	var b6 = unescape(getCookie("b6"));
	var b7 = unescape(getCookie("b7"));
	var b8 = unescape(getCookie("b8"));
	var b9 = unescape(getCookie("b9"));
	var b10 = unescape(getCookie("b10"));
	var b11 = unescape(getCookie("b11"));
	var b12 = unescape(getCookie("b12"));
	var c1 = unescape(getCookie("c1"));
	var e1 = unescape(getCookie("e1"));
	var nowDate = unescape(getCookie("nowDate"));
	if (a1!=""){
		$(".a1").text(a1);
	}
	if(a2!=""){
		$(".a2").text(a2);
	}
	if(a3!=""){
		$(".a3").text(a3);
	}
	if(a4!=""){
		$(".a4").text(a4);
	}
	if(a5!=""){
		$(".a5").text(a5);
	}
	if(a6!=""){
		$(".a6").text(a6);
	}
	if(a7!=""){
		$(".a7").text(a7);
	}
	if(a8!=""){
		$(".a8").text(a8);
	}
	if(a9!=""){
		$(".a9").text(a9);
	}
	if(a10!=""){
		$(".a10").text(a10);
	}
	if(a11!=""){
		$(".a11").text(a11);
	}
	if(a12!=""){
		$(".a12").text(a12);
	}
	if(a13!=""){
		$(".a13").text(a13);
	}
	if(a14!=""){
		$(".a14").text(a14);
	}
	if(a15!=""){
		$(".a15").text(a15);
	}
	if(a16!=""){
		$(".a16").text(a16);
	}
	if(b3!=""){
		$(".b3").text(b3);
	}
	if(b4!=""){
		$(".b4").text(b4);
	}
	if(b5!=""){
		$(".b5").text(b5);
	}
	if(b6!=""){
		$(".b6").text(b3);
	}
	if(b7!=""){
		$(".b7").text(b7);
	}
	if(b8!=""){
		$(".b8").text(b8);
	}
	if(b9!=""){
		$(".b9").text(b9);
	}
	if(b10!=""){
		$(".b10").text(b10);
	}
	if(b11!=""){
		$(".b11").text(b11);
	}
	if(b12!=""){
		$(".b12").text(b12);
	}
	if(c1!=""){
		$(".c1").text(c1);
	}
	if(e1!=""){
		$(".e1").text(e1);
	}
	if(nowDate!=""){
		$(".nowDate").text(nowDate);
	}
}
//循环得到相应的值
function getCookie(cname){
	var ss = document.cookie;
	var a1 = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++){
		var c = ca[i].trim();
		if (c.indexOf(a1)==0)
			return c.substring(a1.length,c.length);
	}
	return "";
}
		
console.log($(".da").html())
var num=prompt("请输入要打印的次数：","");
console.log(num)
for (var i=0;i<(num-1);i++) {
	$(".zzz").append($(".hq").html());
	if (num>=1) {
		$(".zzz").css("display","block");
	}
}
setTimeout(function(){
	window.print()	
},3000);