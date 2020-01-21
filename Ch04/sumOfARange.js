// Your code here.
function range(beg,end,step){
  	if(step === undefined) step = 1;
	let arrToRet = [];
  	if(step > 0)
    {
      for(let i = beg ; i <= end ; i+=step){
    		arrToRet.push(i);
    	}
    }
  	else{
  		for(let i = beg ; i >= end ; i+=step){
    		arrToRet.push(i);
    	}
    }
  return arrToRet;
}
function sum(numbers){
	let sumToRet = 0;
  	for(let number of numbers){
    	sumToRet += number;
    } 
   return sumToRet;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55