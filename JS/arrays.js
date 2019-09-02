// var todos=[];
// var input = prompt("what would you like to do?");
 
// while(input!=="quit"){
// 	if (input==="list") {
// 	 	console.log(todos);
// 	}
// 	else if (input==="new") {
// 	 	var work = prompt("what would you add?");
// 	 	todos.push(work);
// 	}
// 	input=prompt("what would you like to do?")
// }
// console.log("ok you chose to quit")

// new version using foreach.
		// var todos=[];
		// var input = prompt("what would you like to do?");
		 
		// while(input!=="quit"){
		// 	if (input==="list") {
		// 		todos.forEach(function(todo,i){
		// 			console.log(i+": "+todo);
		// 		});
			 	
		// 	}
		// 	else if (input==="new") {
		// 	 	var work = prompt("what would you add?");
		// 	 	todos.push(work);
		// 	}
		// 	else if (input==="delete") {
		// 		var index=prompt("which index no. item you want to delete?");
		// 		todos.splice(inde,1);
		// 	}
		// 	input=prompt("what would you like to do?")
		// }
		// console.log("ok you chose to quit")

//printReverse :- takes an array and prints the reversed array.
// dont reverse original array amke a copy just

function printReverse(stuff){
	var len=(stuff.length)-1;
	while (len>=0){
		console.log(stuff[len]);
		len-=1;
	}
}
// another method
function printReverse(stuff){
	for(var i=stuff.length-1;i>=0;i--){
		console.log(stuff[i]);
	}
}

//isUnifrom function: to check if all elements of an array are same or not
function isUniform(stuff){
	var first=stuff[0];
	for(var i=1;i<stuff.length;i++){
		if (stuff[i]!==first) {
			return false;
		}
	}
	return true;
}

// sumArray sums up every element in array
function sumArray(stuff){
	var total=0;
	for(var i=0;i<stuff.length;i++){
		total+=stuff[i];
	}
	return total;
}

// same thing using foreach
function sumArray(stuff){
	var total=0;
	stuff.forEach(function(elem){
		total+=elem;
	});
	return total;
}

// return the max element from an array of numbers;
function max(stuff){
	var initial=stuff[0];
	stuff.forEach(function(elem){
		if (elem>initial){
			initial=elem;
		}
	});
	return initial;
}



























