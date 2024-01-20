// ----------------------------------------------SET B---------------------------------------------------------

// -----------1.To return 'it's special array' if even indexes contain even values and odd contains odd--------
// {
//     let a = [ 2, 7, 4, 9, 6, 1, 6, 3 ];
//     // let a = [ 2, 7, 8, 8, 6, 1, 6, 3]
//     let result = [] // result = temporary array created to store boolean
//     let j =0 // j = index of result   
//     let k=0 // k = to check whether the result[] contains false(boolean) or not 

//     for(let i=0;i<a.length;i++){
//         if((i%2==0 && a[i]%2==0)|| (i%2!==0 && a[i]%2!==0)){
//           result[j] = true
//           j++
//         }
//         else{
//             result[j] = false
//             j++
        
//         }
//     }
//     for (j=0;j<result.length;j++){
//         if(result[j]== false){
//             k=0
//             console.log(k)
//             break
//         }
//         else{
//             k =1
//         //   console.log(k)
//         }
    
//     }
//     // console.log(k)
//     if( k==1 ){
//         console.log(a+" is a special array" )
//     }
//     else{
//         console.log(a+" is not a special array")
//     }

//     // console.log("--------------------")
// }





// -----------2.To print all prime numbers that are below the given number------------------------------------
// {
//     console.log("2nd Problem ---->")
//     // let n=20
//     let n=37
//     for(a=0;a<n;a++){
//         let b =1
//         if(a<=1){
//             b=0
//         }
//         for(let i = 2;i<a;i++){
//             if(a%i==0){
//                 b=0
//                 break
//             }
//         }
//         if(b==1){
//             console.log(a)
//         }
//     }
//     console.log("--------------------")
// }





// -----------3.To store strings with repeated characters into new array---------------------------------------
// {
//     console.log("3rd Problem ---->")
//     // let a=['88','999','545','224','133','6666','44424'];
//     let a = ["aaaaa","bc","eeee","xyz"]
//     let i; // i = index of a
//     let j; // j=index of y(inner array of each element in i)
//     let k=0;  // k= index of new array r
//     let x; // value of element in index i 
//     let r=[]; // new array
//     let y; // y = inner array ( array created by splitting(x) each element while in loop)


//     for(i=0;i<a.length;i++)
//     {
//         x=a[i]
        
//         console.log(x)
//         y=x.split('')
//         console.log(y)
//         for(j=0;j<y.length-1;j++){
//             if(y[j]!==y[j+1]){
//                 break;
//             }   
//         }
//         if(j === y.length-1){
//             r[k] = x;
//             k++;
//         }
//         console.log(r)
        

//     }
//     console.log('New array: '+r)
//     console.log("--------------------")
// }

//  const inputString = "the quick brown fox veena" ;
//    let result = '';
//    let Word = true;
 
//    for (let i = 0; i < inputString.length; i++) {
//      const current = inputString[i];
//      console.log(current)
//       const Letter = (current >= 'a' && current <= 'z') || (current >= 'A' && current <= 'Z');
//       if (Letter) {
//        if (Word) {
//          result += current.toUpperCase();
//        } else {
//          result += current.toLowerCase();
//        }
//        Word = false;
//      } else {
//        Word = true;
//        result += current;
//      }
//    }
//  console.log(result);




// -----------4. Sort and store array in order (smallest,largest,2nd smallest,2nd largest...)------------------
// {
//     console.log("4th Problem ---->")
//     // let a =[3,2,1,4];
//     let a=[5,8,1,4,2,9,3,7,6]
//     let i;  // i =index of a//
//     let j;  // j = index of i+1
//     let temp  // temp = temporary variable  
//     let x;  // x = to define the sorted array in new variable  
//     let p; // p = index of x(sorted array)   
//     let q; // q= last index of x   
//     let f=[] // f = new array    
//     let r;  // r =index of new array   
//     for(i=0;i<a.length;i++){
//         for(j=i+1;j<a.length;j++){
//             if(a[i]>a[j]){
//                 temp =a[i]
//                 a[i]=a[j]
//                 a[j]=temp;
//             }
//         }
//     }
//     x=a
//     console.log("sorted array: "+x)
//     q=x.length-1
//     console.log(q)
//     p=0
//     for(r=0;r<x.length;r++){
//         if(r%2==0){
//             f[r]=x[p]
//             console.log(f)
//             p++
//             console.log(p)
//         }
//         else{
//             f[r]=x[q]
//             q--
//             console.log(f)
//         }
//     }
//     console.log("New array: "+f)
//     console.log("--------------------")
// }





// ----------------------------------------------SET A---------------------------------------------------------

// -----------1.To find the largest even number in array-------------------------------------------------------
// {
//     console.log("1st Problem ---->")
//     let a = [ 3, 7, 2, 1, 7, 9, 10, 13 ]
//     // let a= [ 97, 79, 21, 19, 163 ]
//     let x
//     let largest
//     for(i=0;i<a.length;i++){
//         for(j=i+1;j<a.length;j++){
//             if(a[i]>a[j]){
//                 temp =a[i]
//                 a[i]=a[j]
//                 a[j]=temp;
//             }
//         }
//     }
//     x=a
//     console.log(x)
//     let k = x.length-1
//     console.log(k)
//     while(k>=0){
//         if(x[k]%2!==0){
//             k--
//             if(k==0 && (x[k]%2!==0)){
//                 console.log(-1)
//                 break
//             }
//         }
        
//         else{
//             largest =x[k]
//             console.log("Largest even number : "+largest)
//             break
//         }
//     }

//     console.log("--------------------")

// }
// -----------2.To capitalize char if its charcode is even & inverse------------------------------------------
// {

//     console.log("--------------------")
// }
// -----------3. To count and print perfect squares that are within the given number--------------------------
// {
//     console.log("3rd Problem ---->")
// let n = 50
//     let count =0
//     let x
//     for (i=1;i<n;i++){
//         x=i**2
//         if(x<=n){
//             count = count+1
//             console.log(x)
//         }
//     }
//     console.log("count of perfect squares: "+count)
    
//     console.log("--------------------")
// }
// // -----------4. To find equilibrium point--------------------------------------------------------------------
// {
    // console.log("4th Problem ---->")
//     // let a = [1,3,5,2,2]
//     let a = [2,2,2,5,3,3]
//     // let a=[1,2,3]
//     let i
//     let j=0
//     let k=a.length-1
//     let sj=0
//     let sk=0
//     let x=0
//     let y=0
//     for(i=1;i<a.length;i++){
        
//         while(j<i-1){
//             console.log(sj)
//             sj=sj+a[j]
//             // console.log(sj)
//             j++
//         }
//         while(k>i+1){
//             console.log(sk)
//             sk=sk+a[k]
//             k--
           
//         }
//         if((sj==sk)&& sk==sj!==0){
//             console.log(sj,sk)
//             i--
//             break
//         }
    
//     }
//     if((sj==sk)&& sk!==0 && sj!==0){
//         console.log(i)
    
//     }
//     else{
//         console.log(-1)
//     }

  

//     console.log("--------------------")
// }

