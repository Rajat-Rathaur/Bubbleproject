var Timer = 30;
var score = 0;
var x = 0
function hitbadhaao(){
     x = Math.floor(Math.random()*10)
    document.querySelector("#dibba").textContent = x
}
function incscore(){
score += 10;
document.querySelector("#score").textContent = score;
}

function bulbula(){
var puddu = " "
for (var i = 0 ; i<=374 ; i++){
    var guddu = Math.floor(Math.random()*10)
  puddu+=  `<div class="bubble">${guddu}</div>`
}
document.querySelector("#pbtm").innerHTML = puddu;
}

function timer(){
 var timtim = setInterval(function(){
    if(Timer>0){ Timer--
   
    document.querySelector("#timer").textContent = Timer}
    else {
        clearInterval(timtim);
        
        // Clear existing bubbles or content from #pbtm
        document.querySelector("#pbtm").innerHTML = '';
    
        // Add game over message at the top
        var gameOverMessage = document.createElement('h1');
        gameOverMessage.textContent = 'Game over';
        document.querySelector("#pbtm").appendChild(gameOverMessage);
        
        // Add the Play Again button (recreate it) and append it after the game over message
        var playAgainButton = document.createElement('button');
        playAgainButton.id = "playAgain";
        playAgainButton.textContent = 'Play Again';
        playAgainButton.style.display = "block"; // Display the button
        document.querySelector("#pbtm").appendChild(playAgainButton);
    
        // Attach the event listener to the newly created Play Again button
        playAgainButton.addEventListener("click", function() {
            score = 0;
            Timer = 30;
            document.querySelector("#score").textContent = score;
            document.querySelector("#timer").textContent = Timer;
            this.style.display = "none"; 
            timer();
            bulbula();
            hitbadhaao();
        });
    }
    
    
    
},1000)
}
document.querySelector("#pbtm").addEventListener("click", function(details){
   var clickednum =  Number(details.target.textContent)
   if (clickednum == x){
    incscore()
    bulbula()
    hitbadhaao()
   }
})



timer();
bulbula();
hitbadhaao();
