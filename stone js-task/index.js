let player1=prompt("Enter a player role1")
let player2=prompt("Enter a player role2")

player1=player1.replaceAll(" ","").trim().toLowerCase()
player2=player2.replaceAll(" ","").trim().toLowerCase()

if((player1.length==0) || (player2.length==0))
{
        alert("INVALID input")
}
else if((player1=="stone") && (player2=="scissor") || 
        (player1=="paper") && (player2=="stone") ||
        (player1=="scissor") && (player2=="paper")){
            alert(player1+" "+"won the match")
        }
       
else if((player1=="stone") && (player2=="paper") ||
        (player1=="scissor") && (player2=="stone") ||
        (player1=="paper") && (player2=="scissor")){
            alert(player2+" "+"won the match")
        }
else
{
    alert("Draw match")
}
