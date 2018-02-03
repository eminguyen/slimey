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

	//DRAWS ICONS====================
	//stores images in array to check for clicks
	var images = [];

	//top left images
	var img0 = new Image();
	img0.name = "heart";
	img0.location = {
		x: margin, 
		y: margin
	};
	img0.src = "./images/ic_favorite_black_24px.svg";
	img0.onload = function() {
		ctx.drawImage(img0, img0.location.x, img0.location.y, iconSize, iconSize);
	}
	images.push(img0);

	//bottm left image
	var img1 = new Image();
	img1.name = "food";
	img1.location = {
		x: margin, 
		y: canvas.height - margin - iconSize
	};
	img1.src = "./images/ic_restaurant_black_18px.svg";
	img1.onload = function() {
		ctx.drawImage(img1, img1.location.x, img1.location.y, iconSize, iconSize);
	}
	images.push(img1);

	//top right image
	var img2 = new Image();
	img2.name = "star";
	img2.location = {
		x: canvas.width - margin - iconSize, 
		y: margin
	};img2.src = "./images/ic_star_rate_black_18px.svg";
	img2.onload = function() {
		ctx.drawImage(img2, img2.location.x, img2.location.y, iconSize, iconSize);
	}
	images.push(img2);

	//bottom right image
	var img3 = new Image();
	img3.name = "warning";
	img3.location = {
		x: canvas.width - margin - iconSize, 
		y: canvas.height - margin - iconSize
	};img3.src = "./images/ic_warning_black_18px.svg";
	img3.onload = function() {
		ctx.drawImage(img3, img3.location.x, img3.location.y, iconSize, iconSize);
	}
	images.push(img3);

	//=================================

	//Handles clicks
	$('#canvas').click(function(e){
	    var x = e.clientX
		  , y = e.clientY;

		console.log(x);
		console.log(y);

		//handle which button was pressed
		images.forEach(function(element) {
			if(e.clientX > element.location.x &&
			   e.clientX < element.location.x + iconSize &&
			   e.clientY > element.location.y &&
			   e.clientY < element.location.y + iconSize){

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

	function onClick() {
		//console.log("No Button Clicked");
	}
}

var draw = function() {

}
