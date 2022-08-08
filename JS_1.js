
/* Write a function to create a sequence generator (start, step).
When called, it returns another generator function, which, each time it is called, 
gives a number by 1 more, and so on ad infinitum. The initial number from which to start counting,
 and the step are set when creating the generator. The step can be omitted, 
then it will be equal to one. The initial default value is 0. You can create as many generators as you like. 

*/

function sequence(start=0, step=1){
let number=start;
	return function(){
	let Value=number;
	number+=step;
		return Value;
	}
}




