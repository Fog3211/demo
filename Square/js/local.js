var Local=function(){
    var game;
    var bindKeyEvent=function(){
        document.onkeydown=function(e){
            if(e.keyCode==37){
                game.left();
            }else if(e.keyCode==38){
                game.rotate();
            }else if(e.keyCode==39){
                game.right();                
            }else if(e.keyCode==40){
                game.down();
            }else if(e.keyCode==32){
                game.fall();
            }
        }
    }
    var start=function(){
        var doms={
            gameDiv:document.getElementById("game"),
            nextDiv:document.getElementById("next")
        }
        game=new Game();
        game.init(doms);
        bindKeyEvent();
    }
    this.start=start;
}