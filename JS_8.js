
/* Write a pluck function that takes an array of objects and returns an array of values ​​for a specific field.

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

*/


function pluck(objects, fieldName) {
let res=[];
for(let elem of objects){
	res.push(elem[fieldName]);
}
return res;
};


console.log(pluck(characters,'name'));





