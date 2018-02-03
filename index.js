var buttons = [];
var images = [];
var statusBars = new Object();
var ctx;
var iconSize = 50;
var margin = 10;
var importData = {
	hunger: 0
}

function init() {

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	//sets window to fullscreen
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	//DRAWS ICONS====================

	//top left buttons
	var img0 = new Image();
	img0.name = "heart";
	img0.location = {
		x: margin,
		y: margin
	};
	img0.width = iconSize;
	img0.height = iconSize;
	img0.src = "./images/ic_favorite_black_24px.svg";
	buttons.push(img0);

	//bottm left image
	var img1 = new Image();
	img1.name = "food";
	img1.location = {
		x: margin,
		y: canvas.height - margin - iconSize
	};
	img1.width = iconSize;
	img1.height = iconSize;
	img1.src = "./images/ic_restaurant_black_18px.svg";
	buttons.push(img1);

	//top right image
	var img2 = new Image();
	img2.name = "star";
	img2.location = {
		x: canvas.width - margin - iconSize,
		y: margin
	};
	img2.width = iconSize;
	img2.height = iconSize;
	img2.src = "./images/ic_star_rate_black_18px.svg";
	buttons.push(img2);

	//bottom right image
	var img3 = new Image();
	img3.name = "warning";
	img3.location = {
		x: canvas.width - margin - iconSize,
		y: canvas.height - margin - iconSize
	};
	img3.width = iconSize;
	img3.height = iconSize;
	img3.src = "./images/ic_warning_black_18px.svg";
	buttons.push(img3);

	//create current slime
	var playerSlime = new Image();
	playerSlime.name = "character";
	playerSlime.location = {
		x: canvas.width * (1/8),
		y: canvas.height * (3/4)
	};
	playerSlime.size = {}
	playerSlime.src = "./images/slime.png";
	playerSlime.width = 200;
	playerSlime.height = 150;
	buttons.push(playerSlime);

	//=================================

	//Handles clicks
	$('#canvas').click(function(e){
	    var x = e.clientX
		  , y = e.clientY;

		console.log(x);
		console.log(y);

		//handle which button was pressed
		buttons.forEach(function(element) {
			if(e.clientX > element.location.x &&
			   e.clientX < element.location.x + element.width &&
			   e.clientY > element.location.y &&
			   e.clientY < element.location.y + element.height){

				element.onClick();
			}else{
				onClick();
			}
		});
	})


	//things that happen on click
	img0.onClick = function() {
		console.log("Button 0 Clicked");
	}

	img1.onClick = function() {
		console.log("Button 1 Clicked");
	}

	img2.onClick = function() {
		console.log("Button 2 Clicked");
	}

	img3.onClick = function() {
		console.log("Button 3 Clicked");
	}

	playerSlime.onClick = function() {
		console.log("Slime Clicked");
	}

	function onClick() {
		//console.log("No Button Clicked");
	}

	//creates bars
	statusBars.hungerBar = {
		max: 100,
		cur: 50,
		width: 500,
		height: 50,
		x: 100,
		y: 100,
		fillColor: "#FFFFFF",
		emptyColor: "#000000"

	}
	statusBars.healthBar = {
		max: 100,
		cur: 50,
		width: 500,
		height: 50,
		x: statusBars.hungerBar.x,
		y: statusBars.hungerBar.y + statusBars.hungerBar.height + 10,
		fillColor: "#FFFFFF",
		emptyColor: "#000000"
	}

	//starts animation
	setInterval(function(){
		draw();
	}, 10);
}

var x = 0;


var draw = function() {

	//sets bg color
	ctx.fillStyle = "#6ec6ff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//draw buttons
	buttons.forEach(function(element) {
		ctx.drawImage(element, element.location.x, element.location.y, element.width, element.height);

	})

	//draw slimes
	images.forEach(function(element) {
		ctx.drawImage(element, element.location.x, element.location.y);
	})

	//draw bars
	fillBar(statusBars.hungerBar);
	fillBar(statusBars.healthBar);

	statusBars.hungerBar.cur = statusBars.hungerBar.cur + 0.2;
}

var fillBar = function(bar) {
	ctx.fillStyle = bar.emptyColor;
	ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
	ctx.fillStyle = bar.fillColor;
	ctx.fillRect(bar.x, bar.y, bar.width * (bar.cur / bar.max), bar.height);
	ctx.fillStyle = "#000000";
	ctx.font = "30px Arial";
	ctx.fillText(Math.round(bar.cur), bar.x, bar.y + bar.height);
}

var slimeClicked = function(){

}
