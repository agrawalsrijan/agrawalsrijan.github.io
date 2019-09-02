//
 selecting some element to change its property by javascript

// selecting h1
 var h1=document.queryselector("h1");
h1.style.color="pink";
setInterval() // this function takes a function and time poeriod to change color of something with time
//
getElementById() // method that takes a strin input
				 // rtetur the specific element in that id

var tags=document.getElementsByClassName("navbar")// fetches elents by their class; return a node list.every element of that class
var tags=document.getElementsByTagName("li")// input a tag nam.and it returns node list of elements of that tag
document.querySelector("#highlight")//return only the first element that matches a css style selector;
document.querySelectorAll()//return all elements that matches.all elements
