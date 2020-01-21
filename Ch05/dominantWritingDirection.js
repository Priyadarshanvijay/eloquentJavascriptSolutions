function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let direction = groupName(item);
    let known = counts.findIndex(c => c.direction == direction);
    if (known == -1) {
      counts.push({direction, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}


function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  });

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({direction, count}) => {
    return { "cnt" : Math.round(count * 100 / total),
              "scr" : direction};
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