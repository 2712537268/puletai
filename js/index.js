(function() {
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth()+1;
	const day = now.getDate();
	$("#nowDate").val(year+"年"+month+"月"+day+"日");
})();
var ajaxData = new Array(); //在外部申明一个变量用于储存获取到的json数据，以便于后续使用
var aa;
$.ajax({
	url:"data.json",
	async:true,
	dataType:"json",
	success:function(data){
		console.log(data);
		ajaxData = data;
		anmiu(data);
//		$(".btn").html($("<a class='bot dy bot2'></a>").text("去打印"));
	}
});
function anmiu(data){
	for (var i=0;i<ajaxData.length;i++) {
//		$(".box").append($("<a class='xuanze' ></a>").text(ajaxData[i].name+"("+ajaxData[i].bianhao+")"));
		if (jsondata=='') {
			$(".boxtj").append($("<a class='xuanze' onclick='chooseParam()'></a>").text(ajaxData[i].name+"("+ajaxData[i].bianhao+")"));
			document.getElementById("Etype").value = ajaxData[i].name+"("+ajaxData[i].bianhao+")";
		}
	}
	$(".boxtj").children("a").click(function(){
		var cc=$(this).text();
//		console.log(cc);
		$(".ddz").css("display","none");
		document.getElementById("boxtj").style.display = "none";
    	event.stopPropagation(); //阻止冒泡
//		$(this).addClass("col").siblings("a").removeClass("col");
		$('.boy').each(function () {
  			for (var i = 0;i<ajaxData.length;i++){
          		if(ajaxData[i].name+"("+ajaxData[i].bianhao+")"==cc){
          			$(".zong").find('.c1').val(ajaxData[i].bianhao);
          			$(".zong").find('.a1').val(ajaxData[i].name);
          			$(".zong").find('.a2').val(ajaxData[i].type);
         			$(".zong").find('.a3').val(ajaxData[i].mixed);
          			$(".zong").find('.a4').val(ajaxData[i].quality);
          			$(".zong").find('.a5').val(ajaxData[i].strage);
          			$(".zong").find('.a6').val(ajaxData[i].production);
         			$(".zong").find('.a7').val(ajaxData[i].standard);
          			$(".zong").find('.a8').val(ajaxData[i].unit);
          			$(".zong").find('.a9').val(ajaxData[i].productionunit);
         			$(".zong").find('.a10').val(ajaxData[i].address);
          			$(".zong").find('.a11').val(ajaxData[i].telephone);
          			$(".zong").find('.a12').val(ajaxData[i].distributor);
          			$(".zong").find('.a13').val(ajaxData[i].dealeraddress);
          			$(".zong").find('.a14').val(ajaxData[i].rules);
          			$(".zong").find('.a15').val(ajaxData[i].method);
          			$(".zong").find('.a16').val(ajaxData[i].mont);
          			$(".kuang").find('.b3').val(ajaxData[i].aqianjiao);
          			$(".kuang").find('.b4').val(ajaxData[i].abaifen);
          			$(".kuang").find('.b5').val(ajaxData[i].bqianjiao);
          			$(".kuang").find('.b6').val(ajaxData[i].bbaifen);
          			$(".kuang").find('.b7').val(ajaxData[i].cqianjiao);
          			$(".kuang").find('.b8').val(ajaxData[i].cbaifen);
          			$(".kuang").find('.b9').val(ajaxData[i].dqianjiao);
          			$(".kuang").find('.b10').val(ajaxData[i].dbaifen);
          			$(".kuang").find('.b11').val(ajaxData[i].eqianjiao);
          			$(".kuang").find('.b12').val(ajaxData[i].ebaifen);
          			break;
                }
            }
   		})
		xan();
		fangfa();		
	})
	document.onkeydown=function(event){
		e = event ? event :(window.event ? window.event : null); 
		if(e.keyCode==13){
			two();
		}
	} 
	$("#search").click(function(){
		two();
	});
}
function two(){
	var menu=$("#menu").val();
	if (menu=="" || menu==null) {
		alert("不能为空");
		return;
	}
	for (var i=0;i<ajaxData.length;i++) {
		if(ajaxData[i].bianhao==menu || ajaxData[i].name==menu){
//			console.log(i);
			$(".box .xuanze").eq(i).addClass("col").siblings("a").removeClass("col");
			
		}
		if (ajaxData[i].bianhao!=menu || ajaxData[i].name!=menu) {
			if (i==(ajaxData.length-1)) {
				$(".zo").css("display","none");
			}
		} else{
			break;
		}
	}
	for (var i=0;i<jsondata.length;i++) {
		if(jsondata[i].bianhao==menu || jsondata[i].name==menu){
//			console.log(i);
			$(".boxtj .xuanze").eq(i).addClass("col").siblings("a").removeClass("col");
			$(".boxtj .sc").eq(i).addClass("scxs").siblings("span").removeClass("scxs");
			document.getElementById("Etype").value = jsondata[i].name+"("+jsondata[i].bianhao+")";
		}
		if (jsondata[i].bianhao!=menu || jsondata[i].name!=menu) {
			if (i==(jsondata.length-1)) {
				$(".zo").css("display","none");
			}
		} else{
			break;
		}
	}
	for (var i=0;i<ajaxData.length;i++) {
		if (menu==ajaxData[i].bianhao || ajaxData[i].name==menu) {
			$('.boy').each(function () {
		   		for (var i = 0;i<ajaxData.length;i++){
		          	if(ajaxData[i].bianhao==menu  || ajaxData[i].name==menu){
		          		$(".zong").find('.c1').val(ajaxData[i].bianhao);
		          		$(".zong").find('.a1').val(ajaxData[i].name);
		          		$(".zong").find('.a2').val(ajaxData[i].type);
		          		$(".zong").find('.a3').val(ajaxData[i].mixed);
		          		$(".zong").find('.a4').val(ajaxData[i].quality);
		          		$(".zong").find('.a5').val(ajaxData[i].strage);
		          		$(".zong").find('.a6').val(ajaxData[i].production);
		          		$(".zong").find('.a7').val(ajaxData[i].standard);
		          		$(".zong").find('.a8').val(ajaxData[i].unit);
		          		$(".zong").find('.a9').val(ajaxData[i].productionunit);
		          		$(".zong").find('.a10').val(ajaxData[i].address);
		          		$(".zong").find('.a11').val(ajaxData[i].telephone);
		          		$(".zong").find('.a12').val(ajaxData[i].distributor);
		          		$(".zong").find('.a13').val(ajaxData[i].dealeraddress);
		          		$(".zong").find('.a14').val(ajaxData[i].rules);
		          		$(".zong").find('.a15').val(ajaxData[i].method);
		          		$(".zong").find('.a16').val(ajaxData[i].mont);
		          		$(".kuang").find('.b3').val(ajaxData[i].aqianjiao);
          				$(".kuang").find('.b4').val(ajaxData[i].abaifen);
          				$(".kuang").find('.b5').val(ajaxData[i].bqianjiao);
          				$(".kuang").find('.b6').val(ajaxData[i].bbaifen);
          				$(".kuang").find('.b7').val(ajaxData[i].cqianjiao);
          				$(".kuang").find('.b8').val(ajaxData[i].cbaifen);
          				$(".kuang").find('.b9').val(ajaxData[i].dqianjiao);
          				$(".kuang").find('.b10').val(ajaxData[i].dbaifen);
          				$(".kuang").find('.b11').val(ajaxData[i].eqianjiao);
          				$(".kuang").find('.b12').val(ajaxData[i].ebaifen);
		          		break;
		            }
		        }
	      	})
			xan()
		}
	}
	for (var i=0;i<jsondata.length;i++) {
		if (menu==jsondata[i].bianhao || jsondata[i].name==menu) {
			$('.boy').each(function () {
		   		for (var i = 0;i<jsondata.length;i++){
		          	if(jsondata[i].bianhao==menu || jsondata[i].name==menu){
		          		$(".zong").find('.c1').val(jsondata[i].bianhao);
		          		$(".zong").find('.a1').val(jsondata[i].name);
		          		$(".zong").find('.a2').val(jsondata[i].type);
		          		$(".zong").find('.a3').val(jsondata[i].mixed);
		          		$(".zong").find('.a4').val(jsondata[i].quality);
		          		$(".zong").find('.a5').val(jsondata[i].strage);
		          		$(".zong").find('.a6').val(jsondata[i].production);
		          		$(".zong").find('.a7').val(jsondata[i].standard);
		          		$(".zong").find('.a8').val(jsondata[i].unit);
		          		$(".zong").find('.a9').val(jsondata[i].productionunit);
		          		$(".zong").find('.a10').val(jsondata[i].address);
		          		$(".zong").find('.a11').val(jsondata[i].telephone);
		          		$(".zong").find('.a12').val(jsondata[i].distributor);
		          		$(".zong").find('.a13').val(jsondata[i].dealeraddress);
		          		$(".zong").find('.a14').val(jsondata[i].rules);
		          		$(".zong").find('.a15').val(jsondata[i].method);
		          		$(".zong").find('.a16').val(jsondata[i].mont);
		          		$(".kuang").find('.b3').val(jsondata[i].aqianjiao);
          				$(".kuang").find('.b4').val(jsondata[i].abaifen);
          				$(".kuang").find('.b5').val(jsondata[i].bqianjiao);
          				$(".kuang").find('.b6').val(jsondata[i].bbaifen);
          				$(".kuang").find('.b7').val(jsondata[i].cqianjiao);
          				$(".kuang").find('.b8').val(jsondata[i].cbaifen);
          				$(".kuang").find('.b9').val(jsondata[i].dqianjiao);
          				$(".kuang").find('.b10').val(jsondata[i].dbaifen);
          				$(".kuang").find('.b11').val(jsondata[i].eqianjiao);
          				$(".kuang").find('.b12').val(jsondata[i].ebaifen);
		          		break;
		            }
		        }
	      	})
			xan()
		}
	}
	fangfa();
}
function xan(){
//	$(".zo").css("display","block")
	$(".zo").slideDown(500);
	$(".bot1").click(function(){
		$(".zo").css("display","none")
	})
}
function fangfa(){
	$(".bot2").on("click",function(){
		a1 = $(".a1").val();
		a2 = $(".a2").val();
		a3 = $(".a3").val();
		a4 = $(".a4").val();
		a5 = $(".a5").val();
		a6 = $(".a6").val();
		a7 = $(".a7").val();
		a8 = $(".a8").val();
		a9 = $(".a9").val();
		a10 = $(".a10").val();
		a11 = $(".a11").val();
		a12 = $(".a12").val();
		a13 = $(".a13").val();
		a14 = $(".a14").val();
		a15 = $(".a15").val();
		a16 = $(".a16").val();
		b3 = $(".b3").val();
		b4 = $(".b4").val();
		b5 = $(".b5").val();
		b6 = $(".b6").val();
		b7 = $(".b7").val();
		b8 = $(".b8").val();
		b9 = $(".b9").val();
		b10 = $(".b10").val();
		b11 = $(".b11").val();
		b12 = $(".b12").val();
		c1 = $(".c1").val();
		e1 = $(".e1").val();
		nowDate = $("#nowDate").val();
		jump2();
	});
	function jump2(){
		document.cookie = "a1="+escape(a1);
		document.cookie = "a2="+escape(a2);
		document.cookie = "a3="+escape(a3);
		document.cookie = "a4="+escape(a4);
		document.cookie = "a5="+escape(a5);
		document.cookie = "a6="+escape(a6);
		document.cookie = "a7="+escape(a7);
		document.cookie = "a8="+escape(a8);
		document.cookie = "a9="+escape(a9);
		document.cookie = "a10="+escape(a10);
		document.cookie = "a11="+escape(a11);
		document.cookie = "a12="+escape(a12);
		document.cookie = "a13="+escape(a13);
		document.cookie = "a14="+escape(a14);
		document.cookie = "a15="+escape(a15);
		document.cookie = "a16="+escape(a16);
		document.cookie = "b3="+escape(b3);
		document.cookie = "b4="+escape(b4);
		document.cookie = "b5="+escape(b5);
		document.cookie = "b6="+escape(b6);
		document.cookie = "b7="+escape(b7);
		document.cookie = "b8="+escape(b8);
		document.cookie = "b9="+escape(b9);
		document.cookie = "b10="+escape(b10);
		document.cookie = "b11="+escape(b11);
		document.cookie = "b12="+escape(b12);
		document.cookie = "c1="+escape(c1);
		document.cookie = "e1="+escape(e1);
		document.cookie = "nowDate="+escape(nowDate);
		window.location.href = "printing.html";
	}
}
var jsondata = JSON.parse(localStorage.getItem('data'));
console.log(jsondata);
if(!jsondata){
	var jsondata = [];
}

