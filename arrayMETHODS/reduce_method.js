// the reduce method is exicute a reduce function for aray elemet .
// return asingle value
// method does not exicute the function fo empty array element.
// method does not change  the original array


//example

const number = [20,30,21];

let newnumber = number.reduce((h1,h2) => {
    return h1+h2;
    
})
console.log(newnumber); //output:71
// ya reduce madhe maz function addition aahe so tich working ...... array madhe first anni second number chi addition krelaani ji addition aali tichi +next number chi addition asel. punha result + nextnmuber and finally output je asel te all addition asel.



console.log();

// OR

const reduce_fun =(h1,h2)=>{
    return h1+h2;
}
let new_number = number.reduce(reduce_fun)
console.log(new_number);  // output 71ṇ




