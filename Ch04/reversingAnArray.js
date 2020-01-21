// Your code here.
function reverseArray(arr){
	let newArr = [];
    let lengthOfArr = arr.length;
  	for(let eachElement = lengthOfArr-1 ; eachElement >= 0 ; --eachElement){
    	newArr.push(arr[eachElement]);
    }
  	return newArr;
}
function reverseArrayInPlace(arr){
	let lengthOfArr = arr.length;
    for(let front = 0,back = lengthOfArr-1 ; front < back ; ++front,--back){
    	arr[front] = arr[front]^arr[back];
		arr[back] = arr[front]^arr[back];
      	arr[front] = arr[front]^arr[back];
    }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]