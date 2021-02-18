window.onload = function(){
	
	var coolStyle = document.getElementsByClassName("coolStyle")[0];
	coolStyle.innerHTML = '<canvas id="canvas"></canvas>'
	
	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var string1 = "abcdefghijklmnopqrstuvwxyz";
    string1.split("");
        var fontsize = 20;
        columns = canvas.width / fontsize;
        var drop = [];
        for (var x = 0; x < columns; x++) {
            drop[x] = 0;
        }
 
        function drap() {
            ctx.fillStyle = "rgba(0,0,0,0.07)";
        ctx.fillRect(0, 0, canvas.width, canvas.height); //fillRect(x,y,width,height),x坐标、y坐标、width宽、height高
        ctx.fillStyle = "#0F0";
        ctx.font = fontsize + "px arial";
        for (var i = 0; i < drop.length; i++) {
            var text1 = string1[Math.floor(Math.random() * string1.length)];
            ctx.fillText(text1, i * fontsize, drop[i] * fontsize); //fillText(text,x,y,maxWidth),text画布文本、开始绘制文本的 x 坐标位置、开始绘制文本的 y 坐标位置、可选。允许的最大文本宽度，以像素计
            drop[i]++;
            if (drop[i] * fontsize > canvas.height && Math.random() > 0.9) { //90%的几率掉落
                drop[i] = 0;
            }
        }
    }
    setInterval(drap, 20);
	
}
