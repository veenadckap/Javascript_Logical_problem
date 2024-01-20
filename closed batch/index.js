'use strict'
// let a=prompt("Enter a sentence")
// let b='java'
// let c=a.toLowerCase()
// if(c.indexOf(b)==0){
//     console.log("Start with java")
// }
// else{
// console.log("Not start with java")
// }  


// let a=prompt("Enter a sentence")
// let b='java'
// let c=true;
// for(let i=0;i<b.length;i++){
//     if(!(a[i]==b[i])){
//        c=false
//        break;
//     }
// }
// if(c==true){
//     console.log("start with java")
// }
// else{
//     console.log("start not with java")
// }


// let a=prompt("Enter a sentence")
// let b=a.slice(0,4)
// // console.log(b)
// if(b=="java"){
//     console.log("String start with java")
// }
// else{
//     console.log("String not start with java")
// }



// ----------------------------range------------------------------------------------------------
// let a=parseInt(prompt("Enter a number"))
// let b=parseInt(prompt("Enter the start range"))
// let c=parseInt(prompt("Enter the end range"))

// if((a>b) && (a<c)){
//     console.log("inside the range")
// }
// else{
// console.log("outside the range")
// }

// ---------------------------------Divided into number--------------------------------------------------------------
// let a=prompt("Enter a number")
// if(a%5==0 && a%8==0){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// -----------------------------------------searching-----------------------------------------------------

// let a=['apple','banana','cherry','orange']
// // let b='kiwi'
// // let c=a.findIndex(b)
// // console.log(c)
// let b=false

// for(let i=0;i<a.length;i++){
//     if(a[i]==="orange"){
//        b=i
//     }

// }
// console.log(b)
// -----------------------------------find missing number------------------------------------------------------------
// let a=[1,2,4,3,5,6,8]
// let b=a.length
// let c=(b+2)*(b+1)/2
// // console.log(c)
// for(let i=0;i<a.length;i++)
// {
//     c=c-a[i]
//     // console.log(c);
// }

// console.log(c);

// --------------------------------------------divides -----------------------------------------------------------


// for(let i=1;i<=20;i++){
//     if(i%2==0 && i%4!=0 && i%5!=0){
//         console.log(i)
//     }

// }

