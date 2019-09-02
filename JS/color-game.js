var numSquare=6;
var colors =generateRandomColors(numSquare);
// generate a random picked color
var pickedColor=colors[Math.floor(Math.random()*colors.length)];
// display the randomly picked color
var pickedColorDisplay=document.querySelector("#pickedColorDisp");

// select all squares
var squares=document.querySelectorAll(".square");
// select the message element
var messageDisp=document.querySelector("#message");
// grab h1
var h1=document.querySelector("h1");
// grab buttons
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");



// config easy button
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquare=3;
	colors=generateRandomColors(numSquare);
	
	pickedColor=colors[Math.floor(Math.random()*colors.length)];
	pickedColorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if (colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	
});

// config hard button
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquare=6;
	colors=generateRandomColors(numSquare);
	
	pickedColor=colors[Math.floor(Math.random()*colors.length)];
	pickedColorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
	h1.style.backgroundColor="steelblue";
});

// config reset button
resetButton.addEventListener("click",function(){
	// make set of new random colors
	colors=generateRandomColors(numSquare);
	// display random color
	pickedColor=colors[Math.floor(Math.random()*colors.length)];
	pickedColorDisplay.textContent=pickedColor;
	// give new random colors to squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];

	}
	h1.style.backgroundColor="steelblue";
});

pickedColorDisplay.textContent=pickedColor;
// make squares


	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		//add event listeners on squares to detect click
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if (clickedColor===pickedColor){
				messageDisp.textContent="Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play again!";
				
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisp.textContent="Try Again";
			}
			
		});
	}

// function to change colors of all squares:
function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

// function to generate random colors
function generateRandomColors(num){
	var arr=[]
	for(i=0;i<num;i++){
		arr.push(randomColors());
	}
	return arr
}


function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" +r +", " +g +", " +b +")";

}

