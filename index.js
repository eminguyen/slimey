function init() {

	var iconSize = 50;
	var margin = 10;
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	//sets window to fullscreen
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	//sets bg color
	ctx.fillStyle = "#6ec6ff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//DRAWS IMAGES====================
	var heartImg = new Image();
	heartImg.src = "./images/ic_favorite_black_24px.svg";
	heartImg.onload = function() {
		ctx.drawImage(heartImg, margin, margin, iconSize, iconSize);
	}

	var foodImg = new Image();
	foodImg.src = "./images/ic_restaurant_black_18px.svg";
	foodImg.onload = function() {
		ctx.drawImage(foodImg, margin, canvas.height - margin - iconSize, iconSize, iconSize);
	}

	var starImg = new Image();
	starImg.src = "./images/ic_star_rate_black_18px.svg";
	starImg.onload = function() {
		ctx.drawImage(starImg,canvas.width - margin - iconSize, margin, iconSize, iconSize);
	}

	var warnImg = new Image();
	warnImg.src = "./images/ic_warning_black_18px.svg";
	warnImg.onload = function() {
		ctx.drawImage(warnImg,canvas.width - margin - iconSize,canvas.height - margin - iconSize, iconSize, iconSize);
	}
	//=================================

/*
	ctx.addHitRegion({id: "canvas"});
	canvas.onclick = function(event) {
		if(event.region){
			console.log(event.region);
		}
	}
	*/
}


