class Team
 {
    constructor()
  {
     /*this.index = null ;
     this.distance = 0 ;
     this.name = null;*/
  }

  getCount(){
    var TeamCountRef = database.ref('TeamCount');
    TeamCountRef.on("value",(data)=>{
        TeamCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      TeamCount: count
    });
  }

  update( name ){
    var playerIndex = "Team" + TeamCount;
    database.ref(playerIndex).set({
      Name:name 
    });
  }
  /*static getPlayersinfo()
  {
    var playerinforef = database.ref('players')
    playerinforef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }*/
}

