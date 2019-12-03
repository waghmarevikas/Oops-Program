var read=require('readline-sync');
var card=require('./DeckCards');
var deck=new card.DeckCard();

class DeckOfCards
{   
    game()
    {
        //create decks of Card 
        var cards=deck.deckOfCard();
        console.log(" Cards is : ");
        console.log(cards);
        
        //Number Of Cards.
        var noOfCards=cards.length;
        console.log("totale Card in Game : "+noOfCards);

        //Shuffle Card
        var ShuffleCards=deck.shuffleCard(noOfCards,cards);
        console.log("Shuffleing card for Game ")
        console.log(ShuffleCards);
       
        var players=read.questionInt("Enter the no of Players:");
        var cards=read.questionInt("Enter the no Of cards for one players : ")
        var totaleCards = players*cards;
        
        console.log("Totale cards is : "+totaleCards);
        var distribute=deck.diustributeCard(players,totaleCards,ShuffleCards);
        console.log(distribute);
    }     
}
    var play=new DeckOfCards();
    play.game(); 