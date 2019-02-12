var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var balls = [];
window.onload = function () {
    canvasInit();
}

// 画布初始化
function canvasInit() {
    var cW = document.documentElement.clientWidth;
    var cH = document.documentElement.clientHeight;
    canvas.width = cW;
    canvas.height = cH;

    update();
}

// 粒子构造函数
let Ball = function () {
    // 初始点
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    // 速度/加速度
    this.vx = Math.random() * (-6) + 3;
    this.vy = Math.random() * (-4) + 2;
    // 初始半径
    this.r = 0.1;
    // 颜色
    this.color = `rgb(${~~(Math.random()*256)},${~~(Math.random()*256)},${~~(Math.random()*256)})`;
    // 绘制
    this.print = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

// 粒子更新
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.push(new Ball());
    balls.forEach((item, index) => {
        item.x += item.vx;
        item.y += item.vy;
        if (item.x <= 0 || item.y <= 0 || item.x >= canvas.width || item.y >= canvas.height) {
            balls.splice(index, 1);
        }
        if (item.r < 1.5) {
            item.r += Math.random() * 0.02;
        }
        item.print();
    });
    requestAnimationFrame(update);
}