$(".top-qk").click(function(){
	var msg = "您真的确定要清空吗？"; 
	if (confirm(msg)==true){ 
		localStorage.removeItem('data');
		top.location.reload();
		return true; 
	}else{ 
		top.location.reload();
		return false; 
	} 
})
$(".dd").click(function(){
//	$(".ddz").css("display","block");
	$(".ddz").slideDown(500);
	$(".zo").css("display","none");
//	$(".zo").slideUp();
	$(".tj").click(function(){
		var bm=$(".dd2").val();
		console.log(bm);
		for (var i=0;i<jsondata.length;i++) {
			if (bm==jsondata[i].bianhao) {
				var falg=1;
			}
		}
		console.log(falg);
		if (bm!="" || bm==null) {
			if(falg!=1){
				jsondata.push({
					name:$(".dd1").val(),
					bianhao:$(".dd2").val(),
					type:$(".dd3").val(),
					mixed:$(".dd4").val(),
					quality:$(".dd5").val(),
					strage:$(".dd6").val(),
					production:$(".dd7").val(),
					standard:$(".dd8").val(),
					unit:$(".dd9").val(),
					productionunit:$(".dd10").val(),
					address:$(".dd11").val(),
					telephone:$(".dd12").val(),
					distributor:$(".dd13").val(),
					dealeraddress:$(".dd14").val(),
					rules:$(".dd15").val(),
					method:$(".dd16").val(),
					aqianjiao:$(".dd17").val(),
					abaifen:$(".dd18").val(),
					bqianjiao:$(".dd19").val(),
					bbaifen:$(".dd20").val(),
					cqianjiao:$(".dd21").val(),
					cbaifen:$(".dd22").val(),
					dqianjiao:$(".dd23").val(),
					dbaifen:$(".dd24").val(),
					eqianjiao:$(".dd25").val(),
					ebaifen:$(".dd26").val(),
					mont:$(".dd27").val()
				});
			}else{
				alert("输入的内容已存在");
			}
		}else{
			alert("请输入编码");
		}
		console.log(jsondata);
		localStorage.setItem('data',JSON.stringify(jsondata));
		for (var i=0;i<jsondata.length;i++) {
			if (i+1==jsondata.length) {
				$(".boxtj").append($("<a class='xuanze' ></a>").text(jsondata[i].bianhao));
				top.location.reload();
				return
			}
		}
	})
})
for (var i=0;i<jsondata.length;i++) {
	$(".boxtj").append($("<a class='xuanze' onclick='chooseParam()' ></a>").text(jsondata[i].name+"("+jsondata[i].bianhao+")"));
	$(".boxtj").append($("<span class='sc' ></span>").text("删除"));
}
$(".gb").click(function(){
	$(".ddz").css("display","none");
})
var dj=0;	
$(".boxtj").children("a").click(function(){
	var cc=$(this).text();
//	console.log(cc);
	$(".ddz").css("display","none");
	for (var i=0;i<jsondata.length;i++) {
		if(jsondata[i].name+"("+jsondata[i].bianhao+")"==cc){
//			console.log(i);
			var ii=i;
			$(".boxtj .sc").eq(i).addClass("scxs").siblings("span").removeClass("scxs");
			break
		}
	}
	
	$(".boxtj .sc").eq(ii).click(function(){
		console.log(ii)
		if (dj==0) {
			dj=dj+1;
			var msg = "您真的确定要删除吗？"; 
		 	if (confirm(msg)==true){ 
				var cc=jsondata.splice(ii,1);
				localStorage.removeItem('cc');
				localStorage.setItem('data',JSON.stringify(jsondata));
				console.log(jsondata)
				console.log(dj)
				top.location.reload();
		  		return true; 
		 	}
		 	top.location.reload();
		 	return false; 
		}
	})
	$(this).addClass("col").siblings("a").removeClass("col");
	document.getElementById("boxtj").style.display = "none";
    event.stopPropagation(); //阻止冒泡
  		for (var i = 0;i<jsondata.length;i++){
          	if(jsondata[i].name+"("+jsondata[i].bianhao+")"==cc){
          		var a=i;
          		$(".zong").find('.c1').val(jsondata[i].bianhao);
          		$(".zong").find('.a1').val(jsondata[i].name);
          		$(".zong").find('.a2').val(jsondata[i].type);
         		$(".zong").find('.a3').val(jsondata[i].mixed);
          		$(".zong").find('.a4').val(jsondata[i].quality);
          		$(".zong").find('.a5').val(jsondata[i].strage);
          		$(".zong").find('.a6').val(jsondata[i].production);
         		$(".zong").find('.a7').val(jsondata[i].standard);
          		$(".zong").find('.a8').val(jsondata[i].unit);
          		$(".zong").find('.a9').val(jsondata[i].productionunit);
         		$(".zong").find('.a10').val(jsondata[i].address);
          		$(".zong").find('.a11').val(jsondata[i].telephone);
          		$(".zong").find('.a12').val(jsondata[i].distributor);
          		$(".zong").find('.a13').val(jsondata[i].dealeraddress);
          		$(".zong").find('.a14').val(jsondata[i].rules);
          		$(".zong").find('.a15').val(jsondata[i].method);
          		$(".zong").find('.a16').val(jsondata[i].mont);
          		$(".kuang").find('.b3').val(jsondata[i].aqianjiao);
          		$(".kuang").find('.b4').val(jsondata[i].abaifen);
          		$(".kuang").find('.b5').val(jsondata[i].bqianjiao);
          		$(".kuang").find('.b6').val(jsondata[i].bbaifen);
          		$(".kuang").find('.b7').val(jsondata[i].cqianjiao);
          		$(".kuang").find('.b8').val(jsondata[i].cbaifen);
          		$(".kuang").find('.b9').val(jsondata[i].dqianjiao);
          		$(".kuang").find('.b10').val(jsondata[i].dbaifen);
          		$(".kuang").find('.b11').val(jsondata[i].eqianjiao);
          		$(".kuang").find('.b12').val(jsondata[i].ebaifen);
          		break;
               }
           }
	xan();
	fangfa();		
})

//下拉菜单业务逻辑开始
function showList() {
    document.getElementById("boxtj").style.display = "block";
    // let ev = event || window.event;
    event.stopPropagation()
}
var showl=0;
function showli() {
//  document.getElementById("boxtj").style.display = "block";
    // let ev = event || window.event;
    event.stopPropagation()
    if (showl%2==0) {
    	document.getElementById("boxtj").style.display = "none";
    } else{
    	document.getElementById("boxtj").style.display = "block";
    }
    showl++;
}
function chooseParam() {
    // console.log(event)
   	document.getElementById("Etype").value = event.target.innerText;
}
function closeLists() {
    document.getElementById("boxtj").style.display = "none";
    event.stopPropagation(); //阻止冒泡
}
//下拉菜单业务逻辑结束