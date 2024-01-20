let stratrange=parseInt(prompt("Enter a startrange value :"));
let Endrange=parseInt(prompt("Enter a endrange value :"));
let value=parseInt(prompt("Enter a range value :"));
if((value>=stratrange) || (value<=Endrange)){

  if ((value>=stratrange) && (value<=Endrange))
  {
    console.log("Between range")
  }
  else
  {
    console.log("Outside range")
  }
}
else {
    if ((value<=stratrange) && (value>=Endrange))
    {
    console.log("Between range")
    }
    else
    {
    console.log("Outside range")
    }
}
