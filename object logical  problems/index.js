// {
// let a=["a","b",'c',"d"]

// let output=myFunction(a)

// function myFunction(x) {
//      let   obj={}
//      for(let i=0;i<x.length;i++){
//         obj[x[i]]=x[i].toUpperCase()
//      }
//      return {obj}
// }

// console.log(output)
// }
// ----------------------------------------------------------------------------------

// let product={"computer":600,"TV":800,"Radio":50,"laptop" : 1500};

// let arr = new Array();

// for(let key in product)
// {
//    arr.push(product[key]);
// }

// console.log(arr);

// for(let i=0; i<arr.length-1;i++)
// {
//     for(let j=i+1; j<arr.length;j++)
//     {
//         if(arr[i] < arr[j])
//         {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// let resultArr = new Array();
// for(let i=0;i<arr.length;i++)
// {
//     for(let key in product)
//     {
//         if(product[key] > 500 && arr[i] == product[key])
//         {
//             resultArr.push(key);
//         }
//     }
// }

// console.log(resultArr)

// ----------------------frequency distribution-------------------------------------------
// let b = [true,true,false,true,false];
// let count = {};

// for (let i = 0; i < b.length; i++) {
//     let currentElement = b[i];
    
//     if (!count[currentElement]) {
//         count[currentElement] = 0;
//     }

//     count[currentElement]++;
// }

// console.log(count);
// --------------------------------------------------
// let generation=prompt("Enter a generation :")
// let gender=prompt("Enter a gender :")
// console.log(generation)

// if(generation==2 && gender=="f"){
//     console.log("granddaughter")
// }
// else if(generation==2 && gender=="m"){
//     console.log("grandson")
// }
// else if(generation==-3 && gender=="m"){
//     console.log("great grandfather")
// }
// else if(generation==-3 && gender=="f"){
//     console.log("great grandmother")
// }
// else if(generation==-2 && gender=="m"){
//     console.log(" grandfather")
// }
// else if(generation==-2 && gender=="f"){
//     console.log("grandmother")
// }
// else if(generation==-1 && gender=="m"){
//     console.log("father")
// }
// else if(generation==-1 && gender=="f"){
//     console.log("mother")
// }
// else if(generation==0 && (gender=="m" ||gender=="f")){
//     console.log("me!")
// }
// else if(generation==1 && gender=="m"){
//     console.log("son")
// }
// else if(generation==1 && gender=="f"){
//     console.log("daughter")
// }
// else if(generation==2 && gender=="m"){
//     console.log("grandson")
// }
// else if(generation==2 && gender=="f"){
//     console.log("granddaughter")
// }
// else if(generation==3 && gender=="m"){
//     console.log("great grandson")
// }
// else if(generation==3 && gender=="f"){
//     console.log("great granddaughter")
// }
// let generation = prompt("Enter a generation:");
// let gender = prompt("Enter a gender:");
// console.log(generation);

// const relationships = {
//     "-3": { m: "great grandfather", f: "great grandmother" },
//     "-2": { m: "grandfather", f: "grandmother" },
//     "-1": { m: "father", f: "mother" },
//     "0": { m: "me!", f: "me!" },
//     "1": { m: "son", f: "daughter" },
//     "2": { m: "grandson", f: "granddaughter" },
//     "3": { m: "great grandson", f: "great granddaughter" },
// };

// const relationship = relationships[generation] && relationships[generation][gender];
// if (relationship) {
//     console.log(relationship);
// } else {
//     console.log("Invalid generation or gender.");
// }
// ----------------------------------------------------------------------------------------------------------------------
// let millionsRounding = [
//     ["Nice", 942208],
//     ["abu Dhabi", 1482816],
//     ["naples", 2186853],
//     ["vatican city", 572]
// ];

// function roundToMillion(population) {
//     return Math.round(population / 1000000) * 1000000;
// }


// function roundPopulationsToMillion(cityPopulations) {
//     return cityPopulations.map(([city, population]) => [city, roundToMillion(population)]);
// }

// let roundedPopulations = roundPopulationsToMillion(millionsRounding);
// console.log(roundedPopulations);
