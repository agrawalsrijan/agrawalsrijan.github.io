// function functionname(arguments){
// 	return whatever
// }

// functions problem set
//1.is even function returns true if no. is even otherwise return false:

function isEven(num){
	return num%2===0;
}


// factorial funcv
function factorial(num){
	var result=1;
	for(var i=1;i<=num;i++){
		result=result*1;
	}
	return result;
}



// kebab to snake
function kebabToSnake(str){
	var newstr=str.replace(/-/g , "_");
	return newstr;
}