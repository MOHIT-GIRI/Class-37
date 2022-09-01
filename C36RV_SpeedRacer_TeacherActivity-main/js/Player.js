class Player {
  constructor() {
    this.name=null
    this.index=null
    this.positionx=0
    this.positiony=0
  }
  
  addPlayer(){
    var playerindex="players/player"+this.index
    if(this.index==1){
      this.positionx=width/2-100
    }
    else{
      this.positionx=width/2+100
    }
    database.ref(playerIndex).set({
      name:this.name,
      positionx:this.positionx,
      positiony:this.positiony
    })
  }

  getCount(){
    var playerCountref=database.ref("playerCount")
    playerCountref.on("value",data=>{
      playerCount=data.val()
    })
  }
  updateCount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
 static getplayersinfo(){
  var playerinforef=database.ref("players")
  playerinforef.on("value",data=>{
    allPlayers=data.val()
  })
 }
}
