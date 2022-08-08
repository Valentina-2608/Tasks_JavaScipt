

/* Write a filter() function that takes a predicate function and an array.
 It returns an array of values ​​for which the predicate will return true.

*/

let numbers=[1,2,3,4,5,6,7,8,9,10];
function isEven(x){
	return x%2==0;
}
function filter(arr,fn){
let res=[];
for(let elem of arr){
	if (fn(elem)){
		res.push(elem);	
}
}
return res;
}

console.log(filter(numbers,isEven));//result:2,4,6,8,10






