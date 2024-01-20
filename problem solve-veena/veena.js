// "use strict"

// ---------------------print event number (1 to 10000)------------------------------------------------------------------
// for(i=0;i<=10;i++){
//     if(i%2 ==0 )
//     {
//        console.log(i+" "+"is a even number")
//     }
// }
// ------------------------------Print a table containing multiplication tables-------------------------------------------------------------
// let a=1
// let b=12
// let c=[]
// for(i=0;i<b;i++){
//  c[i] = a*(i+1)
//  console.log(c)
// }
// console.log(c)
// ------------------------------------convert kilometer to miles------------------------------------------
// let a=Number(prompt("Enter a value"))
// let b=1.609344
// // let x=a/b
// // console.log(x)
// if(a%b){
//     x = a/b
//     console.log(x+" "+"miles")

// }
// ---------------------------------Sort an array from lowest to highest-----------------------------------
// let a=[23,45,66,98,-45,87]
// let b;
// for(i=0;i<a.length;i++){
//     for(j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//          b=a[i]
//          a[i]=a[j]
//          a[j]=b
//         }
//         // console.log(a)
//     }
// }
// console.log(a)

// -------------------------------------------------------------------------------
var a = [1,2,3,4,5,6,7]
let  b =[];
console.log(a)
for (i =a.length-1; i >=0;i--) 
{

  b +=a[i]
    // console.log(i+" outer i")
    // for (j=1; j<a.length; j++) 
    //   {
    //     console.log(j+" incoming j")
    //     b[j] += a[i]
    // }
    // console.log(b[j])
}
console.log(b)

// // ---------------------------------------------------------------
// let a =("dcKAP")
// let b = a.split('')
// for (i=0; i<b.length;i++){
//     if (i%2==0){
//         b[i]=b[i].toUpperCase()
//     }
//     else{
//         b[i]=b[i].toLowerCase()
//         b[i]=b[i].toLowerCase()
//     }

// }
// console.log(b.join(""))
// -------------------------------- number pattern------------------------

// let n=3
// let d;
// let k='*'
// for(i=n;i>0;i--){
//     for(j=i;j>0;j--){
//       d = k+ " "
//       console.log(d)
//     }
//     console.log(d)
// }
// console.log(n)
// ---------------------------------------string sum--------------------------------
// let a="hello"

// // let b=parseInt(a)
//  if(typeof(a) == 'number')
//  {
//     console.log(a+" "+"It's not a string")
//  }
//  else{
//     console.log(a+" "+"It's a string")
//  }
// ---------------------------------------------------------------------------
// let a = prompt("Enter a word")
// b = a.trim()
// if(b=="")
// {
//     console.log("True")
// }
// else{
//     console.log("false")
// }

// "or this"

// if (b.length == 0) {
//     console.log("True")

// }
// else {
//     console.log("false")
// }

