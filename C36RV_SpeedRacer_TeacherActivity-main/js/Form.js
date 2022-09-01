class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
  setelementsposition(){
    this.titleImg.position(120,50)
    this.input.position(width/2-110,height/2-80)
    this.playButton.position(width/2-90,height/2-20)
    this.greeting.position(width/2-300,height/2-100)
  }
  setelementsstyle(){
    this.titleImg.class("gameTitle")
    this.input.class("custominput")
    this.playButton.class("customButton")
    this.greeting.class("greeting")
  }
  display(){
    this.setelementsposition()
    this.setelementsstyle()
    this.handlemousepressed()
  }
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  handlemousepressed(){
      this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message=`Hello ${this.input.value()}
      </br>wait for another player to join...`
      this.greeting.html(message)
      playerCount+=1
      player.name=this.input.value()
      player.index=playerCount
      player.addPlayer()
      player.updateCount(playerCount)
    })
  }
}
