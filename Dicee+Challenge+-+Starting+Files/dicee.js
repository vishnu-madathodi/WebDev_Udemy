function diceRoll(){
    //roll for player 1
    let randValue1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "./images/dice"+randValue1+".png");

    //roll for player 2
    let randValue2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img2").setAttribute("src", "./images/dice"+randValue2+".png");

    //check who won
    checkWinner(randValue1, randValue2);
}

function checkWinner(randValue1, randValue2){
    if(randValue1 === randValue2){
        document.querySelector("h1").innerHTML = "Draw!";
    }
    else if(randValue1 > randValue2){
        document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
    }
}
