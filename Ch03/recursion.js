// Your code here.
isEven = (inp) => {
	if(inp == 1) return false;
  	if(inp == 0) return true;
  	if(inp < 0) return isEven(-inp);
  	return isEven(inp-2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??