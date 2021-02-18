class Form {

    constructor() {
      
    }
    /*hide(){
      greeting.hide();
      button.hide();
      input.hide();
      title.hide();
    }*/
  
    display(){
      var title = createElement('h2');
      title.html("ESCAPE THE RIVER CHALLENGES !!");
      title.position(displayWidth/2 - 50, 0);
      var input = createInput("Name");
      var button = createButton('Play');
      var greeting = createElement('h2');
      input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      button.position(displayWidth/2 + 30, displayHeight/2);
      //reset.position(displayWidth-100,20);
      
      button.mousePressed(()=>{
        input.hide();
        button.hide();
        var name = input.value();
        TeamCount+=1;
        
        team.update(name);
       // Team.updateCount(playerCount);
        greeting.html("Hello " + name)
        greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      /*reset.mousePressed(()=>{
      player.updateCount(0);
        game.update(0);
      });*/
  
    }
  }
  