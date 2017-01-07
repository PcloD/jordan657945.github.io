//initialize variables
var canvas, ctx,
	source, context, analyser, fbc_array;
	
// establish variables


// fits canvas to window
function resize_canvas() {
	if (canvas.width  != window.innerWidth) {
		canvas.width  = window.innerWidth;
	}

	if (canvas.height != window.innerHeight) {
		canvas.height = window.innerHeight;
	}
}

// gets random number between a and b
function random(min, max) {
	return (Math.random() * (max - min + 1)) + min;
}

function drawText(x, y, ang, size, color) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(ang);
		
	ctx.font = size + "px Arial";
	ctx.fillStyle = color;
	ctx.textAlign = "center";
	ctx.fillText("you're*", 0, 0);
		
	ctx.restore();
}

// upon loading:
function main() {
	// set up canvas
	canvas = document.getElementById("frame");
	ctx = canvas.getContext("2d");
	
	// fit the canvas to the window
	resize_canvas();
	
	// check if the window size has changed; resize if so
	window.addEventListener("resize", resize_canvas, false);
	
	// music
	audio = new Audio();
	audio.crossOrigin = "anonymous";
	audio.controls = true;
	audio.loop = true;
	
	audio.src = "song.mp3";
	audio.play();
	
	context = new AudioContext();
	analyser = context.createAnalyser();
	// route audio playback
	source = context.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(context.destination);

	// render the frame
	render();
}

// render canvas
function render() {
	ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	// text

	
	// repeat render function
	window.requestAnimationFrame(render);
}
