    let cards = [];
    let sum = 0;
    let hasBlackJack = false;
    let isAlive = false;
    let message = " "
    let messageEl = document.getElementById("message-el");
    let cardsEl = document.getElementById("cards-el");
    let sumEl = document.getElementById("sum-el")


let player = {

    name: "Raja",
    chips: "25"
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



    function getRandomCard () {
        return Math.floor(Math.random()*13) + 1;
        if (randomNumber > 10){
            return 10
        }    
        else if(randomNumber ===1){
            return 11
        }
        else{
            randomNumber
        }
    }

   



////////////////////////////////////////////////

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let cards = [firstCard , secondCard];
    let sum = firstCard + secondCard;
    renderGame()
}


///////////////////////////////////////////////////


 function renderGame() {

    cardsEl.innerText = "Cards: " + cards[0] + " + " + cards[1];
    for (let i = 0;i < cards.length; i++ )
    {
        cardsEl.textContent += cards[i] + "  "
    }        
    
    sumEl.innerText = "Sum:" + " " +  sum

    if (sum < 21)
    {
    message = "Do You Want to draw a new Card?"
    }
    else if (sum === 21) 
    {
    message = "You Have got BlackJack"
    hasBlackJack = true;    
    } 
    else 
    {
    message = "You're Out of the game"    
    isAlive = false;    
}
messageEl.innerText = message;
}



function newCard(){
    // console.log("Draw a new card from the deck");
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard()  ;
    sum = sum + card;
    cards.push(card);
    console.log(cards);
    renderGame()

    }
}   


    