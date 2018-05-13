var ws = require("nodejs-websocket")
var PORT = 8001;
var clientCount = 0;
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection")
    clientCount++;
    conn.nickName = "user" + clientCount;
    var mes = {};
    mes.type = "enter";
    mes.data = conn.nickName + " come in ~";
    broadcast(JSON.stringify(mes));
    conn.on("text", function (str) {
        console.log("Received " + str)
        var mes = {};
        mes.type = "message";
        mes.data = conn.nickName + " say: " + str;
        broadcast(JSON.stringify(mes));
    })
    conn.on("close", function (code, reason) {
        clientCount--;
        var mes = {};
        mes.type = "leave";
        mes.data = conn.nickName + " leave ~";
        broadcast(JSON.stringify(mes));
        console.log("Connection closed")
    })
    conn.on("error", function (err) {
        console.log("catch error!");
        console.log(err);
    })

    function broadcast(str) {
        server.connections.forEach(function (connection) {
            connection.send(str);
        })
    }
}).listen(PORT)