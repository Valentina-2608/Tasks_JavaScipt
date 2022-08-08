
/* Write a function that counts the number of properties in an object.
let a={
a:1,
b:2}
let  b = function () {};
let c = [1, 2, 3];
let  d = [];
d[100]=1;
*/


function count(obj){
let arr=Object.keys(obj);
let k=0;
for (let elem of arr){
	k+=1;
}
return k;
}

console.log(count(a)); //result:2
console.log(count(b)); //result:0
console.log(count(c));//result:3
console.log(count(d));//result:1





