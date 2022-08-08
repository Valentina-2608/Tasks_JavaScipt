
/* Write a bind function that allows you to bind a context (this value) to a function.*/

window.x = 1;
var ctx = { x: 2 };
function testThis(a){ 
console.log("x=" + this.x + ", a=" + a);
}

function bind(fn,context){
	return fn.bind(context);
}
var boundFunction=bind(testThis,ctx);
console.log(boundFunction(100));






