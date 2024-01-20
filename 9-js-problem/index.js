"use strict"
// -----------------------4 sum-------------------------------------------------
// let a=value(3,4,10)
// function value(x,y,z){
//     return x*2+y*4+z*4
// }
// console.log(a)
// -------------------------3 sum---------------------------------
// let a=[-2,6,7,-1,-2,2]
// let count=0 //1
// let count1=0
// for(let i=0;i<a.length;i++){
//     if(a[i]>0){
//      count +=1
//     }
//     else{
//         count1+=1
//     }
// }
// console.log(count+" "+"positive number"+" "+count1+" "+"negative number")
// console.log()
// ------------------------1 sum---------------------------------------------
// let a=349
// let b=a.toString()
// let d=b.indexOf(".")
// let e=b.slice(d)
// // console.log(e)
// // console.log(d)
// var f=0
// for(let i=0;i<e.length-1;i++)
// { 
//         f+=1          
// }
// console.log(+f+" "+"after the decimal")
// ------------------------------2 sum-------------------------------
// let a=[2,5,1,4,9]
// let a = [4,2,6,77,2,4,4,4,34]
// let count=[]

// for(let i=0;i<a.length-1;i++){
//     var b=0;
  
//     for(let j=0;j<a.length;j++){
//         if(a[i]==a[j]){
//            count=a[i]
//            b++
//         }
       
//     }
// }
// console.log("number"+"-"+count+" "+" "+"repeat count"+"-"+b)
// ----------------------------------------------------------------------------
// let str = "Hi welcome to DCKAP";
// let words = str.split(' ');

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].split('').reverse().join('');
// }

// let result = words.join(' ');

// console.log(result);


// ----------2-------------

// let arr = [1,"test", true, 10, 7, "array"];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         result += arr[i] * 2;
//     }
// }

// console.log(result);

// ----------3-------------


// let result = checkString(["test", "organization", "abc"], "AbC");
// function checkString(array, searchString)
//  {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() === searchString.toLowerCase()) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(result);