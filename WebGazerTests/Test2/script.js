
window.saveDataAcrossSession = true
const WIDTH_CUTOFF = window.innerWidth/2
const HEIGHT_CUTOFF = window.innerHeight/2

const BOTTOM_LEFT_COLOR = "lightyellow"
const TOP_LEFT_COLOR = "lightcoral"
const BOTTOM_RIGHT_COLOR = "lightgreen"
const TOP_RIGHT_COLOR = "lightblue"
const BOTTOM_LEFT = document.getElementById('bottom-left')
const BOTTOM_RIGHT = document.getElementById('bottom-right')
const TOP_LEFT = document.getElementById('top-left')
const TOP_RIGHT = document.getElementById('top-right')
let lookDirection

let startLookTime = Number.POSITIVE_INFINITY

webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	let previousLookDirection = lookDirection
	var xprediction = data.x; //these x coordinates are relative to the viewport
	var yprediction = data.y; //these y coordinates are relative to the viewport

	if(xprediction <WIDTH_CUTOFF && yprediction< HEIGHT_CUTOFF){
		lookDirection = 'top-left'
	}else if(xprediction<WIDTH_CUTOFF && yprediction >HEIGHT_CUTOFF){
		lookDirection = 'bottom-left'
	}else if(xprediction > WIDTH_CUTOFF && yprediction<HEIGHT_CUTOFF){
		lookDirection = 'top-right'
	}else if(xprediction>WIDTH_CUTOFF && yprediction > HEIGHT_CUTOFF){
		lookDirection = 'bottom-right'
	}

	console.log(lookDirection)
	if(lookDirection != previousLookDirection){
		let changeColor = document.getElementById(lookDirection)
		changeColor.style.backgroundColor = 'white'
	}else{
		setColorsBack()
	}

	console.log(elapsedTime); //elapsed time is based on time since begin was called
	console.log(`X: ${xprediction} Y: ${yprediction}`)
}).begin();


function setColorsBack(){

	BOTTOM_LEFT.style.backgroundColor = (lookDirection === 'bottom-left') ? 'white' : BOTTOM_LEFT_COLOR;
	TOP_LEFT.style.backgroundColor = (lookDirection === 'top-left') ? 'white' : TOP_LEFT_COLOR;
	BOTTOM_RIGHT.style.backgroundColor = (lookDirection === 'bottom-right') ? 'white' : BOTTOM_RIGHT_COLOR;
	TOP_RIGHT.style.backgroundColor = (lookDirection === 'top-right') ? 'white' : TOP_RIGHT_COLOR;

	
}