// filter an array with vslues thst passes a test.
//yamdhe yekhade function pass kel tr te true true valuse return krte 

//for ex: mla yeka array madhun 20 pekhsa mothe je number aahe te fakt pahijet tr mi tethe  num>20 ase function takun maze output filter krun show krel

// exapmle

let arr = [23,11,244,33,10];
 let a2 = arr.filter((a)=>{
    console.log(a>20) // output: true,false,true,true,true,false.
    return a>20;
    
})
console.log(a2) // output : 23,24,33
