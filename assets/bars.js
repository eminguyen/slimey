var statusBars = new Object();
var exclamations = [];
var ctx;
var canvas;

function initBars(){
  console.log("initting bars");

  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  //sets window size
  canvas.width = 1000;
  canvas.height = 500;

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

var draw = function() {

	//sets bg color
	ctx.fillStyle = "#6ec6ff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//draw buttons
	buttons.forEach(function(element) {
		ctx.drawImage(element, element.location.x, element.location.y, element.width, element.height);

	})

	//draw exclamations
	exclamations.forEach(function(element) {
		ctx.globalAlpha = element.alpha;
		ctx.drawImage(element, element.location.x, element.location.y, element.width, element.height);
		ctx.globalAlpha = 1.0;

		//reduces alpha of exclamation, making it fade out
		element.alpha = element.alpha - 0.02;

		//makes element float upwards
		element.location.y = element.location.y - 1;

		//removes element from array if no longer in use
		if(element.alpha <= 0){
			exclamations.splice(0, 1);
		}
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

//creates exclamation on slime click
var slimeClicked = function(){
	var ouch = new Image();
	ouch.name = "ouch";
	ouch.location = {
		x: playerSlime.location.x,
		y: playerSlime.location.y
	};
	ouch.width = 100;
	ouch.height = 100;
	ouch.src = "../images/ic_warning_black_18px.svg";
	ouch.alpha = 1.0;
	exclamations.push(ouch);

	console.log(exclamations);

}
