// -------------sum 1------------------------------------------

// let a="Hi welcome to DCKAP"
// let b=a.split(" ")
// console.log(b)

// for(let i=0;i<b.length;i++){
// //    console.log(b[i])
// var c='';
//     for(let j=b[i].length-1;j>=0;j--)
//     {
//         // console.log(b[j])
//       c+=b[i][j];
//     //   console.log(c)
//     }
//     b[i]=c;
   
//   }

// console.log(b.join(" "))
// console.log(c)

// -----------------------sum 2--------------------------------------------------
// let a=[8, 3, 101, "array"]

// let b=0
// for(let i=0;i<a.length;i++){
//     if((a[i]>0 || a[i]<100) && (a[i] !==false  && a[i]!==true))
//     {
//          b+=a[i]*2
//     }

// }
// console.log(b)

// -----------------------------sum 3-----------------------------------
// var a=[ "test", "organization", "abc"]
// let b="organizatION"
// b=b.toLowerCase()
// let c=[]
// // b=b.toLowerCase()
// // let r=a.toString()
// // let f=r.split(" ")
// console.log(a.indexOf(b))

// for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//         // console.log(a[i].indexOf(b[j]))

//         if(a[i]==b[j]){
//              c.push(b[j])
//         }
//     }
//     console.log(c)
// }
// ----------------Corrections--------------------

// ----------1-------------

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

// Please change variable names and function names 
// react in discord if you have seen this message
// ------------1st sum----------------
// {
//     let arr = [10, 11, 12, 9, 10];

// function func(x) {
//     return x.reduce((count, currentValue, index, array) => {
//         if (index < array.length - 1 && array[index + 1] > currentValue) {
//             count++;
//         }
//         return count;
//     }, 0);
// }

// let output = func(arr);
// console.log(output);

// }
// // ------------2nd sum--------------------
// {
//     let str = "%fd76$cg3- sk94*!@9_juq";

// let output = func(str);

// function func(x) {
 
//   let charArray = x.split('');

//   let resultArray = charArray.filter(temp => (temp >= 'a' && temp <= 'z') || (temp >= 'A' && temp <= 'Z') || (temp >= '0' && temp <= '9') || temp === '_' || temp === '-' || temp === ' ');

//   let result = resultArray.join('');

//   return result;
// }

// console.log(output);
// }
// // -----------3rd sum-------------
// {
//     let str = 'an open fire';
// let result = calc(str);

// function vowelornot(char) {
//   return 'aeiouAEIOU'.includes(char);
// }

// function calc(x) {
//   let words = x.split(' ');

//   for (let i = 0; i < words.length - 1; i++) {
//     let last = words[i][words[i].length - 1];
//     let second = words[i + 1][0];

//     if (vowelornot(last) && vowelornot(second)) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(result);


// }
// // ----------4th sum --------------------
// {
//     let str = 'h3llo Wo5lD';
// let result = count(str);

// function count(x) {
//   var letters = 0;
//   var numbers = 0;

//   for (let i = 0; i < x.length; i++) {
//     if (!isNaN(x[i])) {
//       numbers++;
//     } else if ((x[i] >= 'a' && x[i] <= 'z') || (x[i] >= 'A' && x[i] <= 'Z')) {
//       letters++;
//     }
//   }

//   return letters ,numbers ;
// }

// console.log('Letters: '+letters , "numbers: "+numbers);
// }
// // ---------------5th sum--------------
// {
//     let input = [{ product: "rice", quantity: 1, price: 1.5 }];

// let result = total(input);

// function total(x) {
//   return x.reduce((acc, item) => {
//     if (item.quantity !== undefined && item.price !== undefined) {
//       acc += item.quantity * item.price;
//     }
//     return acc;
//   }, 0);
// }

// console.log(result);
// }