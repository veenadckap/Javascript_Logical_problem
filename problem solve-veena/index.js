"use strict"
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
// for( let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//          b=a[i]
//          a[i]=a[j]
//          a[j]=b
//         }
//         // console.log(a)
//     }
// }
// console.log(a)

// --------------------------reverse array-----------------------------------------------------
// let a = [1, 2, 3, 4, 6, 9];
// let b = [];

// for (let i = a.length - 1; i >= 0; i--) {
//     b +=" "+a[i];
// }

// console.log(b);
// -----------------palindrome---------------------------


// function val(x){
//     if(x<=0 || (x%10===0 && x!==0)){
//         return false
//     }
//     let a=0;
//     let b=x;
//     while(x>0){
//         let c=x%10
//         a=a*10+c
//         x=Math.floor(x/10)
//     }
//     return a===b

// }
// var a=val(121)
// console.log(a)

// let a='nan'
// let b=''

//   for(var j=a.length-1;j>=0;j--){
//       b+=a[j]
//   }

// // console.log(b)
// if(b==a){
//   console.log("palindrome")
// }
// else{
//   console.log("not a palindrome")
// }

// function chk(x){
//     if(x<=0 || (x%10==0 && x!==0)){
//         return false
//     }
//     let b=0;
//     let c=x;
//     while(x>0){
//         let d=x%10
//         b=b*10+d
//         x=Math.floor(x/10)
//     }
//     return b==c
// }
// var a=chk(121)
// console.log(a)
// --------------------------prime number-------------------------------------------
// let a =prompt("Enter a value")
// let b=1;
// for(let i=2;i<a;i++){
//     if(a%i==0){
//         b=0
//     }
// }
// if(b==1){
//     console.log("It is a prime number");
// }
// else{
//     console.log("It is not prime number");
// }
// -------------------------sum the array--------------------
// let a=[1,2,4,5]
// var b=0;
// for(i=0;i<a.length;i++){
   
        
//             b =b+a[i]

// }

// console.log(b)
// ---------------------------filter negative numbers-----------------------------------------------
// let a=[2,3,5,8,-3,-7,-6,5,0]
// let c=[]
// for(i=0;i<a.length;i++){
//     if(a[i]<0){
//      c +=a[i]
//     }
// } 
// console.log(c)
// ------------------------------find the vowels----------------------------------------
// let a=("welcome") 
// let count=0
// for(let i=1;i<=a.length;i++){
//     if((a[i]=="a") || (a[i]=="e") || (a[i]=="i") || (a[i]=="o") || (a[i]=="u"))
// // for(let i=0;i<a.length;i++){
//     // // console.log(i)
//     // if((a.charAt(i)=="a") || (a.charAt(i)=="e") || (a.charAt(i)=="i") || (a.charAt(i)=="o") ||(a.charAt(i)=="u"))
   
//      {
//       count++
//      }
// }
// console.log(count)

// -----------------------boolean----------------------------------------
// let a=prompt("Enter a value")
// for(let i=0;i<a.length-1;i++){
//     if(a%10==0){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
// -----------------------------------------------------------
// let a =("DCKAP")
// let b = a.split('')
// for (let i=0; i<b.length;i++){
//     if (i%2==0){
//         b[i]=b[i].toUpperCase()
//     }
//     else{
//         b[i]=b[i].toLowerCase()
      
//     }

// }
// console.log(b.join(""))
// -------------------------------- number pattern------------------------

// for(let i=1; i <=8; i++)
// {
// let a=" "
//  for(let j=1; j<=i; j++)
// {
//      a += j+" ";
//  }                                     
//  console.log(a)
// }
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

// ---------------------------Golf---------------------------------
// let par=4
// let stroke=1



//     if((par==4 && stroke==1) || (par==1 && stroke==1)){
//         console.log("Hole-in-one")
//     }
//     else if((par == 4 && stroke ==2) || (par == 5 && stroke ==2)){
//         console.log("Eagle")
//     }
//     else if((par == 4 && stroke ==3)){
//         console.log("Birdie")
//     }
//     else if((par == 4 && stroke == 4) || (par ==5 && stroke==5)){
//         console.log("Par")
//     }
//     else if((par == 4 && stroke ==5)){
//         console.log("Bogey")
//     }
//     else if((par == 4 && stroke ==6)){
//         console.log("Double Bogey")
//     }
//     else if((par ==4 && stroke==7) || (par ==5 && stroke == 9)){
//         console.log("Go Home")

