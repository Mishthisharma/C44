class Game {
    constructor(){}
    
    getState()
    {
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state)
    {
      database.ref('/').update({
        gameState: state
      });
    }
  
    start()
    {
      if(gameState === 0){
        team = new Team();
        team.getCount();
        form = new Form()
        form.display();
      }
    }
    /*play()
    {
      form.hide();
      strokeWeight(4);
      stroke("black");
      fill("black");
      textSize(35);
      text("Game Start!!" ,200,100)
      Player.getPlayersinfo();
      if (allPlayers !== undefined) 
      {
        var display_position = 130 ;
        for (var plr in allPlayers) {
          if (plr === "player"+ player.index) 
          fill("red")
           else
           fill("black") 
        display_position += 20 
        textSize(15);
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,300,display_position)
          
        }
      }
    }*/
  }
  