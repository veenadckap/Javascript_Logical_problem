
//2) less than 100

let add=Addition(22,15)
console.log("Less than 100: "+add)

function Addition(a,b)
{
    return a+b <100
 
}

//1) convert age into days

let sum=mutliple(65)
console.log("convert age into days: "+sum)

function mutliple(x)
{
    return x*365
}


//3) convert hours into second

let sec=second(2)
console.log("convert hours into second: "+sec)

function second(x)
{
    return x*60*60
}


//4) polygon angel

let poly=polygon(3)
console.log("polygon: ",poly)

function polygon(x)
{
    return (x-2)*180
}



// 6) less than or equal to zero

let value=equal(5)
console.log("less than or equal to zero;",value)

function equal(x)
{
    return x<=0
}



// 7) logical operator 

let logical=operator(true,false)
console.log("logical operator: "+logical )

function operator(a,b)
{
    return a&&b
}


//8) farm problem

let leg=animals(2,3,5)
console.log("total number of legs: "+leg)

function animals(b,c,e)
{
    return b*2+c*4+e*4
    
}

//9)equality check

let check=equalitycheck(1,true)
console.log("check equality :"+check)


function equalitycheck(a,b)
{
    return a===b
}


//5) 
let a= message("is better than nothing")
console.log("message: "+a)

function message(x)
{
    return "something"+" "+x
}


//10)
let tab=line(9)
console.log("fix the code; "+tab)

function line(x)
{
    return x==7
   
}
