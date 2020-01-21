// Your code here.
function arrayToList(arr){
	let lenOfArr = arr.length;
  	if(lenOfArr === 1) return {value : arr[0], rest : null};
  	return {value : arr[0] , rest : arrayToList(arr.slice(1))};
}
function listToArray(lst){
	if(lst["rest"] === null) return [lst["value"]];
  	return [lst["value"]].concat(listToArray(lst["rest"]));
}
function prepend(numToAdd,existingList){
	if(existingList === null) return {value : numToAdd, rest : null};	
  	return {value : numToAdd, rest : existingList};
}
function nth(lst,index){
	if(index === 0) return lst["value"];
  	return nth(lst["rest"],index-1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20