var age = Number(prompt("Tell me how old are you?"));

if (age<0) {
	console.log("Wrong input dude!");
}

if (age===21){
	console.log("Happy 21st Birthday");
}

if (age%2===1){
	console.log("Your age is odd");
}

if (age%Math.sqrt(age)===0) {
	console.log('your age is perfect square');
}