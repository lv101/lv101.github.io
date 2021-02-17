window.onload = function() {
	
	var time = document.getElementById("now-time");
	var page = document.getElementsByClassName("s");
	var title = document.getElementsByClassName("title")[0];
	var more = document.getElementsByClassName("more")[0];
	var info = document.getElementsByClassName("info");
	
	var get_time = function(){
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();

		if(String(hour).length==1 & String(minute).length==2){
			time.innerText = '0'+hour+':'+minute;
		}else if(String(minute).length==1 & String(hour).length==2){
			time.innerText = hour+':'+'0'+minute;
		}else if(String(minute).length==1 & String(hour).length==1){
			time.innerText = '0'+hour+':'+'0'+minute;
		}else{
			time.innerText = hour+':'+minute;
		}
	}
	
	var set_init = function(){
		for(var i=0;i<page.length;i++){
			page[i].style.color = "rgb(128,131,149)";
			info[i].innerHTML = "";
//			console.log(i);
		}
	}
	
	get_time();
	setInterval(function(){get_time()}, 1000)

	page[0].style.color = "rgb(18,181,246)";
	info[0].innerHTML = '<a href="javascript:;">\
						<div class="session">\
							<img src="img/session1.png"/>\
							<div id="nicknime">Beta</div><br /><br />\
							<div id="message">Beta：hhh你好</div>\
							<div id="session-time">06:06</div>\
						</div>\
					</a>';
	page[0].onclick = function(){
		set_init();
		page[0].style.color = "rgb(18,181,246)";
		title.innerText = "消息";
		more.innerText = "+";
		more.style.fontSize = "40px";
		info[0].innerHTML = '\
					<a href="javascript:;">\
						<div class="session">\
							<img src="img/session1.png"/>\
							<div id="nicknime">Beta</div><br /><br />\
							<div id="message">Beta：hhh你好</div>\
							<div id="session-time">06:06</div>\
						</div>\
					</a>';
	}
	page[1].onclick = function(){
		set_init();
		page[1].style.color = "rgb(18,181,246)";
		title.innerText = "好友";
		more.innerText = "添加";
		more.style.fontSize = "20px";
		info[1].innerHTML = '\
						<a href="javascript:;">\
							<div class="inner_top inner_top1">\
								<span>新朋友</span>\
								<span>></span>\
							</div>\
						</a>\
						<a href="javascript:;">\
							<div class="inner_top inner_top2">\
								<span>创建群聊</span>\
								<span>></span>\
							</div>\
						</a>';
	}
	page[2].onclick = function(){
		set_init();
		page[2].style.color = "rgb(18,181,246)";
		title.innerText = "动态";
		more.innerText = "更多";
		more.style.fontSize = "20px";
	}
}
