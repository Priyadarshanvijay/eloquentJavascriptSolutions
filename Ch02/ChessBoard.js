let size = 8;
for(let eachLine = 0 ; eachLine < size ; ++eachLine){
  let strToOut = "";
	for(let eachChar = 0 ; eachChar < size ; ++eachChar){
    	if(((eachLine+eachChar)&1) == 0){
        	strToOut += " ";
        }
      	else{
        	strToOut += "#";
        }
    }
  console.log(strToOut);
}