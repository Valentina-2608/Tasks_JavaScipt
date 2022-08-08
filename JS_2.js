
/* Create a function take(fn, count) 
that calls the function fn the specified number (count) 
times and returns an array with the results of the calls.
*/

function take(fn, count) {
let res=[];
for(let i=0;i<count;i++){
res[i]=fn();
}
return res;
}






