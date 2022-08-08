
/* Partial application

Write a partial(fn, a1, a2, ....) function that allows you to fix one or more function arguments.
*/


function partial(fn,...arg1){
	return function(...arg2){
		return fn(...arg1,...arg2);
	};
};




