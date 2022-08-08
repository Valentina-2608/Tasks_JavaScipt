
/* Write a function map(fn, array), such a function and an array as input,
and processes each element of the array with this function, returning a new array.
*/



let numbers=[1,2,3,4,5];
function square(x){
	return x*x;
}

function map(fn,arr){
let res=[];
for(let elem of arr){
	res.push(fn(elem));	
}
return res;
}
console.log(map(square,numbers));//result: 1,4,9,16,25






