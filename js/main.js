/* card flip */
var value1 = 0;
var value2 = 0;
var firstCard;
var secondCard;
var cardWaiting = false;
var playerWon = false;

$(document).ready(function(){
    $(".flip").click(function(){
        if($(this).find(".card").hasClass("flipped"))
        {
             alert("Chose Other Card");
        }else{
            $(this).find(".card").toggleClass("flipped");    
            checkCardFlag();
            if(cardWaiting==true)
            {
                firstCard = $(this).find(".back");
//                alert("Pick One more card");
            }else{
                secondCard = $(this).find(".back");
            }

            if(firstCard != null && secondCard != null && cardWaiting == false){
                checkCardValues();
            }
        }
        checkWin();
       
        return false;
        });
        
var array = [1,4,3,2,
             4,2,3,1,
             1,2,3,4,
             3,1,2,4]
shuffle(array);
console.log(array);
var divs = document.getElementsByName("imageHolder");
for(var i=0;i<divs.length;i++)
{
    divs[i].innerHTML=array[i];
}



    

    
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
});