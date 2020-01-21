// Your code here.
let loop = (freq,cond,iter,toDo) => {
    // for(let i = freq ; cond(i) ; i = iter(i)) toDo(i);
    if(!cond(freq)) return;
    toDo(freq);
    loop(iter(freq),cond,iter,toDo);
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1