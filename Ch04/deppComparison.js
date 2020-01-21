// Your code here.
function deepEqual(obj1,obj2){
    if(obj1 === null && obj2 === null) return true; 
  	if(obj1 === null || obj2 === null) return false;
	if((obj1 === obj2)){
    	return true;
    }
    if((typeof obj1 === "object") && (typeof obj2 === "object")){
    	//first check if keys of both are equal
      	let arrOfKeys = Object.keys(obj1);
      	for(let key of arrOfKeys){
        	if(((typeof obj1[key] != "object") && (typeof obj2[key] != "object")) && obj1[key] != obj2[key]) return false;
            if(((typeof obj1[key] === "object") && (typeof obj2[key] === "object"))) return deepEqual(obj1[key],obj2[key]);
          	else if(obj1[key] != obj2[key]) return false;
        }
        return true;
    }
  return false;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true