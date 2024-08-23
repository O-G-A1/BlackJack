// let firstNumber=parseInt(Math.random()*9)+1;
// let secondNumber=parseInt(Math.random()*15)+1;
let sumCards;
let message;
let gameOn;
let cardDrawn=10;
let cardsTray;
let startGame=false;
let drawCard=false;
let gameRendered=false;

function startgame(){
    if(startGame){
        document.getElementById("permission").textContent="You've already started the game!";        
    }else{
        startGame=true;
        
        let firstNumber=parseInt(Math.random()*9)+1;
        let secondNumber=parseInt(Math.random()*15)+1;
        
        gameOn="Do you wish to draw another card?";
        cardsTray=" "+ firstNumber +" "+"|"+" "+ secondNumber;
        document.getElementById("permission").textContent=gameOn;
        document.getElementById("cards").textContent+=cardsTray;
    }
}
    
function drawcard(){ 
    if (startGame){
        if(drawCard){
            document.getElementById("permission").textContent="You've already drawn a card!";
            cardsTray=" " + firstNumber +" "+ "|" + " " + secondNumber + " "+ "|" + cardDrawn;
            
        }else{
            drawCard=true;
            gameOn="Maximum card reached!"
            document.getElementById("permission").textContent=gameOn;
            let firstNumber=parseInt(Math.random()*9)+1;
            let secondNumber=parseInt(Math.random()*15)+1;
            cardsTray=" " + firstNumber +" "+ "|" + " " + secondNumber + " "+ "|" + cardDrawn;
            document.getElementById("cards").textContent="Cards:" + cardsTray;
        }
    }else{
        document.getElementById("permission").textContent="Start the game first!";
        
    }
    
}
function rendergame(){
    if(startGame){
        if(gameRendered){
            document.getElementById("permission").textContent="You've already rendered your cards!";
            
        }else{
            gameRendered=true;
            let firstNumber=parseInt(Math.random()*9)+1;
            let secondNumber=parseInt(Math.random()*15)+1;
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
        }else{
            document.getElementById("permission").textContent="You've already rendered your cards!";
            
        }
        
    }
    
    function reset(){
        startGame=false;
        drawCard=false;
        gameOn="Do you wish to play? Click 'Start Game'";
        document.getElementById("permission").textContent=gameOn;
        cardsTray="";
        document.getElementById("cards").textContent="Cards: "+ cardsTray;
        sumCards="";
        document.querySelector("#sumcards").textContent="Sum:" + sumCards;
        message="";
        document.querySelector("#points").textContent=message;


    }

    