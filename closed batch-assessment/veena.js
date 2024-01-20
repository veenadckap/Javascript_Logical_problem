// ----------------------sum 2-------------------------------------------
// let a='%fd76$cg3-sk94HI*!@9_juq'
// let a='welcome to DCKAP!!!'
// let b=a.split("")
// // console.log(b)
// let d=''
// for(let i=0;i<b.length;i++ ){
//     if((b[i]>="a" && b[i]<="z") || (b[i]>="A" && b[i]<="Z") || (b[i]=="-" || b[i]=="_") || (b[i]>0) || b[i]==" ")
//     {
//         d+=b[i]
//     }
// }
// console.log(d)
// ---------------------------sum 4----------------------------------------------------
// let a="123nbj"
// let Letter=0
// let number=0
// for(let i=0;i<a.length;i++){
//     if((a[i]>"a" && a[i]<"z" ) || (a[i]>="A" || a[i]>="Z")){
//         Letter++
//     }
//     else if((!isNaN(a)) || a[i]>0){
//         number++
//     }
// }
// console.log("Number of letters :"+Letter)
// console.log("Number of Digit :"+number)
// ---------------------sum-1------------------------------------------------------
// let a=[10,11,12,9,10]
// flag=false
// let count=[]

// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[i]>a[j]){
//          count.push(a[i])
//          break
    
//         }
//     }
 
// }

// let count1=count.length-1

// if(count1==-1){
//     console.log(0)
// }
// else{
//     console.log(count1)
// }
// ------------------------------sum-3-----------------------------------
// let a='an open fire'
// a=a.toLowerCase()
// let b=a.split(" ")
// let vowels=["a","e","i","o","u"]
// for (let i = 0; i < b.length -1; i++) 
// {
//     console.log(b[i])
//     var lastVowels = b[i][b[i].length - 1];
//     var secondVowels = b[i + 1][0];
// }
// if(vowels.includes(lastVowels) && vowels.includes(secondVowels) ){
//       console.log(true)
// }
// else{
//     console.log(false)
// }
// ---------------------------------------sum-5------------------------------------
//this solution was 1 length
// let a=[{product:"rice",quantity:2,price:3},{product:"rice",quantity:3,price:}]
// let b=Object.values(a[0])
// let c=Object.values(a[1])
// let g=c.concat(b)
// console.log(c)
// console.log(b)
// let sum=0
// for(let i=0;i<b.length;i++){
//     for(let j=0;j<c.length;j++){
//     // console.log(c[j])
//     if(b[i]>0 && c[j]){
//         sum=b[1]*b[2]+c[1]*c[2]
//         break;
//     }
// }
// }
// console.log(sum)

//or
// twice length solution

// let a=[{product:"rice",quantity:1,price:1.5}]
// let b=Object.values(a[0])
// console.log(b)
// let sum=0
// for(let i=0;i<b.length;i++){
//     if(b[i]>0){
//         sum=b[1]*b[2]

//     }
// }
// console.log(sum)