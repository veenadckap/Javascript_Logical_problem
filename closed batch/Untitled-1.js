
// let num=[10, 3, 5, 6, 2]
// let n= num.length
// let result=0

// for(let i=0;i<n;i++){
//     var r=1
//     for(let j=i+1;j<num.length;j++){
        
//         r += r*num[i]
//     }
//     result=r
// }
// console.log(result)
let arr=[1, 2, 3, 4, 5]

    var a=[];
    let arr1=[1, 2, 3]
    let newArr=arr.concat(arr1)
    console.log(newArr)
     var len=arr.length-1
     let len1=arr1.length-1
     console.log(len)
    for(var i=0;i<len;i++){
        for(let j=0;j<len1;j++){
        if(arr[i]!==arr1[i+1]){
            a.push(arr[j]);
        }
    }
    }
    a.push(arr[i]);
    console.log(a)