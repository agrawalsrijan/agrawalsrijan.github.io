var p1disp= document.querySelector("#p1Disp");
var p2disp=document.querySelector("#p2Disp");
var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var resetButton=document.querySelector("#reset");
var turns=document.querySelector("input");
var rounddisp=document.querySelector("#rounds");

// initialize scores
p1Score=0;
p2Score=0;
gameOver=false;
winningScore=5;

// add event listeners to button for p1
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score===winningScore){
			p1disp.classList.add("winner");
			gameOver=true;
		}
	}
	p1disp.textContent=p1Score;
});
// event lister for player 2 button
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if (p2Score===winningScore){
			p2disp.classList.add("winner");
			gameOver=true;
		}
	}
	p2disp.textContent=p2Score;
});
// event listener for reset
// when reset clicked make both player's score 0;
resetButton.addEventListener("click", function(){
	reset();
})
// make reset functio
function reset(){
	p1Score=0;
	p2Score=0;
	p1disp.textContent=p1Score;
	p2disp.textContent=p2Score;
	gameOver=false;
	p1disp.classList.remove("winner");
	p2disp.classList.remove("winner");
}

// add event listener for no of.turn and update winning score;

turns.addEventListener("change", function(){
	rounddisp.textContent=this.value;
	winningScore=Number(this.value);
	reset();

})