//     }

// ------------------fibonacci series-------------------------------------
// let x=prompt("enter a number")
// let a=0;
// let b=1;
// let c;
// for(let i=0;i<x;i++){
//     c=a+b
//     a=b
//     b=c
//     console.log(a)
// }
// --------------------------Armstrong numbers  --------------------------------------------------
// var arm=prompt("enter a number");

// var a=arm.split("");
// console.log(a);

// var b=parseInt(arm);
// console.log(b);

// var c=0;

//     for( var i=0;i<=a.length;i++){
//         c=i;

//     }
//     console.log(c);

// var d=[];
// var e=0;

//     for(var j=0;j<=a.length-1;j++){
//         d[e]=(a[j]**c);
//         e++;
//     }
//     console.log(d);


// var result=0;
//     for(var k=0;k<=d.length-1;k++){
//         result += d[k];
//     }

// console.log(result);

// if(b===result){
//     console.log(b+" is a Armstrong number")
// }
// else{
//     console.log(b+" is not a Armstrong number")

// }
// or
// let a=123
// let b=a.length
// let c=0
// let d=a
// while(d>0)
// {
//   let r=d%10
//    c += r**b
//      d=parseInt(d/10);
// }
// if(c==a){
//     console.log(a+" "+"is a armstrong")
// }
// else{
//     console.log(a+" "+"is not a armstrong")
// }
// ------------------------------fibonacci series---------------------------------------------------------

// let a=prompt("Enter a value")
// let b=1
// let c=0
// let d;
// for(let i=0;i<a;i++){
//     d=c+b
//     c=b
//     b=d
//     console.log(d)
// }
// ----------------------------------Remove Duplicate -------------------------------------
// let a=val[1, 2, 3, -1, -2, 3, 4, 5, 1];

// function val(x){
//    let b=[]
//    let  c=0
// for(let i=0;i<x.length-1;i++){
   
// if(x[i]>=0 && b.indexOf(x[i])==-1){
//    b[c] =x[i]  
//   c++
// }
// }
// console.log(b)
// }

// let a=[1,2,3,4,5,6,7,8,10]

// let b=a.length
// let x=(b+2)*(b+1)/2

// for(i=0;i<a.length;i++){
//     x=x-a[i]
// }
// console.log(x)
// ---------------------------Missing number--------------------------------
// let a=[1,2,3,4,5,6,7,8,10]

// let b=a.length
// let x=(b+2)*(b+1)/2

// for(let i=0;i<a.length;i++){
//   console.log(x)
//     x=x-a[i]
// }
// console.log(x)
// -------------------------sort---------------------------------------
// let a=[23,45,66,98,-45,87]
// let b;
// for( let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//          b=a[i]
//          a[i]=a[j]
//          a[j]=b
//         }
//       //   console.log(a)
//     }
// }
// console.log(a)
// ------------------------convert age into days----------------------------------------------------
// let a=calcAge(65)

// function calcAge(x){
//    let b=x*365
//    console.log(b)
// }
// -------------------------------------------------------------------
// let n=5
// for(let i=1;i<=n;i++){
//   let arr=[]
//     for(let j=1;j<=n-i+1;j++){
//           arr +="*"+" "
//     }
//     console.log(arr)
// }
// ---------------------------------------------------
// let n=5
// for(let i=1;i<n*2;i++){
//   let arr=[]
//   for(let j=1;j<n*2;j++){
//     if(i==j || j==n+n-1){
//       arr.push(i)
//     }
//     else{
//       arr.push(" ")
//     }
//     console.log(arr.join(""))
//   }
// }
// ---------------------------------------------------------------------------------
   let str="hi veena how are you veenaveena"
    let words = str.split(' ');
    console.log( words)
    
    let c = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > c) {
        c = words[i].length;
      }
    }
    console.log(c)


// let arr =["apple","orange","pineapple"]
// let longest = ""
// let count =arr[0].length;
// for(let i =0;i<arr.length;i++)
// {
//     if(arr[i].longest>count)
//     {
//          count=arr[i]
//          longest=arr[i]
//     }
   
// }

// console.log(longest)



