for(let curLine = 0 ; curLine < 7 ; ++curLine){
    let stringToPrint = "";
      for(let curChar = 0 ; curChar < curLine+1 ; ++curChar){
          stringToPrint += "#";
      }
    console.log(`${stringToPrint}\n`);
  }