let firstNumber=parseInt(Math.random()*9)+1;
let secondNumber=parseInt(Math.random()*15)+1;
let cardDrawn=10;
let sumCards;
let message;


let gameOn="Do you wish to draw another card?";
cardsTray=" "+ firstNumber +" "+"|"+" "+ secondNumber;
console.log(cardsTray.length);

function startgame(){
    document.getElementById("permission").textContent=gameOn;
    document.getElementById("cards").textContent+=cardsTray;
}
function drawcard(){
    cardsTray=" " + firstNumber +" "+ "|" + " " + secondNumber + " "+ "|" + cardDrawn;
    document.getElementById("cards").textContent="Cards:" + cardsTray;
}
function rendergame(){
        if(cardsTray.length<8){
            sumCards=firstNumber+secondNumber;
            document.querySelector("#sumcards").textContent+=sumCards;

        }
        else if (cardsTray.length>=8){
            sumCards=firstNumber+secondNumber+cardDrawn;
            document.querySelector("#sumcards").textContent+=sumCards;
        }
        if(sumCards===21){
            message="Wow! You got a blackJack!"
            document.querySelector("#points").textContent=message;
        }
        else if(sumCards<21){
            message="You did not have a BlackJack! Wish to play again? \n Reset the board";
            document.querySelector("#points").textContent=message;
            
        }
        else if(sumCards>21){
            message="Oops! Your cards are over the Blackjack! \n Wish to play again? Hit Reset.";
            document.querySelector("#points").textContent=message;
        }
}
