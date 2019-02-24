var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cH = document.documentElement.clientHeight;
var cW = document.documentElement.clientWidth;

var particles = [],
    rockets = [],
    mousePos = {
        x: 0,
        y: 0
    };
window.onload = canvasInit;

// 画布初始化
function canvasInit() {

    canvasResize();

    setInterval(rocketPrint, 1000);
    loop();

    window.onresize = canvasResize;

}

// 调整画布大小
function canvasResize() {
    canvas.width = cW;
    canvas.height = cH;
}
// 点击创建轨迹
document.onmousedown = function () {
    for (var i = 0; i < 3; i++) {
        rocketPrint(Math.random() * cW * 2 / 3 + cW / 6);
    }
};
// 监听鼠标位置
document.onmousemove = function (e) {
    e = e || window.event;
    e.preventDefault();
    mousePos = {
        x: e.pageX,
        y: e.pageY
    };
};
// 轨迹渲染
function rocketPrint() {
    if (rockets.length < 10) {
        var rocket = new Rocket();
        // 定义爆炸颜色，y轴速度，x轴速度，半径，收缩，重力
        rocket.explosionColor = `rgb(${~~(Math.random()*256)},${~~(Math.random()*256)},${~~(Math.random()*256)})`;
        rocket.vel.y = Math.random() * -3 - 4;
        rocket.vel.x = Math.random() * 6 - 3;
        rocket.size = 2;
        rocket.shrink = 0.999;
        rocket.gravity = 0.01;
        rockets.push(rocket);
    }
}
// 循环渲染
function loop() {
    // 不断变暗
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, cW, cH);

    for (var i = 0; i < rockets.length; i++) {

        rockets[i].update();
        rockets[i].render(ctx);

        var distance = Math.sqrt(Math.pow(mousePos.x - rockets[i].pos.x, 2) + Math.pow(mousePos.y - rockets[i].pos.y, 2));
        // 速度向上为负的
        if (rockets[i].pos.y < cH / 5 || rockets[i].vel.y >= 0 || distance < 50) {
            rockets[i].explode();
            rockets.splice(i, 1);
        }
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].update();

        if (particles[i].exists()) {
            particles[i].render(ctx);
        } else {
            particles.splice(i, 1);
        }
    }
    requestAnimationFrame(loop);
}
// 烟花轨迹构造函数
function Rocket() {
    Particle.apply(this, [{
        x: Math.random() * cW * 2 / 3 + cW / 6,
        y: cH
    }]);

    this.explosionColor = '#fff';
}

Rocket.prototype = new Particle();
// 爆炸
Rocket.prototype.explode = function () {
    var count = Math.random() * 10 + 80;

    for (var i = 0; i < count; i++) {
        var particle = new Particle(this.pos);
        var angle = Math.random() * Math.PI * 2;

        var speed = Math.random() * 15;

        particle.vel.x = Math.cos(angle) * speed;
        particle.vel.y = Math.sin(angle) * speed;

        particle.size = 5;

        particle.gravity = 0.2;
        particle.resistance = 0.92;
        particle.shrink = Math.random() * 0.05 + 0.93;

        particle.color = this.explosionColor;

        particles.push(particle);
    }
};
// 轨迹渲染
Rocket.prototype.render = function (c) {

    c.save();

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size;

    c.fillStyle = 'rgb(255, 255, 255)';

    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
};
// 粒子构造函数
function Particle(pos) {
    this.pos = {
        x: pos ? pos.x : 0,
        y: pos ? pos.y : 0
    };
    this.vel = {
        x: 0,
        y: 0
    };
    this.shrink = .97;
    this.size = 1;

    this.resistance = 1;
    this.gravity = 0;

    this.alpha = 1;
    this.fade = 0;
    this.color = '#fff';
}
// 判断是否存在
Particle.prototype.exists = function () {
    return this.alpha >= 0.1 && this.size >= 1;
};
// 粒子更新
Particle.prototype.update = function () {
    // 阻力
    this.vel.x *= this.resistance;
    this.vel.y *= this.resistance;

    //    加速度向下
    this.vel.y += this.gravity;

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // 收缩
    this.size *= this.shrink;

    // 显隐
    this.alpha -= this.fade;
};
// 粒子渲染
Particle.prototype.render = function (c) {
    if (!this.exists()) {
        return;
    }
    c.save();

    c.globalCompositeOperation = 'lighter';

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size;

    c.fillStyle = this.color;

    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, true);

    c.closePath();
    c.fill();

    c.restore();
};