function init() {
	
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
		ctx.drawImage(heartImg,10,10, 50, 50);
	}

	var foodImg = new Image();
	foodImg.src = "./images/ic_restaurant_black_18px.svg";
	foodImg.onload = function() {
		ctx.drawImage(foodImg,10,canvas.height - 60, 50, 50);
	}

	var starImg = new Image();
	starImg.src = "./images/ic_star_rate_black_18px.svg";
	starImg.onload = function() {
		ctx.drawImage(starImg,canvas.width - 60,10, 50, 50);
	}

	var warnImg = new Image();
	warnImg.src = "./images/ic_warning_black_18px.svg";
	warnImg.onload = function() {
		ctx.drawImage(warnImg,canvas.width - 60,canvas.height - 60, 50, 50);
	}
	//=================================

	ctx.addHitRegion({id: "canvas"});
	canvas.onclick = function(event) {
		if(event.region){
			console.log(event.region);
		}
	}
}