// ----------------------------------------------------smallest sum-----------------------------------------------------------
// let a=[2,9,80,67,40,6]
// let temp;
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[i]<a[j]){
//         temp=a[i]
//         a[i]=a[j]
//         a[j]=temp
//         }

//     }
// }

// console.log(a)


// let c = a[0]+a[1]
// console.log(c)
// ---------------------------------------------------------------------------------------------------
// let a=[10,14,7,19]
// let b=[];
// for(let i=0;i<a.length;i++){
//     if(i%2==0 ){
//         b[i]=a[i]+2
//     }
//      else 
//           {
//         b[i]=a[i]-2
//     }

// }
// console.log(b)
// -------------------------------------1. Multiples of 3 or 5-------------------------------------------------------------------
// let n=10
// let a=0
// for(let i=0;i<n;i++){
//     if((n%3==0) || (n%5==0)){
//          a+=i
//     }
//     console.log(a)
// }
// ----------------------------------2-odd or even----------------------------------------
// let a=prompt("enter a number")  

// if(a%2===0){
//            console.log(a+" "+"is even number")
//     }
//     else {
//         console.log(a+" "+"is a odd number");
//     }
// // ----------------------------------3-clock----------------------------------------
// let a=value(0,1,1)

// function value(h,m,s)
// {
//     return (h*60*60+m*60+s)*1000
// }
// console.log(a)
// --------------------------------------4. Returning Strings----------------------------------------
// let a=value(prompt("Enter a your name "));
// function value(x){
//     return "hello"+" "+x+" "+"how are you doing today?"
// }
// console.log(a)
// -----------------------------5-century from year----------------------------------------
// let a=1900
// let b=a
// if(a%100>0){
//     b=Math.floor((a)/100);
//     b=b+1
// }
// else if(b%100==0){
//     b=Math.floor((a)/100)
// }
// else if(b<100 && b>0){
//     b=(Math.floor((a)/100)+1)
// }
// console.log(b+" "+"is century")
// -----------------------------6-hydrated----------------------------------------
// let a=1787
// let c=Math.floor(a*0.5)
// console.log(c)
// -----------------------------------7-n is divisible by two numbers x AND y----------------------------------------
// let a=value(3, 3, 4)

// function  value(n,x,y) {
//    if((n%x==0) && (n%y==0)){
//     console.log("true")
//    }   
//    else{
//     console.log("false")
//    }
// }
// ----------------------------------------------8-vowels--------------------------------------------------
// let a="veena"
// let b=["a","e","i","o","u"]
// let c=0
// a=a.split('');
// console.log(a)
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//     if(a[i]==b[j]){
//       c+=1
//     }
// }
// }
// console.log(c)
// --------------------------------9-remove vowels--------------------------------------------------------------
// let a="veena";
// let b=["a","e","i","o","u"]
// let c=''
// // a=a.split('');
// console.log(a)

// for(let i=0;i<a.length;i++){
//     let count = 0;
//     for(let j=0;j<b.length;j++){
//     if((a[i]!=b[j])){
//       count++;
//     }
// }
//     if(count == 5)
//     {
//       c+=a[i];
//     }
// }
// console.log(c)

// let a="veena";
// let b=["a","e","i","o","u"]
// let c=''
// // let count = 0;
// // a=a.split('');
// console.log(a)
// for(let i=0;i<a.length;i++){
//     let flag = true;
//     for(let j=0;j<b.length;j++){
//     if((a[i]==b[j])){
//       flag = false;
//       break;
//     }
// }
//     if(flag == true)
//     {
//       c+=a[i];
//     }
// }
// console.log(c)
// ---------------------------10---odd number times------------------------------------------------
// let a=[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, -2]
// let b=0
// for(var i=0;i<a.length;i++){
//     var count=0
//     for(let j=0;j<a.length;j++){
//        if(a[i]===a[j]){
//         count++
//        }
//     }
//     if(count%2!==0){
//         b=(a[i])
//     }
// }
// console.log(b)
// ----------------------------falsy value----------------------------------------
// let a=[true,90,"dckap",-32,88]

// var c=true

// for(let i=0;i<a.length;i++){
//       if(!(a[i])){
//           c=false
//           break;
//       }

// }
// if(c==false){
//     console.log("false")

// }
// else{
//     console.log("true")
// }
// -----------------------------------------------------------------------------
// let a="DCkap"
// let c=a.toUpperCase()
// console.log(c)
// let d=0
// for(let i=0;i<a.length;i++){
//     // let b=0
//     for(let j=0;j<c.length;j++){
//       if(a[i]==c[j]){

//          d+=1
//       }
//     }

// }
// console.log(d)
// -----------------------------------find the largest length-------------------------------
// let str="hi veena how are you"
// let words = str.split(' ');
// console.log( words)

// let c = 0;

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > c) {
//     c = words[i].length;
//   }
// }
// console.log(c)
// --------------------------------------find the shortest length-----------------------------------------------------
//  const words = ["cat", "v","dog", "elephant", "lion",];

// let shortestLength = words[0].length;

// for (let i = 1; i < words.length; i++) {

//  const Length = words[i].length;

//   if (Length < shortestLength) {
//       shortestLength = words[i];
//   }
// }

// console.log("Shortest length:", shortestLength);

// ---------------------------28--isogram------------------------------------
// let a="algorithh";
// let flag=true
// let b=0
// for(let i=0;i<a.length;i++)
// {
//     for(let j=i+1;j<a.length;j++)
//     {
//         if(a[i]==a[j])
//         {
//          flag=false
//           break;
//         }

//     }
// }
// if(flag==true){
//     console.log("is a isogram")
// }
// else{
//     console.log("false")
// }
//  --------------------------------------------------------------------------------------------------
// let a=[2,4,3,1,5,6,7,]
// let b;
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[i]<a[j]){
//             b=a[i]
//             a[i]=a[j]
//             a[j]=b
//         }
//     }
// }
// console.log(a)
// let c=a[0]+" "+a[a.length-1]
// console.log(c)
// --------------------------------18 mumbling---------------------------------------
// let a = 'abcde'
// let result = '';
// for (let i = 0; i < a.length; i++) {
//   result += a[i].toUpperCase();
//   for (var j = 0; j < i; j++) {
//     result += a[i].toLowerCase();
//     // console.log(result)
//   }
//   if (j < a.length -1) {
//     result += '-';
//   }
// }
// console.log(result)
// -------------------------19---length more than 5 reverse -----------------------------------------------------------
// let a="hey fellow warriors"
// let arr=a.split(" ")
// console.log(arr)
// for(let i=0;i<arr.length;i++){
//   if(arr[i].length>=5){
//     let str='';
//     for(let j=arr[i].length-1;j>=0;j--)
//     {
//       str+=arr[i][j];
//     }
//     arr[i]=str;
//   }
// }
// console.log(arr.join(" "))
// ------------------------------60--sort of zero at last-------------------------------------------------------------------------
// let a=[0,1,7,0,5,12,0]

// let newArr=[]
// let arr=[]
// for(let i=0;i<a.length;i++){
//     if(a[i] == 0){
//         newArr.push(a[i])
//     }

//     else{
//         arr.push(a[i])
//     }

// }
// console.log(newArr)
// console.log(arr.concat(newArr))

// let newArr=[]
// let arr=[]
// let temp;
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[i]<a[j]){
//             temp=a[i]
//             a[i]=a[j]
//             a[j]=temp

//         }
//     }

// }
// for(let k=0;k<a.length;k++){
//     if(a[k]==0){
//       newArr.push(a[k])
//     }
//     else{
//         arr.push(a[k])
//     }
// }
// console.log(arr.concat(newArr))
// console.log(a)
// ----------------------------55--uppercase in first letter ------------------------------------------------------------
// let a = 'hello'
// let arr = []

//    for(let i=0;i<a.length;i++){
//        let arr1 = a.split('')
//           console.log(arr1);
//           arr1[i]=arr1[i].toUpperCase()         
//           arr[i] = arr1.join("")

// }
// console.log(arr);
// ---------------------count lowercase-------------------------------------------------
// let a=prompt("Enter a string")
// let count=0
// let b=a.split("")
// console.log(b);
// for(let i=0;i<a.length;i++){
//        if(a[i]>="a" && a[i]<="z" ){
//               count++
//        }
// }
// console.log(count)
// ----------------------------------------------------------------
// let a=prompt("enter a value")
// let b="-"
// console.log(b.concat(a))
// ---------------------------------merge and sort-------------------------------
// let a=[1,3,5,7]
// let b=[2,4,6,8]
// let c=a.concat(b)
// console.log(c)
// let temp;
// for(let i=0;i<c.length;i++){
//     for(let j=0;j<c.length;j++){
//         if(a[i]<a[j]){
//             temp=a[i]
//             a[i]=a[j]
//             a[j]=temp

//         }
//     }

// }
// -------------------------------------------------------------------------------------------------
// let a=[2,-1,4,8,10]
// let b=0
// for(let i=0;i<a.length;i++){
//     if(a[i]>0){
//         b+=a[i]
//     }
//     else{
//         b-=a[i]
//     }
// }
// console.log(b)
// --------------------sort in first 5 number-----------------------------
// let a=[1, 1, 0, 1, 3, 10, 10, 10, 10, 1]
// let b=0
// let temp;
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[i]>a[j]){
//             temp=a[i]
//             a[i]=a[j]
//             a[j]=temp

//         }
//     }

// }
// for(let k=0;k<=4;k++){
//     b+=a[k]
// }
// console.log(a)
// console.log(b)
// --------------------------------------25-Array.diff------------------------------
// let a=[1,2,3,4,6]
// let b=[1,2,6]
// let c=[]

// for(let i=0;i<a.length;i++){
//     let flag=false
//     for(let j=0;j<b.length;j++){
//         if(a[i]==b[j]){
//             flag=true
//             break;
//         }
//     }
//     if(flag==false){
//         c.push(a[i])
//     }
// }
// console.log(c)

// ---------------------26-uppercase first letter in each word----------------------------------------------------------
// let a= "the quick brown fox veena"
// let c=a.split(" ")
// console.log(c)
// let b=" "
// for(let i=0;i<c.length;i++){
//         c[i] = c[i][0].toUpperCase()+c[i].slice(1)
// }
// console.log(c)
// -----------------------matrix--------------------------------------------
// let a=[
//    [1,2,3,4],
//    [3,4,5,6]
// ]

// let b=[
//    [2,3,4,5],
//    [4,5,7,8]
// ]

// let c=a

// for(let i=0;i<a.length;i++)
// {
//    for(let j=0;j<a[i].length;j++)
//    {
//        c[i][j] =a[i][j]*b[i][j]
//    }
// }
// console.log(c)
// -----------------27--complementary DNA---------------------------------------
// let a='ATCG'
// let b=a.split("")
// let c=''
// // console.log(b)
// for(let i=0;i<b.length;i++){
//      if(a[i]=="A"){
//          c+="T"
//      }
//      else if(a[i]=="T"){
//           c+="A"
//      }
//      else if(a[i]=="G"){
//       c+="C"
//      }
//      else if(a[i]=="C"){
//         c+="G"
//      }
//      }

// console.log(c)
// -------------------------------29--FizzBuzz-------------------------------------------------------
// for(let i=0;i<=50;i++){
//    if(i%3==0 && i%5==0){
//       console.log("FizzBuzz")
//    }
//    else  if(i%3==0){
//       console.log("Fizz")
//    }

//    else if(i%5==0){
//       console.log("Buzz")
//    }
//    else{
//       console.log(i)
//    }
// }
// --------------------30---. Counting Duplicates-------------------------------------------------------
// let a='abcdab1122'
// a=a.toLowerCase()
// let c=0
// for(let i=0;i<a.length;i++)
// {
//     for(let j=i+1;j<a.length;j++)
//     {
//         if(a[i]==a[j])
//         {
//          c++
        
//          }

//     }

// }

// console.log(c)

//or

// let a='abAb'
// a=a.toLowerCase()
// let b=a.split("")
// console.log(b)
// console.log(a)
// let count=0
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<b.length;j++){
//         if(a[i]===b[j]){
//             console.log(a[i])
//             count++
//         }
//     }
// }
// console.log(count)
// --------------------------------------31-- Duplicate Encoder------------------------------
// let a="Success"

// let b=a.toLowerCase()
// let c=''
// for (const d of b) {
   
//     let e=b.indexOf(d)
//          console.log(e)
//     console.log(d)
//     if(b.indexOf(d)!==b.lastIndexOf(d)){
//         c+=")"
//        }
//        else{
//            c+="("
//        }
// }
     

// console.log(c)
// ------------------32--Reversed Strings-------------------------------------------------------
// let a = 'i.like.this.program.very.much'
// let c = ""
// for(let i=a.length-1;i>=0;i--)
// {
//    c+=a[i]
// }
// console.log(c)
// ------------------------35--Replace with Alphabet Position-----------------------------------------
// let a = 'veena'
// let b = a.split('')
// let charset= 'abcdefghijklmnopqrstuvwxyz'

// for(let i=0;i<a.length;i++){
//     let x = charset.indexOf(b[i])
//     let y =x+1
//     b[i]= y
//     console.log(y)
// }
// console.log(b.join(' '))
// -------------------------------------------------------------------------------
// let a=["d","b","c","b","c","a","d"]
// let b=[]
// let c=[]
// // let temp
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]==a[j]){
//             b.push(a[i])

//         }
//         else{
//             if(!(a[i].includes(b[i]))){ 
//                 console.log(b[i])
//                 c.push(a[i])
//             }


//         }
//     }

// }
// console.log(b)
// console.log(c)

// for(let i=0;i<a.length;i++){
//     for(let j=1;j<a.length;j++){
//         if(a[i]!=a[j]){
//             b[i]=a[i]
//             a[i]=a[j]
//             a[j]=b[i]

//         }
//     }

// }
// console.log(b);
// // --------------------------------------13--create a phone number---------------------------------------
// let a=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// // console.log(b)
// let c="("+a.slice(0,3)+")"+" "+a.slice(3,6)+"-"+a.slice(7)

// // let b =  c.join(" ")
// console.log(c)
// let d=c.replaceAll(",","")
// console.log(d)

// // let a=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// for(let i=0;i<a.length;i++){
//       number="("+a[0]+a[1]+a[2]+")"+" "+a[3]+a[4]+a[5]+"-"+a[6]+a[7]+a[8]+a[9]
// }
// console.log(number)
// ----------------------------- Square each digit------------------------------------------------------
// let a=[2,1,1,2]
// // let a="2112"
// let b=[]
// for(let i=0;i<a.length;i++){
//    for(let j=0;j<a.length;j++){
//       b[i] =a[i]*a[j]
//    }

// }
// console.log(b.join("")) 

// let n = 50
//     let count =0
//     let x;
//     for (let i=1;i<n;i++){
//         x=i**2
//         if(x<=n){
//             count = count+1
//             console.log(x)
//         }
//     }
//     console.log("count of perfect squares: "+count)
// if(count%2!==0) {
//     console.log("odd")
// }

// }

// var isSquare = function(n){
//    for ( var i=0; i<n; i++){

//    var product= i*i;
// //    console.log(product)
//    if( product === n ) 

//    return true;
//    }
//   return false;
//  }
//  console.log(isSquare(9))
//  console.log(isSquare(-1))
//  console.log(isSquare(12))
// let a=25
// let b=[]
// for(var i=0;i<a;i++){
//     b .push(i*i)

// }
// console.log(b)
// if(b===a){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// -------------------------------59--Valid Palindrome-----------------------------------------------------
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
// --------------------------------------52--First Non-repeating string------------------------------
// let a='stress'
// let b=''

// for(let i=0;i<a.length;i++){
//       let flag=false
//     for(let j=0;j<a.length;j++){
//          if(i !==j && a[i]===a[j]){
//             flag=true
//             break;
//          }
//     }
//     if(!flag){
//         b=a[i]
//         break
//     }

// }
// console.log(b)
// ----------------------------------------------------------------
// let a = [2, 5,2, 10, 1, 10, 4, 10, 8, 10];
// let result = [];
// let Count = 0;


// for (let i = 0; i < a.length; i++) {

// let currentCount = 0;
//     for (let j = 0; j < a.length; j++)
//     {
//         if (a[i] === a[j])
//         {
//             currentCount++;
//         }
//     if (currentCount > Count)
//     {
//         result = [a[i]]; 
//         Count = currentCount;
//     } 
// }


//     }
//     console.log(result,Count);
// -------------------------------36--Two Sum---------------------------------------------------------------
//     {
//         let a=[2,7,11,5]
//       let b=9
//       let c=[]
//       let d=[]
//       for(let i=0;i<a.length;i++){
//        for(let j=0;j<a.length;j++){
//          
//           if(a[i]+a[j]==9){
//               c=a[i]
//               d=a[j]

//           }
//       }
//       }
//       console.log(a.indexOf(d),a.indexOf(c))

//   }
// ----------------------------------Find the duplicate array--------------------------------------------
// let a=[2,3,1,2,3]

// let b=[]
// let c=0
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]==a[j]){
//             b.push(a[j])
//             c++
//         }
//     }
// }
// console.log(b)
// console.log(c)
// ----------------------------second largest-----------------------------------------------------------------
// let a=[37,12,1,10,99,34,1,35]
// let largestNum=a[0]
// let secNum=a[1]

// let b=[]

// for(let i=0;i<a.length;i++){
//     if(a[i]>largestNum){
//          secNum=largestNum
//         largestNum=a[i]

//     }
//     else if(a[i]>secNum && a[i]!=largestNum){
//         secNum=a[i]
//     }

// }
// console.log(largestNum)
// console.log(secNum)
// --------------------------------------42---Remove Duplicates from Sorted Array----------------------------------
// {
//     let arr=[0, 1,1,1,2,2,2,3,3,3,4]
//     var a=[];
//      var len=arr.length-1
//      console.log(len)
//     for(var i=0;i<len;i++){
//         if(arr[i]!==arr[i+1]){
//             a.push(arr[i]);
//         }
//     }
//     a.push(arr[i]);
//     console.log(a.length)
// }
// ---------------------------------------46---#hashtag----------------------------------------------------

// let a='coding for life'
// a=a.trim()
// let g=a.replaceAll("  ","")
// let d=g.split(" ")
// let n=" "
// console.log(d)
// if(a.length<=140){
//     for(let i=0;i<d.length;i++){
//         n+=d[i][0].toUpperCase()+d[i].slice(1)
//     }
//     console.log(n)
// }
// else{
//     console.log(false)
// }
// -----------------------------24-outlier identifier--------------------------------------------------------------
// {
//     let a=[160,2,4,3]
//     let b=[]
//     let count=0
//     let c=[]
//     let count1=0
//     let diff=[]
//     for(var i=0;i<a.length;i++) break
//     {
//         if(a[i]%2===0){
//             b.push(a[i])
//             count++
//         }
//         else if(a[i]%2!==0){
//             c.push(a[i])
//             count1++
//             // console.log(b)
//         }

//     }    
//     if (count === 1) {
//         console.log(b); 
//     } else {
//         console.log(c); 
//     }

//     console.log(b,count)
//     console.log(c,count1)
// }
// -------------------------------------------------43---Kids With the Greatest Number of Candies------------------------------------------------------
// {let candies = [12,1,12]
//   let extra = 1
//   let c = []
//   let output = []
//   for (let i = 0; i < candies.length; i++) {
//       c.push(candies[i] + extra)
//   }
//   console.log(c)
  
//   for (let j = 0; j < c.length; j++) {
//       flag=true
//       for (let k = 0; k < candies.length; k++) {
//           if (c[j] >= candies[k]) {
//               flag=true
//               // output.push(true)
//               // break
//           }
//           else {
//               flag=false
//               break
//               // output.push(false)
//               // break
//           }
//       }
//       if(flag==true){
//           output.push(true)
//       }
//       else{
//           output.push(false)
//       }
//   }
//   console.log(output)
//   }
// ---------------------------------59--valid -paranthesis---------------------------------------------------

// {
//     let inputStr="["
//     // let inputStr = prompt("Enter the paranthesis : ");
//     let strArr = inputStr.split("");
//        console.log(strArr)
//     let openBracketArr = ["(","[","{"];
//     let closeBracketArr = [")","]","}"];

//     let openBracketCount=0;
 
//     let flag = true;
//     for(let i=0; i<strArr.length ; i++)
//     {
//         if(closeBracketArr.includes(strArr[i]))
//         {

//             let closeIndex = closeBracketArr.indexOf(strArr[i]);
//             console.log(closeIndex)
//             let openBracket = openBracketArr[closeIndex];

//             console.log("array previous : "+strArr[strArr.length-1-i]);
//             console.log("openBracket : "+openBracket);

//             if((strArr[strArr.length-1-i] != openBracket) && (strArr[i-1] != openBracket))
//             {
//                 flag = false;
//                 break;
//             }

//             openBracketCount--;
//              console.log(openBracketCount)
//         }else{
//             console.log("else part : "+strArr[i]);
//             openBracketCount++;
//             console.log(openBracketCount)
//         }
//     }

//     console.log("open bracket count : "+openBracketCount);
//     console.log("flag : "+flag);
//     if(flag == true && openBracketCount == 0 )
//     {
//         console.log("Paranthesis Matches")
//     }
//     else{
//         console.log(false);
//     }
// }
// ------------------54-Scramble-------------------------------------------------------------------
// {
//     let a="vneea"
// let b="veena"
// let flag=false
// for(let i=0;i<b.length;i++){
//     for(let j=b.length-1;j<a.length;j++){
//         if(a[i]==b[j]){
//             flag=true
//                break 
//         } 
//     }
// }
// if(flag===true){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// }
// ---------------------------------------Incomplete--------Object Keys from snake_case to camelCase--------------------------------------------------------------------------
// let a={
//   first_name: 'John',
//   last_name: 'Rambo',
//   favorite_movie: 'First Blood',
// }
// console.log(a)

// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }
// --------------------51--Extract the Domain Name From a URL----------------------------------------------------------
// {
// let a='http://google'
// let c=a.replace("www"," ").replaceAll("."," ").replace("com"," ").replace("ca"," ").replace("//"," ").replace("http"," ").replace("https"," ").replace("jp"," ").replace(":"," ").replace("co"," ")
// console.log(c)
// console.log(c)
// }
// ------------------------56. Concatenation of Array---------------------------------------------
// let a=[1, 2, 3]

// let b=a.concat(a)
// console.log(b)
// ---------------------- 50--Check if Word Equals Summation of Two Words-------------------------------------------
// let firstWord="aaa"
// let secondWord="a"
// let targetWord="aaaa"
// let first=firstWord.split("")
// let second=secondWord.split("")
// let target=targetWord.split("")
// // console.log(first)


//     //    console.log(x,y,z)
  
//     let b="abcdefghijklmnopqrstuvwxyz"
//     for (var i = 0;i< first.length; i++)
//     {    
//         first[i]=b.indexOf(first[i])
      
//     }
//     let a=first.join("")
//     // console.log(a)
//     for(var j=0;j<second.length;j++)
//     {
//          second[j]=b.indexOf(second[j])
         
         
//     }
//     let c=second.join("")
//     // console.log(c)

//     for (let k = 0; k < target.length; k++) 
//     {
//          target[k]=b.indexOf(target[k])
       
       
//     }
//     let d=target.join("")
//     // console.log(d) 

//     a= parseInt(a) 
//     c= parseInt(c)
//     let sum= a+c;
//     // console.log(sum)

//     if(sum==d){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }

// ----------------------12-Who likes it?---------------------------------------------------------------------------
// let a=["jacob","Alex","jacob","Alex","jacob","Alex","jacob","Alex"]
// let length=a.length
// console.log(length)

// if(length==""){
//      console.log("no one likes this");
// }
// else if(length==1){
//     console.log(a+" "+"likes this")
// }
// else if(length==2){
//     console.log(a[0]+" "+"and"+" "+a[1]+" "+"likes this")
// }
// else{
//     console.log(a[0]+", "+a[1]+" "+(length-2)+" "+"likes this")
// }

// -------------------------17--Descending order------------------------------------
// let a=1021
// let b=a.toString()
// let c=b.split("")
// console.log( c)
// let temp;
// let h=[]
// for(let i=0;i<c.length;i++){
//     for(let j=0;j<c.length;j++){
//         if(c[i]>c[j])
//          {      temp=c[i]
//                c[i]=c[j]
//                c[j]=temp
//          }
//     }
// }
// let result=parseInt(c.join(""))

// console.log(result)
// -------------------------------------37 unique in order-------------------------------
// let arr='ABBCcAD'
// var a=[];
//  var len=arr.length-1
//  console.log(len)
// for(var i=0;i<len;i++){
//     if(arr[i]!==arr[i+1]){
//         a.push(arr[i]);
//     }
// }
// a.push(arr[i]);
// console.log(a)
// --------------------------------------Incomplete sums---------------------------

// let a="22"
// let thousands=["M","MM","MMM"]
// let hundreds=["c","cc","CCC","CD","D","DC","DCC","DCCC","CM"]
// let tens=["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
// let units=["I","II","III","IV","V","VI","VII","VIII","IX"]

// // for(var i=0;i<a.length;i++)
// // {
// for(let j=a.length-1;j>=0;j++){
//           console.log(a[j])
//     }
    
// let prices=[7,1,5,3,6,4]
// let max=0

// for(let i=0;i<prices.length-1;i++){
//     var largestValue=[]
//     for(let j=i+1;j<prices.length;j++){
//         //    var c=prices[i]-prices[j]
//            if(prices[i]<prices[j]){
//               let  x=prices[i]-prices[j]
//                 largestValue.push(x)
//            }
//            else {
//             let x=prices[i]-prices[j]
        
//             largestValue.push(x)
//            }
       
//         }
           
//         console.log(largestValue)
//     }

// function maxProfit(prices) {
//     const n = prices.length;

//     if (n <= 1) {
//         return 0; 
//     }

//     let minPrice = prices[0];
//     console.log(minPrice)
//     let maxProfit = 0;

//     for (let i = 1; i < n; i++) {
//         console.log(n)
//            if (prices[i] < minPrice) {
//             minPrice = prices[i];
//             console.log(minPrice)
//         }

//                 const currentProfit = prices[i] - minPrice;
//         if (currentProfit > maxProfit) {
//             maxProfit = currentProfit;
//         }
//     }

//     return maxProfit;
// }

// // Example usage:
// const prices =  [7,6,4,3,1];
// const result = maxProfit(prices);
// console.log(result); 
// -------------------------------22. Exes and Ohs-------------------------------------------
// let a='ooom'
// a=a.toLowerCase()
// let count=0
// let count1=0
// for(let i=0;i<a.length;i++){
//     if(a[i]=='o'){
//         count++
//     }
//     else if(a[i]=='x'){
//         count1++
//     }

// }
// if(count==count1){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// or

// let str = ''
// let countx=0
// let counto=0

// for(let i=0;i<str.length;i++){
//     if(str[i].toLowerCase()==='x'){
//         countx++
//     }
//     else if(str[i].toLowerCase()==='o'){
//         counto++
//     }
// }
// console.log(countx===counto)
// --------------------------------49. Break camelCase------------------------------------------------
// let str = "PomikaCanPan"
// let str="ABC"
// let result = "";
// if(str === str.toUpperCase()){
//     result = str;
// }
// else{
//     for(let i=0;i<str.length;i++)
//    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
//       if(str[i]===str[i].toUpperCase()){
//          result += " "+str[i];
//       }
//       else{
//          result += str[i];
//       }
//    }

// }
// console.log(result)
// ----------------------------------Count pairs with given sum----------------------------------------
// let  N = 4;
// let  K = 6;
// let  arr = [1, 5,7,1];
// let count = 0;
//     for (let i = 0; i < N; i++) {
//         console.log(N)
//         for (let j = i+1; j < N; j++) {
//             console.log(N)
//             if (arr[i] + arr[j] === K) {
//                 count++;
//             }
//         }
//     }
// console.log("Output:", count);
// -------------------------------Anagram--------------------------------------------
// let a="geeksforgeeks"
// let b="forgeeksgeeks"
// let flag=false
// for(let i=0;i<b.length;i++){
//     for(let j=b.length-1;j<a.length;j++){
//         console.log(a[j])
//         if(a[i]==b[j]){
//             flag=true
//                break 
//         } 
//     }
// }
// if(flag===true){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// -----------------------------Reverse words in a given string--------------------------------------------------------------

// let a = 'i.like.this.program.very.much'
// let b=a.split(".")
// console.log(b)
// let c = ""
// // for(let j=0;j<a.length;j++){
// for(let i=b.length-1;i>=0;i--)
// {
//    c+="."+b[i]
// }
// // }
// console.log(c.replace(".",""))
// -----------------------------------------Remove duplicate elements from sorted Array--------------------------------------------------------------------
// {
//    let arr=[2,2,2,2]
//    var a=0;
//     var len=arr.length-1
//     console.log(len)
//    for(var i=0;i<len;i++){
//        if(arr[i]!==arr[i+1]){
         
//            a=arr[i]
//        }
//    }

//    a=arr[i]
//    console.log(a)
// }
// --------------------------------------Intersection of two arrays---------------------------------------------------
// let arrOne=[89, 24, 75, 11, 23]
// let arrTwo=[89, 2, 4]
// let count=[]
// let count1=0

// for(let i=0;i<arrOne.length;i++){
//     for(let j=0;j<arrTwo.length;j++){
//         if(arrOne[i]==arrTwo[j]){
//             count=arrOne[j]
//               count1++
//       }
       
//     }
// }

// console.log(count)
// console.log(count1)