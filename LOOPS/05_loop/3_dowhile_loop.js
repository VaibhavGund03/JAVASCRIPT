// Do-while loop ................

//that is similar to while loop but with one key difference  loop exicuted at list once

/*


Syntax:

do{

  //code of block
}
  while(condition);


*/

//ex. count from 1 to 10 using do-while
let count =1;

do{
    console.log(count);
    count++;
}while(count<=10);

console.log();

// this example we will try to understand the differecne between the two loops

let test = 10;

do{
    console.log(test)
}while(test<10); // output: 10


console.log();

while(test<10){
    console.log(test); // output:  
}
// above program madhe do while return same value krto because a do while return atlist once but  for while loop  not applyed this properties.

console.log();
