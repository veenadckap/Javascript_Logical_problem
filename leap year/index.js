let year=prompt("Enter a year :")
if((year%4==0) && (year%100!=0))
{
    console.log(+year+" "+"is a leap year")
}
else if (year%400==0){
    console.log(+year+" "+"is a leap year")
}
else{
    console.log(+year+" "+"is a not a leap not")
}