var Local = function () {
    // 游戏对象
    var game;
    // 时间间隔
    var INTERVAL = 400;
    // 定时器
    var timer = null;
    // 时间计数器
    var timeCount=0;
    // 时间
    var time=0;
    // 绑定键盘事件
    var bindKeyEvent = function () {
        document.onkeydown = function (e) {
            if (e.keyCode == 37) {
                game.left();
            } else if (e.keyCode == 38) {
                game.rotate();
            } else if (e.keyCode == 39) {
                game.right();
            } else if (e.keyCode == 40) {
                game.down();
            } else if (e.keyCode == 32) {
                game.fall();
            }
        }
    }
    // 移动
    var move = function () {
        timeFunction();
        if (!game.down()) {
            game.fixed();
           var line= game.checkClear();
           if(line!=0){
               game.addScore(line);
           }
            var gameOver = game.checkGameOver();
            if (gameOver) {
                game.gameOver();
                stop();
            } else {
                game.performNext(generateType(), generateDir());
            }
        }
    }
    // 计时函数
    function timeFunction(){
        timeCount++;
        if(timeCount==5){
            timeCount=0;
            time++;
            game.setTime(time);
        }
    }
    // 随机生成方块种类
    var generateType = function () {
        return Math.ceil(Math.random() * 7) - 1;
    }
    // 随机生成旋转方向
    var generateDir = function () {
        return Math.ceil(Math.random() * 4) - 1;
    }
    // 开始
    var start = function () {
        var doms = {
            gameDiv: document.getElementById("game"),
            nextDiv: document.getElementById("next"),
            timeDiv: document.getElementById("time"),
            scoreDiv: document.getElementById("score"),
            resultDiv: document.getElementById("gameover"),
        }
        game = new Game();
        game.init(doms,generateType(),generateDir());
        bindKeyEvent();
        game.performNext(generateType(),generateDir());
        timer = setInterval(move, INTERVAL);
    }
    // 结束游戏
    var stop = function () {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        document.onkeydown = null;
    }
    // 导出API
    this.start = start;
}