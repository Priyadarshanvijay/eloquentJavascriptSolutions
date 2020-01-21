function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return { "cnt" : Math.round(count * 100 / total),
              "scr" : name};
  });
}

function dominantDirection(text) {
  // Your code here.
  //first find dominant script
  let dominantScript = null;
  let listOfScrs = textScripts(text);
  for(let doms of listOfScrs){
  	if((dominantScript == null) || (doms.cnt > dominantScript.cnt)){
    	dominantScript = doms;
    }
  }
  //return direction of dominant script
  return dominantScript.scr;
}

//console.log(SCRIPTS);
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl