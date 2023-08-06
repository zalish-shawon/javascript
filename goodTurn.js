// your code goes here
function goodTurn(player1, player2) {
    if (player1+player2 > 6) {
        return "The turn is good";
    } else {
        return "The turn is not good";
    }
}

 console.log(goodTurn(0,6));


 