
/* Write a function fmap(a, gen) that takes 2 functions as input, a and gen, where gen is a generator function like this:
it was in the first challenge. fmap returns a new generator function,
which, on each call, takes the next value from gen and passes it through the a function.

*/
let fmap = function(a, gen){
return function(){
	let res=[];
	for(let i=0; i<arguments.length;i++){
		res[i]=arguments[i];
	}
	x=a(gen.apply(null,res));
	return x;
}
}



