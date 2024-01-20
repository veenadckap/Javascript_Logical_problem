"use strict "

// / ----------------------2 sum------------------------------------------------

// let a= prompt("Enter a value to multiple")
// let b=prompt("Enter how many time multiple"+" "+a)
// function chk(){
   

// }
// let result=chk()
// let c=[]
// for(i=0;i<b;i++){
//     c[i] = a*(i+1)
// }


// console.log(c)

// -------------------3 sum---------------------------
let a=val([2,3,5,8,-3,7,-6,-5,0])

function val(x){
    let total=0

    let total1=0
   
       for(i=0;i<x.length;i++){
        // console.log(x)
       if(x[i]>0){

        total ++
      
       }
       else if(x[i]<0){
        total1 =total1+x[i]
        
       }
    } 
    console.log(+total+","+total1)    
}
// ------------------------------------1 sum---------------------------

// let a=prompt("Enter a value : ")

// for(i=1;i<=a;i++)
// {
//     if((i%3==0) && (i%5==0) ){
//         console.log("FizzBuzz")
//     }
//     if(i%3==0){
//         console.log("Fizz")
//     }
//     else if(i%5==0){
//         console.log("Buzz")
//     }
  
//     else {
//         console.log(i)
//     }
// }

// ---------------------Missing number------------------------------------------------------
// let a=[1,2,3,4,5,6,7,8,10]

// let b=a.length
// let x=(b+2)*(b+1)/2

// for(i=0;i<a.length;i++){
//     x=x-a[i]
// }
// console.log(x)


























