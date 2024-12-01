//for..of loop  ..............

// this loop mosty used in arrays,string,maps,sets


//for ex.  iterating over an array using for of 

const b = [1,2,3,4,5,6,7];
for(const item of b){

    console.log(item); // output: 1 2 3 4 5 6 7
}

console.log();


//for ex.  iterating over an string using for of 

const c ="vaibhav";
for(const letter of c){
    console.log(letter);  //output: v a i b h a v
}

console.log()

//. Iterating Over a Map using for…of

const m = new Map([
    ["name","vaibhav"],
    ["age",20],
    ["city","sangamner"]
]);

for(let [key,value] of m){
    console.log(`${key}:${value}`);
}

console.log();


// Iterating Over a Set using for…of

let s = new Set([1,2,3,4,5]);

for(let val of s){
    console.log(val);
}

