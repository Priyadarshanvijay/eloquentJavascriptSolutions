// Your code here.
countChar = (inp,toFind) => {
	let lenOfString = inp.length;
  	let cnt = 0;
  	for(let i = 0 ; i < lenOfString ; ++i){
    	if(inp[i] === toFind) ++cnt;
    }
  	return cnt;
}
countBs = (inp) => {
	return countChar(inp,"B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
console.log(countBs("BBC"));
// → 4