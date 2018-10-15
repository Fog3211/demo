var app = require("http").createServer();
var io = require("socket.io")(app);
var PORT = 8001;
var clientCount = 0;
app.listen(PORT);
io.on("connection", function (socket) {
    clientCount++;
    socket.nickName = "user" + clientCount;
    io.emit("enter", socket.nickName + " come in ~");
    socket.on("message", function (str) {
        io.emit("message", socket.nickName + " say: " + str);
    });
    socket.on("disconnect", function () {
        io.emit("leave", socket.nickName + " leave ~");
    });
})