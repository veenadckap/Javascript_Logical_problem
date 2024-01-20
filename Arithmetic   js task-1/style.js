var a=document.getElementById("num1").value;
var b=document.getElementById("num2").value;


function addition()
{
   let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
       document.getElementById("Add").innerHTML=parseInt(a)+parseInt(b);
}

function sub()
{
   let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
       document.getElementById("Sub").innerHTML=parseInt(a)-parseInt(b);
}

function multip()
{
   let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
       document.getElementById("Multip").innerHTML=parseInt(a)*parseInt(b);
}

function Divi()
{
   let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
       document.getElementById("Divi").innerHTML=parseInt(a)/parseInt(b);
}